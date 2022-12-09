<?php


namespace Jet_FB_Custom_Gateway\Logic;


use Jet_FB_Custom_Gateway\Connectors\PayNowConnector;
use Jet_Form_Builder\Actions\Types\Save_Record;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Gateways\Db_Models\Payment_To_Record;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Base;

class PayNow extends Scenario_Logic_Base {

	use PayNowConnector;

	private $resource_id;

	/**
	 * Runs after all actions are completed.
	 */
	public function after_actions() {
		/**
		 * Here you can perform the following actions:
		 *
		 * 1. Create a payment instance using the request API
		 *
		 * 2. Save the payment in a special table. An example is here
		 * @see \Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic\Pay_Now::save_resource
		 *
		 * 3. Save the ID of the newly created record to the
		 * @see \Jet_FB_Custom_Gateway\Logic\PayNow::$resource_id
		 *
		 * 4. It is necessary to save the redirect address in the response_data field
		 * of the Action_Handler object under the key 'redirect'
		 *
		 * @example jet_fb_action_handler()->add_response( array( 'redirect' => $href ) );
		 */

		Save_Record::add_hidden();

		add_action(
			'jet-form-builder/form-handler/after-send',
			array( $this, 'attach_record_id' )
		);
	}

	/**
	 * @throws Sql_Exception
	 */
	public function attach_record_id() {
		$record_id = jet_fb_action_handler()->get_context( Save_Record::ID, 'id' );

		if ( ! $record_id || ! $this->resource_id ) {
			return;
		}

		( new Payment_To_Record() )->insert(
			array(
				'record_id'  => $record_id,
				'payment_id' => $this->resource_id,
			)
		);
	}

	/**
	 * Here you should check the status of your payment and then update
	 * its data according to the example:
	 * @see \Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic\Pay_Now::save_payment
	 */
	public function process_after() {
	}


	/**
	 * This method should return a unique string that is used to look
	 * up the payment in the database and then use it more often for the request API.
	 *
	 * @return string
	 * @see \Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic\Pay_Now::query_token
	 *
	 */
	protected function query_token() {
		return '';
	}

	/**
	 * Runs after saving the script token,
	 * when receiving form metadata.
	 *
	 * Stores the result in `queried_row`
	 *
	 * You can use following method:
	 * @return array
	 * @see \Jet_Form_Builder\Gateways\Query_Views\Payment_With_Record_View::findOne
	 *
	 */
	protected function query_scenario_row() {
		return array();
	}

	/**
	 * The names of the statuses through which an error should be returned.
	 *
	 * @return array
	 */
	public function get_failed_statuses() {
		return array();
	}
}