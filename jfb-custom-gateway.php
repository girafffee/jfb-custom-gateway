<?php
/**
 * Plugin Name: JetFormBuilder Custom Gateway
 * Plugin URI:  https://jetformbuilder.com/#
 * Description:
 * Version:     1.0.0
 * Author:      Crocoblock
 * Author URI:  https://crocoblock.com/
 * Text Domain: jet-form-builder-user-login-action
 * License:     GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

define( 'JET_FB_CUSTOM_GATEWAY_VERSION', '1.0.0' );

define( 'JET_FB_CUSTOM_GATEWAY__FILE__', __FILE__ );
define( 'JET_FB_CUSTOM_GATEWAY_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'JET_FB_CUSTOM_GATEWAY_PATH', plugin_dir_path( __FILE__ ) );
define( 'JET_FB_CUSTOM_GATEWAY_URL', plugins_url( '/', __FILE__ ) );

require JET_FB_CUSTOM_GATEWAY_PATH . 'vendor/autoload.php';

if ( version_compare( PHP_VERSION, '7.0.0', '>=' ) ) {
	add_action( 'plugins_loaded', function () {
		\Jet_FB_Custom_Gateway\Plugin::instance();
	}, 100 );
} else {
	add_action( 'admin_notices', function () {
		$class   = 'notice notice-error';
		$message = __(
			'<b>Error:</b> <b>JetFormBuilder Custom Gateway</b> plugin requires a PHP version ">= 7.0.0" to work properly!',
			'jet-form-builder-custom-gateway'
		);
		printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), wp_kses_post( $message ) );
	} );
}

