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
 * Controller that displays Dokuwiki RSS Feed
 */
class DokuwikiController extends ActionController {

	/**
	 * @return void
	 */
	public function showAction() {
		$headline = $this->request->getInternalArgument('__headline');
		$url = $this->request->getInternalArgument('__url');

		$this->view->assign('headline', $headline);
					
		if($url) {
			$content = file_get_contents($url . '/feed.php?content=html');
			$x = new \SimpleXmlElement($content);
		}
		$this->view->assign('entries', $x);
		$this->view->assign('url', $url);

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
