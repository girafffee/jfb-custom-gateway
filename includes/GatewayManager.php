<?php


namespace Jet_FB_Custom_Gateway;


use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;

class GatewayManager {

	public static function register() {
		add_action(
			'jet-form-builder/gateways/register',
			array( self::class, 'register_controller' )
		);
	}

	public static function register_controller( Gateway_Manager $manager ) {
		try {
			$manager->register_gateway( new GatewayController() );
		} catch ( Repository_Exception $exception ) {
			wp_die( $exception->getMessage() );
		}
	}

}