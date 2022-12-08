<?php


namespace Jet_FB_Custom_Gateway\Connectors;

/**
 * Used in the next classes:
 * @see \Jet_FB_Custom_Gateway\Logic\PayNow
 * @see \Jet_FB_Custom_Gateway\View\PayNow
 *
 * Trait PayNowConnector
 * @package Jet_FB_Custom_Gateway\Connectors
 */
trait PayNowConnector {

	/**
	 * leave PAY_NOW here for one-time payments and
	 * SUBSCRIBE_NOW for recurring payments
	 *
	 * @return string
	 */
	public static function scenario_id() {
		return 'PAY_NOW';
	}

}

