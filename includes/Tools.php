<?php


namespace Jet_FB_Custom_Gateway;


class Tools {

	public static function has_jfb(): bool {
		if ( ! function_exists( 'jet_form_builder' ) ) {
			return false;
		}
		$version = jet_form_builder()->get_version();

		return version_compare( $version, '2.0.0', '>=' );
	}

}