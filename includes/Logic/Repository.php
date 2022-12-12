<?php


namespace Jet_FB_Custom_Gateway\Logic;


use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Repository;

class Repository extends Scenario_Logic_Repository {

	public function rep_instances(): array {
		return array(
			new PayNow(),
		);
	}
}