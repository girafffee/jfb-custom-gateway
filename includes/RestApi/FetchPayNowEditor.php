<?php


namespace Jet_FB_Custom_Gateway\RestApi;

use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class FetchPayNowEditor extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'custom-gateway-fetch-pay-now';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		// REST API request for validate user token(s)

		return new \WP_REST_Response(
			array(
				'message' => __( 'Access key saved successfully!', 'jet-form-builder' ),
			)
		);
	}
}
