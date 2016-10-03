<?php
namespace JoRo\KnallImAll\Controller;

/*                                                                        *
 * This script belongs to the TYPO3 Flow package "TYPO3.NeosDemoTypo3Org".*
 *                                                                        *
 * It is free software; you can redistribute it and/or modify it under    *
 * the terms of the GNU General Public License as published by the Free   *
 * Software Foundation, either version 3 of the License, or (at your      *
 * option) any later version.                                             *
 *                                                                        *
 * The TYPO3 project - inspiring people to share!                         *
 *                                                                        */

use TYPO3\Flow\Annotations as Flow;
use TYPO3\Media\Domain\Model\Asset;
use TYPO3\Media\Domain\Model\AssetInterface;
use TYPO3\Media\Domain\Model\Image;
use TYPO3\TYPO3CR\Domain\Model\NodeInterface;
use TYPO3\Eel\FlowQuery\FlowQuery;
use TYPO3\Flow\Mvc\Controller\ActionController;

use TYPO3\Media\Domain\Repository\AssetRepository;
use TYPO3\Media\Domain\Repository\ImageRepository;
use TYPO3\TypoScript\TypoScriptObjects\Helpers\FluidView;
use TYPO3\TypoScript\TypoScriptObjects\TemplateImplementation;

/**
 * Controller that displays flickr photo streams
 */
class BikeTourController extends ActionController {

	/**
	 * @Flow\Inject(setting="biketour.tagStreamUriPattern")
	 * @var string
	 */

	/**
	 * @Flow\Inject(setting="biketour.userStreamUriPattern")
	 * @var string
	 */
	protected $userStreamUriPattern;

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
		$headline = $this->request->getInternalArgument('__headline');
		$text = $this->request->getInternalArgument('__text');
		$asset = $this->request->getInternalArgument('__tour');

		$currentNode = strtoupper(str_replace('-', '', $this->request->getInternalArgument('__node')->getIdentifier()));
		$c=0;
					
		if($asset) {
           
            
//             \TYPO3\FLOW\var_dump($asset->getResource()->getMediaType());
            
			$absoluteFilePath = $asset->getResource()->createTemporaryLocalCopy();
			$data=fopen($absoluteFilePath,'r');
	
			$coord = array();
			$elevation = array();
			$speedTotal = 0;
			
			$content = array();
			            
            $last_key = count($content) - 1;
            if($asset->getResource()->getMediaType() == 'text/csv') {

    			while($row=fgets($data)){
    				array_push($content, $row);
    			}

                foreach($content as $key => $line) {
    				if($c == 3){
    					$header = explode('","', $line);
                    } 
    
    				$fields = explode('","', $line);				
    				if($c == 4) {
                        $from_time = strtotime($fields[8]);
    				}
    				
    				if($c > 3){
    
    					$location = array($fields[2], $fields[3]);
    					array_push($coord, $location);
    					$speed = $fields[7] * 3600 / 1000;
    					$elev = array($fields[8], $fields[4], $speed);
    					array_push($elevation, $elev);
    					$speedTotal = $speedTotal + $speed;
    				}
    				
    				if($c == $last_key) {
                        $to_time = strtotime($fields[8]);
    				}
    				
    				$c++;
    			}                
            }
                
            if($asset->getResource()->getMediaType() == 'application/gpx+xml') {

                $xml = simplexml_load_file($absoluteFilePath);
                $coord = array();
                foreach($xml->trk->trkseg as $trkseg) {
                    foreach($trkseg->trkpt as $trkpt) {
                        array_push($coord, array((string) $trkpt['lat'], (string) $trkpt['lon']));                    
    					// $speed = $fields[7] * 3600 / 1000;
    					$elev = array($trkpt->time, $trkpt->ele, '50');
    					array_push($elevation, $elev);
                        // $speedTotal = $speedTotal + $speed;
                        $speedTotal = '100';
                    }
                }
            }
            
			$geoC = 0;
			$distance = 0;
			$last_key = count($coord) - 1;


			// CALC DISTANCE ... 
			foreach($coord as $key => $geo) {
								
			    if ($key == $last_key) {
        			// DENNA ...
			    } else {
					$lat = $geo[0];
					$lng = $geo[1];
	
					$geoC++;
					$nextKey = $key + 1;
					$latNext = $coord[$nextKey][0];
					$lngNext = $coord[$nextKey][1];
	
					$distance = $distance + $this->distance($lat, $lng, $latNext, $lngNext, "K");
			    }
				
			}
	
			$this->view->assign('currentNode',  $currentNode);
			$this->view->assign('headline', $headline);
			$this->view->assign('average_speed', round($speedTotal/(count($coord)), 2));
			$this->view->assign('distance', round($distance, 2));
			//$this->view->assign('time', round(abs($to_time - $from_time) / 60,2) . " min");
			
// 			round(abs($to_time - $from_time) / 60,0)
			
			$this->view->assign('coord', $coord);
			$this->view->assign('elevation', $elevation);
			$this->view->assign('asset', $asset);
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
