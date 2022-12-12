<?php


namespace Jet_FB_Custom_Gateway;


class Tools {

	public static function has_jfb(): bool {
		return (
			function_exists( 'jet_form_builder' ) &&
			version_compare( jet_form_builder()->get_version(), '2.0.0', '>=' )
		);
	}

}