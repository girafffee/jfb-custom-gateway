<?php


namespace Jet_FB_Custom_Gateway;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenarios_Manager_Abstract;

use Jet_FB_Custom_Gateway\Logic\Repository as LogicRepository;
use Jet_FB_Custom_Gateway\View\Repository as ViewRepository;

/**
 * @method static ScenariosManager instance()
 *
 * Class Scenarios_Manager
 * @package Jet_FB_Stripe_Gateway\Compatibility\Jet_Form_Builder
 */
class ScenariosManager extends Scenarios_Manager_Abstract {

	use Instance_Trait;

	public function __construct() {
		$this->set_logic_manager( new LogicRepository() );
		$this->set_view_manager( new ViewRepository() );

		parent::__construct();
	}

}