<?php


namespace Jet_FB_Custom_Gateway\RestApi;


use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Controller extends Rest_Api_Controller_Base {

	/**
	 * @return Rest_Api_Endpoint_Base[]
	 */
	public function routes(): array {
		return array(
			new FetchPayNowEditor(),
		);
	}
}