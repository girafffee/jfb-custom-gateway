<?php


namespace Jet_FB_Custom_Gateway;


class Plugin {
	/**
	 * Instance.
	 *
	 * Holds the plugin instance.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @var Plugin
	 */
	public static $instance = null;

	public $slug = 'jet-form-builder-custom-gateway';

	private function __construct() {
	}

	public function get_version(): string {
		return JET_FB_CUSTOM_GATEWAY_VERSION;
	}

	public function plugin_url( $path ): string {
		return JET_FB_CUSTOM_GATEWAY_URL . $path;
	}

	public function plugin_dir( $path = '' ): string {
		return JET_FB_CUSTOM_GATEWAY_PATH . $path;
	}

	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Plugin An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 */
	public static function instance(): Plugin {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}