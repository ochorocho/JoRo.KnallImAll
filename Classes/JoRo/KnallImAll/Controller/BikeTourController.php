<?php
namespace JoRo\KnallImAll\Controller;

/*                                                                        *
 * This script belongs to the TYPO3 Flow package "Neos.NeosDemoTypo3Org".*
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
 * Controller that displays flickr photo streams
 */
class BikeTourController extends ActionController {

//	/**
//	 * @Flow\Inject(setting="biketour.tagStreamUriPattern")
//	 * @var string
//	 */
//
//	/**
//	 * @Flow\Inject(setting="biketour.userStreamUriPattern")
//	 * @var string
//	 */

	protected $userStreamUriPattern;

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

		$properties = $this->request->getInternalArgument('__node')->getNodeData()->getProperties();
		$node = $this->request->getInternalArgument('__node');

		$headline = $properties['headline'];
		$asset = $properties['tour'];

		$currentNode = strtoupper(str_replace('-', '', $this->request->getInternalArgument('__node')->getIdentifier()));
		$c=0;
					
		if($asset) {

			$absoluteFilePath = $asset->getResource()->createTemporaryLocalCopy();
			$data=fopen($absoluteFilePath,'r');

            if($asset->getResource()->getMediaType() == 'application/gpx+xml') {

				$gpx = new GPXIngest();
				$gpx->unsuppress('speed');
				$gpx->enableExperimental('calcDistance');
				$gpx->loadFile($absoluteFilePath);
				$gpx->ingest($unit = 'kph');
				$gpxObject = $gpx->getJSON();

				$gpxObject = json_decode($gpxObject, true);

				$gpxObject['stats']['distanceTravelled'] = round($gpxObject['stats']['distanceTravelled'] / 3280.8, 2);
				$gpxObject['stats']['avgspeed'] = round($gpxObject['stats']['avgspeed'] * 1.60934, 2);
				$gpxObject['stats']['timeMoving'] = gmdate("H:i:s", $gpxObject['stats']['timeMoving']);
				\Neos\Flow\var_dump($gpxObject['stats']);

				foreach ($gpxObject['journeys'] as $keyJ=>$journey) {
					foreach ($journey['segments'] as $keyS=>$segment) {
						foreach ($segment['points'] as $keyP=>$point) {
							$point['speed'] = preg_replace("/(.*) MPH/", "$1", $point['speed']);
							$gpxObject['journeys'][$keyJ]['segments'][$keyS]['points'][$keyP]['speed'] = $point['speed'] * 1.609344;
							$gpxObject['journeys'][$keyJ]['segments'][$keyS]['points'][$keyP]['time'] = $point['time'] * 1000;
						}
					}
				}
			}

			$this->view->assign('headline', $headline);
			$this->view->assign('gpx', $gpxObject);
			$this->view->assign('asset', $asset);
			$node->cssId = str_replace('-', '', $node->getIdentifier());
			$this->view->assign('node', $node);
		}
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
