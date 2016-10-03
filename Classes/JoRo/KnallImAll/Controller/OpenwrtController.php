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
 * Controller that displays OpenWRT Build
 */
class OpenwrtController extends ActionController {

	/**
	 * @return void
	 */
	public function showAction() {
		$headline = $this->request->getInternalArgument('__headline');
		$path = $this->request->getInternalArgument('__path');
		$filter = explode(',', $this->request->getInternalArgument('__filter'));

		$files = scandir($path);
		
		foreach($filter as &$fileFilter) {
			$search = array_search($fileFilter, $files);
			if($search != false) {
				unset($files[$search]);
			}
		}

				
		$this->view->assign('headline', $headline);
		$this->view->assign('files', $files);

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
