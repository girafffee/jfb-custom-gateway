<?php


namespace Jet_FB_Custom_Gateway;


class EditorManager {

	public static function register() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( self::class, 'register_assets' )
		);
	}

	public static function register_assets() {
		wp_enqueue_script(
			Plugin::instance()->slug,
			Plugin::instance()->plugin_url( 'assets/js/editor.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);
	}

}