<?php


namespace Jet_FB_Custom_Gateway;


use Jet_FB_Custom_Gateway\Logic\PayNow;
use Jet_Form_Builder\Gateways\Base_Scenario_Gateway;

class GatewayController extends Base_Scenario_Gateway {

	public function get_id() {
		return 'custom';
	}

	public function get_name() {
		return __( 'Custom Gateway Checkout', 'jfb-custom-gateway' );
	}

	public function get_scenario() {
		return ScenariosManager::instance()->get_logic( $this );
	}

	public function query_scenario() {
		return ScenariosManager::instance()->query_logic();
	}

	protected function options_list() {
		return array(
			'public'       => array(
				'label' => __( 'Public Key', 'jet-form-builder' ),
			),
			'secret'       => array(
				'label' => __( 'Secret Key', 'jet-form-builder' ),
			),
			'currency'     => array(
				'label' => __( 'Currency Code', 'jet-form-builder' ),
			),
			'use_global'   => array(
				'label'    => __( 'Use Global Settings', 'jet-form-builder' ),
				'required' => false,
			),
			'gateway_type' => array(
				'label'   => _x( 'Gateway Action', 'jfb-custom-gateway' ),
				'default' => PayNow::scenario_id(),
			),
		);
	}
}