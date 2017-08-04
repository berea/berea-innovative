// Register Theme Features
function custom_theme_features()  {

	// Add theme support for Post Formats
	add_theme_support( 'post-formats', array( 'video' ) );

	// Add theme support for Custom Background
	$background_args = array(
		'default-color'          => '#005A8B',
		'default-image'          => '',
		'default-repeat'         => '',
		'default-position-x'     => '',
		'wp-head-callback'       => '',
		'admin-head-callback'    => '',
		'admin-preview-callback' => '',
	);
	add_theme_support( 'custom-background', $background_args );

	// Add theme support for Custom Header
	$header_args = array(
		'default-image'          => '',
		'width'                  => 0,
		'height'                 => 0,
		'flex-width'             => true,
		'flex-height'            => true,
		'uploads'                => false,
		'random-default'         => false,
		'header-text'            => false,
		'default-text-color'     => '',
		'wp-head-callback'       => '',
		'admin-head-callback'    => '',
		'admin-preview-callback' => '',
		'video'                  => true,
		'video-active-callback'  => '',
	);
	add_theme_support( 'custom-header', $header_args );

	// Add theme support for Translation
	load_theme_textdomain( 'text_domain', get_template_directory() . '/library/languages' );
}
add_action( 'after_setup_theme', 'custom_theme_features' );