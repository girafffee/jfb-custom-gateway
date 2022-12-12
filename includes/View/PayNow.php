<?php


namespace Jet_FB_Custom_Gateway\View;


use Jet_FB_Custom_Gateway\Connectors\PayNowConnector;
use Jet_FB_Custom_Gateway\RestApi\FetchPayNowEditor;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_View_Base;

class PayNow extends Scenario_View_Base {

	use PayNowConnector;

	public function get_title(): string {
		return _x( 'Pay Now', 'Gateway editor data', 'jet-form-builder' );
	}

	public function get_editor_data(): array {
		return array(
			'fetch' => FetchPayNowEditor::get_endpoint(),
		);
	}

}