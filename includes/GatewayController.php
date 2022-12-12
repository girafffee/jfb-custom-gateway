<?php


namespace Jet_FB_Custom_Gateway;


use Jet_Form_Builder\Gateways\Base_Scenario_Gateway;
use Jet_Form_Builder\Classes\Tools as JFBTools;

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

	public function additional_editor_data(): array {
		return array_merge(
			array(
				'version'   => 1,
				'scenarios' => JFBTools::with_placeholder(
					ScenariosManager::instance()->view()->get_items_list(),
					__( 'Choose scenario...', 'jet-form-builder' )
				),
			),
			ScenariosManager::instance()->view()->get_editor_data()
		);
	}

	protected function options_list() {
		return array();
	}
}