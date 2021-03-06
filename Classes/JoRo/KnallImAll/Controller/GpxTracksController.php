<?php
namespace JoRo\KnallImAll\Controller;

/*                                                                        *
 * This script belongs to the Neos Flow package "Neos.NeosDemoTypo3Org".*
 *                                                                        *
 * It is free software; you can redistribute it and/or modify it under    *
 * the terms of the GNU General Public License as published by the Free   *
 * Software Foundation, either version 3 of the License, or (at your      *
 * option) any later version.                                             *
 *                                                                        *
 * The Neos project - inspiring people to share!                         *
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

/**
 * Controller that displays flickr photo streams
 */
class GpxTracksController extends ActionController {

//	/**
//	 * @Flow\Inject(setting="biketour.tagStreamUriPattern")
//	 * @var string
//	 */
//
//	/**
//	 * @Flow\Inject(setting="biketour.assetRepository")
//	 * @var string
//	 */
	protected $assetRepository;


	/**
	 * @return void
	 */
	public function detailAction() {
		$tags = $this->request->getInternalArgument('__headline');
		if ($tags === NULL || $tags === '') {
			return '<p>Please specify Flickr tag(s)</p>';
		}

		$this->view->assign('tags', $tags);
	}

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
	public function showAction() {
		$headline = $this->request->getInternalArgument('__headline');
		
		$text = $this->request->getInternalArgument('__text');
		$asset = $this->request->getInternalArgument('__tour');
		
		$currentNode = strtoupper(str_replace('-', '', $this->request->getInternalArgument('__node')->getIdentifier()));
		$c=0;
		
        $asset = $this->request->getInternalArgument('__tour');
        
        $headline = $this->request->getInternalArgument('__headline');
        $text = $this->request->getInternalArgument('__text');

		$tagLabel = $this->request->getInternalArgument('__tag');
        
        $filePaths = array();

        if($asset) {
            foreach($asset as &$gpxFile) {
                array_push($filePaths, $gpxFile->getResource()->createTemporaryLocalCopy());
            }            
        }


        /** @var @var $tagRepository \Neos\Media\Domain\Repository\TagRepository */
		$tagRepository = $this->objectManager->get('\\Neos\\Media\\Domain\\Repository\\TagRepository');
		/** @var $persistenceManager \Neos\Flow\Persistence\PersistenceManagerInterface */
		$persistenceManager = $this->objectManager->get('Neos\\Flow\\Persistence\\PersistenceManagerInterface');

//         date_default_timezone_set('Australia/Sydney');

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
    			
                if($image->getResource()->getMediaType() == 'image/jpeg') {
                    $tempImage = $image->getResource()->createTemporaryLocalCopy();
                    $exif = exif_read_data($tempImage);
    
                    if(isset($exif["GPSLatitude"]) && isset($exif["GPSLatitudeRef"])) {
                        $lat = $this->getGps($exif["GPSLatitude"], $exif['GPSLatitudeRef']);                    
                    } else {
                        $lat = false;
                    }
    
                    if(isset($exif["GPSLongitude"]) && isset($exif["GPSLongitudeRef"])) {
                        $lon = $this->getGps($exif["GPSLongitude"], $exif['GPSLongitudeRef']);
                    } else {
                        $lon = false;
                    }
    
                    if(isset($exif["GPSLatitude"]) && isset($exif["GPSLongitude"])) {
            			
            			if(!empty($exif['DateTimeOriginal'])) {
                			$date = strtotime($this->convertExifToTimestamp($exif['DateTimeOriginal'], "d-m-Y h:i:s A"));
            			} else {
                			$date = '';
            			}
            			
            			$item = array(
            				'label' => $image->getTitle(),
                            'caption' => $image->getCaption(),
                            'date' => $date,
                            'exifdate' => $date,
            				'filepath' => $image,
            				'lat' => $lat,
            				'lon' => $lon,
            				'id' => $persistenceManager->getIdentifierByObject($image)
            			);                    
                        $images[$i] = $item;

                        $i++;
                    }
                }
            }
            
		}

        usort($images, function($a, $b) {
            return $a['date'] - $b['date'];
        });

        $fileArray = array();

        foreach($filePaths as &$file) {
            $xml = simplexml_load_file($file);
            $coord = array();
            foreach($xml->trk->trkseg as $trkseg) {
                foreach($trkseg->trkpt as $trkpt) {
                    array_push($coord, array((string) $trkpt['lat'], (string) $trkpt['lon']));                    
                }
            }
            array_push($fileArray, $coord);
        }

        $currentNode = $this->request->getInternalArgument('__node')->getIdentifier();
		$this->view->assign('file', $fileArray);
		$this->view->assign('images', $images);
		$this->view->assign('currentNode', $currentNode);
		$this->view->assign('headline', $headline);
		$this->view->assign('text', $text);

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
