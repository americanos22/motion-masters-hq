<?php
/**
 * Digital Work Theme Functions
 *
 * @package Digital_Work
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'DIGITAL_WORK_VERSION', '1.0.0' );
define( 'DIGITAL_WORK_DIR', get_template_directory() );
define( 'DIGITAL_WORK_URI', get_template_directory_uri() );

/**
 * Theme Setup
 */
function digital_work_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails
    add_theme_support( 'post-thumbnails' );

    // Custom logo support
    add_theme_support( 'custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // HTML5 support
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // WooCommerce support
    add_theme_support( 'woocommerce' );
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );

    // Custom image sizes
    add_image_size( 'product-thumbnail', 400, 300, true );
    add_image_size( 'product-large', 800, 600, true );
    add_image_size( 'hero-image', 1920, 1080, true );
    add_image_size( 'category-thumb', 600, 400, true );

    // Register navigation menus
    register_nav_menus( array(
        'primary'        => __( 'Primary Menu', 'digital-work' ),
        'footer_shop'    => __( 'Footer Shop Links', 'digital-work' ),
        'footer_support' => __( 'Footer Support Links', 'digital-work' ),
        'footer_legal'   => __( 'Footer Legal Links', 'digital-work' ),
    ) );
}
add_action( 'after_setup_theme', 'digital_work_setup' );

/**
 * Enqueue Styles and Scripts
 */
function digital_work_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'digital-work-fonts',
        'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'digital-work-style',
        get_stylesheet_uri(),
        array( 'digital-work-fonts' ),
        DIGITAL_WORK_VERSION
    );

    // Custom CSS (if using compiled Tailwind separately)
    if ( file_exists( DIGITAL_WORK_DIR . '/assets/css/main.css' ) ) {
        wp_enqueue_style(
            'digital-work-main',
            DIGITAL_WORK_URI . '/assets/css/main.css',
            array( 'digital-work-style' ),
            DIGITAL_WORK_VERSION
        );
    }

    // Main JavaScript
    wp_enqueue_script(
        'digital-work-main',
        DIGITAL_WORK_URI . '/assets/js/main.js',
        array(),
        DIGITAL_WORK_VERSION,
        true
    );

    // Localize script for AJAX
    wp_localize_script( 'digital-work-main', 'digitalWork', array(
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'digital-work-nonce' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'digital_work_scripts' );

/**
 * Register Sidebars/Widget Areas
 */
function digital_work_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Footer Newsletter', 'digital-work' ),
        'id'            => 'footer-newsletter',
        'description'   => __( 'Newsletter signup area in footer.', 'digital-work' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title text-xl font-bold mb-4">',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Shop Sidebar', 'digital-work' ),
        'id'            => 'shop-sidebar',
        'description'   => __( 'Sidebar for shop pages.', 'digital-work' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s mb-6">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title text-lg font-semibold mb-3">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'digital_work_widgets_init' );

/**
 * Include Customizer Settings
 */
require_once DIGITAL_WORK_DIR . '/inc/customizer.php';

/**
 * Include WooCommerce Setup (if WooCommerce is active)
 */
if ( class_exists( 'WooCommerce' ) ) {
    require_once DIGITAL_WORK_DIR . '/inc/woocommerce-setup.php';
}

/**
 * Include Template Functions
 */
require_once DIGITAL_WORK_DIR . '/inc/template-functions.php';

/**
 * Custom Excerpt Length
 */
function digital_work_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'digital_work_excerpt_length' );

/**
 * Custom Excerpt More
 */
function digital_work_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'digital_work_excerpt_more' );

/**
 * Add body classes
 */
function digital_work_body_classes( $classes ) {
    // Add class for front page
    if ( is_front_page() ) {
        $classes[] = 'front-page';
    }

    // Add class for WooCommerce pages
    if ( function_exists( 'is_woocommerce' ) && is_woocommerce() ) {
        $classes[] = 'woocommerce-page';
    }

    // Add class if WooCommerce is active
    if ( class_exists( 'WooCommerce' ) ) {
        $classes[] = 'has-woocommerce';
    }

    return $classes;
}
add_filter( 'body_class', 'digital_work_body_classes' );

/**
 * Disable Gutenberg Editor for specific templates
 */
function digital_work_disable_gutenberg( $use_block_editor, $post ) {
    $disabled_templates = array(
        'page-templates/template-how-it-works.php',
        'page-templates/template-about.php',
        'page-templates/template-contact.php',
        'page-templates/template-faq.php',
    );

    if ( $post ) {
        $template = get_post_meta( $post->ID, '_wp_page_template', true );
        if ( in_array( $template, $disabled_templates ) ) {
            return false;
        }
    }

    return $use_block_editor;
}
add_filter( 'use_block_editor_for_post', 'digital_work_disable_gutenberg', 10, 2 );

/**
 * AJAX Newsletter Subscription Handler
 */
function digital_work_newsletter_subscribe() {
    check_ajax_referer( 'digital-work-nonce', 'nonce' );

    $email = sanitize_email( $_POST['email'] );

    if ( ! is_email( $email ) ) {
        wp_send_json_error( array( 'message' => __( 'Please enter a valid email address.', 'digital-work' ) ) );
    }

    // Here you would integrate with your email service (Mailchimp, etc.)
    // For now, we'll just return success
    wp_send_json_success( array( 'message' => __( 'Thank you for subscribing!', 'digital-work' ) ) );
}
add_action( 'wp_ajax_newsletter_subscribe', 'digital_work_newsletter_subscribe' );
add_action( 'wp_ajax_nopriv_newsletter_subscribe', 'digital_work_newsletter_subscribe' );

/**
 * Get cart count for header (works with or without WooCommerce)
 */
function digital_work_get_cart_count() {
    if ( function_exists( 'WC' ) && WC()->cart ) {
        return WC()->cart->get_cart_contents_count();
    }
    return 0;
}

/**
 * Get theme option with default fallback
 */
function digital_work_get_option( $option, $default = '' ) {
    return get_theme_mod( $option, $default );
}

/**
 * Display custom logo or site title
 */
function digital_work_logo() {
    if ( has_custom_logo() ) {
        the_custom_logo();
    } else {
        echo '<a href="' . esc_url( home_url( '/' ) ) . '" class="site-title text-2xl font-bold">';
        echo esc_html( get_bloginfo( 'name' ) );
        echo '</a>';
    }
}

/**
 * Get social media links
 */
function digital_work_get_social_links() {
    return array(
        'instagram' => digital_work_get_option( 'social_instagram', '' ),
        'facebook'  => digital_work_get_option( 'social_facebook', '' ),
        'youtube'   => digital_work_get_option( 'social_youtube', '' ),
        'twitter'   => digital_work_get_option( 'social_twitter', '' ),
    );
}
