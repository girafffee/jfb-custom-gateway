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

	public function get_editor_labels(): array {
		return array(
			'currency'           => __( 'Currency Code', 'jet-form-builder' ),
			'fetch_button'       => __( 'Sync Access Token', 'jet-form-builder' ),
			'fetch_button_retry' => __( 'Access Token updated', 'jet-form-builder' ),
			'fetch_button_label' => __( 'Request Button', 'jet-form-builder' ),
			'fetch_button_help'  => __( 'Click on the button to further manage the payment settings', 'jet-form-builder' ),
		);
	}

	public function get_editor_data(): array {
		return array(
			'fetch' => FetchPayNowEditor::get_endpoint(),
		);
	}

}