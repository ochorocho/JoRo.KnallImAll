<?php
namespace JoRo\KnallImAll\Controller;

/*                                                                        *
 * This script belongs to the TYPO3 Flow package "JoRo.KnallImAll".*
 *                                                                        *
 * It is free software; you can redistribute it and/or modify it under    *
 * the terms of the GNU General Public License as published by the Free   *
 * Software Foundation, either version 3 of the License, or (at your      *
 * option) any later version.                                             *
 *                                                                        *
 * The TYPO3 project - inspiring people to share!                         *
 *                                                                        */

use Neos\Flow\Annotations as Flow;
use Neos\Media\Domain\Model\Asset;
use Neos\Media\Domain\Model\AssetInterface;
use Neos\Media\Domain\Model\Image;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Media\Domain\Repository\AssetRepository;
use Neos\Media\Domain\Repository\ImageRepository;
use Neos\Fusion\FusionObjects\Helpers\FluidView;
use Neos\Fusion\FusionObjects\TemplateImplementation;
use GPXIngest\GPXIngest;


/**
 * Controller that displays a polyline on google maps
 */
class BikeTourController extends ActionController {

	/**
	 * @return void
	 */

	public function getGps($exifCoord, $hemi) {

		$degrees = count($exifCoord) > 0 ? $this->gps2Num($exifCoord[0]) : 0;
		$minutes = count($exifCoord) > 1 ? $this->gps2Num($exifCoord[1]) : 0;
		$seconds = count($exifCoord) > 2 ? $this->gps2Num($exifCoord[2]) : 0;

		$flip = ($hemi == 'W' or $hemi == 'S') ? -1 : 1;

		return $flip * ($degrees + $minutes / 60 + $seconds / 3600);

	}

	function gps2Num($coordPart) {

		$parts = explode('/', $coordPart);

		if (count($parts) <= 0)
			return 0;

		if (count($parts) == 1)
			return $parts[0];

		return floatval($parts[0]) / floatval($parts[1]);
	}

	function convertExifToTimestamp($exifString, $dateFormat)
	{
		$exifPieces = explode(" ", $exifString);
		return date($dateFormat,strtotime(str_replace(":","-",$exifPieces[0])." ".$exifPieces[1]));
	}

	/**
	 * @return void
	 */
	public function objectarray($data)
	{
		if (is_array($data) || is_object($data))
		{
			$result = array();
			foreach ($data as $key => $value)
			{
				$result[$key] = $this->objectarray($value);
			}
			return $result;
		}
		return $data;
	}

	/**
	 * @return void
	 */
	public function distance($lat1, $lon1, $lat2, $lon2, $unit) {
	
		$theta = $lon1 - $lon2;
		$dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
		$dist = acos($dist);
		$dist = rad2deg($dist);
		$miles = $dist * 60 * 1.1515;
		$unit = strtoupper($unit);
		
		if ($unit == "K") {
			return ($miles * 1.609344);
		} else if ($unit == "N") {
			return ($miles * 0.8684);
		} else {
			return $miles;
		}
	}

	/**
	 * @return void
	 */
	public function showAction() {

		$node = $this->request->getInternalArgument('__node');
		$properties = $node->getNodeData()->getProperties();

		//\Neos\Flow\var_dump($node);

		$headline = $properties['headline'];

		$asset = $properties['tour'];

		$currentNode = strtoupper(str_replace('-', '', $this->request->getInternalArgument('__node')->getIdentifier()));
		$c=0;

		if($properties['tour'] == NULL) {
			$this->addFlashMessage('Sorry, I messed it all up!', 'My Fault',
				\Neos\Error\Messages\Message::SEVERITY_ERROR);
		} else {
			if ($asset) {

				$absoluteFilePath = $asset->getResource()->createTemporaryLocalCopy();
				$data = fopen($absoluteFilePath, 'r');

				if ($asset->getResource()->getMediaType() == 'application/gpx+xml') {

					$gpx = new GPXIngest();
					$gpx->unsuppress('speed');
					$gpx->enableExperimental('calcDistance');
					$gpx->loadFile($absoluteFilePath);
					$gpx->ingest($unit = 'kph');
					$gpxObject = $gpx->getJSON();

					$gpxObject = json_decode($gpxObject, true);

					$gpxObject['stats']['distanceTravelled'] = round($gpxObject['stats']['distanceTravelled'] / 3280.8,
						2);
					$gpxObject['stats']['avgspeed'] = round($gpxObject['stats']['avgspeed'] * 1.60934, 2);
					$gpxObject['stats']['timeMoving'] = gmdate("H:i:s", $gpxObject['stats']['timeMoving']);

					foreach ($gpxObject['journeys'] as $keyJ => $journey) {
						foreach ($journey['segments'] as $keyS => $segment) {
							foreach ($segment['points'] as $keyP => $point) {
								$point['speed'] = preg_replace("/(.*) MPH/", "$1", $point['speed']);
								$gpxObject['journeys'][$keyJ]['segments'][$keyS]['points'][$keyP]['speed'] = $point['speed'] * 1.609344;
								$gpxObject['journeys'][$keyJ]['segments'][$keyS]['points'][$keyP]['time'] = $point['time'] * 1000;
							}
						}
					}
				}

				$this->view->assign('properties', $properties);
				$this->view->assign('headline', $headline);
				$this->view->assign('gpx', $gpxObject);
				$this->view->assign('asset', $asset);
				$node->cssId = str_replace('-', '', $node->getIdentifier());
			}
		}

		$tagLabel = $this->request->getInternalArgument('__tag');

		$filePaths = array();

		/** @var @var $tagRepository \Neos\Media\Domain\Repository\TagRepository */
		$tagRepository = $this->objectManager->get('\\Neos\\Media\\Domain\\Repository\\TagRepository');
		/** @var $persistenceManager \Neos\Flow\Persistence\PersistenceManagerInterface */
		$persistenceManager = $this->objectManager->get('Neos\\Flow\\Persistence\\PersistenceManagerInterface');

		$tags = array();
		foreach($tagRepository->findBySearchTerm($tagLabel) as $tag) {

			/** @var $tag \Neos\Media\Domain\Model\Tag */
			$item = array(
				'label' => $tag->getLabel()
			);

			$tags[$persistenceManager->getIdentifierByObject($tag)] = $item;

			/** @var @var $tagRepository \Neos\Media\Domain\Repository\TagRepository */
			$assetRepository = $this->objectManager->get('\\Neos\\Media\\Domain\\Repository\\AssetRepository');
			/** @var $persistenceManager \Neos\Flow\Persistence\PersistenceManagerInterface */
			$persistenceManager = $this->objectManager->get('Neos\\Flow\\Persistence\\PersistenceManagerInterface');

			$images = array();
			$i = 0;

			foreach($assetRepository->findByTag($tag) as $image) {

				// \Neos\Flow\var_dump($image);

				if($image->getResource()->getMediaType() == 'image/jpeg') {
					$tempImage = $image->getResource()->createTemporaryLocalCopy();
					$exif = exif_read_data($tempImage);

//                     var_dump($exif);

					if(isset($exif["GPSLatitude"]) && isset($exif["GPSLatitudeRef"])) {
						$lat = $this->getGps($exif["GPSLatitude"], $exif['GPSLatitudeRef']);
					} else {
						$lat = 'false';
					}

					if(isset($exif["GPSLongitude"]) && isset($exif["GPSLongitudeRef"])) {
						$lon = $this->getGps($exif["GPSLongitude"], $exif['GPSLongitudeRef']);
					} else {
						$lon = 'false';
					}


					if(!empty($exif['DateTimeOriginal'])) {
						$date = $exif['DateTimeOriginal'];
					} else {
						$date = $exif['GPSDateStamp'] . ' 00:00:00';
					}

					$item = array(
						'label' => $image->getTitle(),
						'caption' => $image->getCaption(),
						'date' => strtotime($this->convertExifToTimestamp($date, "d-m-Y h:i:s A")),
						'exifdate' => $this->convertExifToTimestamp($date, "d-m-Y h:i:s A"),
						'filepath' => $image,
						'lat' => $lat,
						'lon' => $lon,
						'id' => $persistenceManager->getIdentifierByObject($image)
					);
					$images[$persistenceManager->getIdentifierByObject($image)] = $item;
				}
			}

		}

		usort($images, function($a, $b) {
			return $a['date'] - $b['date'];
		});

		$debug = $images;

		$fileArray = array();

		foreach($filePaths as &$file) {
			$xml = simplexml_load_file($file);
			$coord = array();
			foreach($xml->trk->trkseg->trkpt as $trkpt) {
				array_push($coord, array((string) $trkpt['lat'], (string) $trkpt['lon']));
			}
			array_push($fileArray, $coord);
		}



		$this->view->assign('file', $fileArray);
		$this->view->assign('images', $images);


		$this->view->assign('node', $node);
	}

	/**
	 * Disable the default error flash message
	 *
	 * @return boolean
	 */
	protected function getErrorFlashMessage() {
		return FALSE;
	}
}
