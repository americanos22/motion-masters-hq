<?php
/**
 * Theme Customizer Settings
 *
 * @package Digital_Work
 */

function digital_work_customize_register( $wp_customize ) {

    // Brand Settings Panel
    $wp_customize->add_panel( 'digital_work_brand', array(
        'title'    => __( 'Digital Work Settings', 'digital-work' ),
        'priority' => 30,
    ) );

    // Hero Section
    $wp_customize->add_section( 'digital_work_hero', array(
        'title' => __( 'Hero Section', 'digital-work' ),
        'panel' => 'digital_work_brand',
    ) );

    $wp_customize->add_setting( 'hero_headline', array( 'default' => 'Bring Your Logo to Life', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'hero_headline', array( 'label' => __( 'Headline', 'digital-work' ), 'section' => 'digital_work_hero', 'type' => 'text' ) );

    $wp_customize->add_setting( 'hero_subheadline', array( 'default' => 'Professional animated logo videos that make your brand unforgettable.', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'hero_subheadline', array( 'label' => __( 'Subheadline', 'digital-work' ), 'section' => 'digital_work_hero', 'type' => 'textarea' ) );

    $wp_customize->add_setting( 'hero_background_image', array( 'sanitize_callback' => 'esc_url_raw' ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'hero_background_image', array( 'label' => __( 'Background Image', 'digital-work' ), 'section' => 'digital_work_hero' ) ) );

    // Stats
    $wp_customize->add_setting( 'stat_effects', array( 'default' => '35+', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'stat_effects', array( 'label' => __( 'Effects Count', 'digital-work' ), 'section' => 'digital_work_hero' ) );

    $wp_customize->add_setting( 'stat_customers', array( 'default' => '10K+', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'stat_customers', array( 'label' => __( 'Customers Count', 'digital-work' ), 'section' => 'digital_work_hero' ) );

    $wp_customize->add_setting( 'stat_delivery', array( 'default' => '24h', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'stat_delivery', array( 'label' => __( 'Delivery Time', 'digital-work' ), 'section' => 'digital_work_hero' ) );

    // Announcement Bar
    $wp_customize->add_section( 'digital_work_announcement', array( 'title' => __( 'Announcement Bar', 'digital-work' ), 'panel' => 'digital_work_brand' ) );

    $wp_customize->add_setting( 'announcement_enabled', array( 'default' => true, 'sanitize_callback' => 'wp_validate_boolean' ) );
    $wp_customize->add_control( 'announcement_enabled', array( 'label' => __( 'Enable Announcement Bar', 'digital-work' ), 'section' => 'digital_work_announcement', 'type' => 'checkbox' ) );

    $wp_customize->add_setting( 'announcement_text', array( 'default' => '🎬 Get 20% OFF your first order! Use code: WELCOME20', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'announcement_text', array( 'label' => __( 'Announcement Text', 'digital-work' ), 'section' => 'digital_work_announcement' ) );

    // Social Links
    $wp_customize->add_section( 'digital_work_social', array( 'title' => __( 'Social Links', 'digital-work' ), 'panel' => 'digital_work_brand' ) );

    foreach ( array( 'instagram', 'facebook', 'youtube', 'twitter' ) as $social ) {
        $wp_customize->add_setting( 'social_' . $social, array( 'sanitize_callback' => 'esc_url_raw' ) );
        $wp_customize->add_control( 'social_' . $social, array( 'label' => ucfirst( $social ) . ' URL', 'section' => 'digital_work_social', 'type' => 'url' ) );
    }

    // Footer
    $wp_customize->add_section( 'digital_work_footer', array( 'title' => __( 'Footer Settings', 'digital-work' ), 'panel' => 'digital_work_brand' ) );

    $wp_customize->add_setting( 'footer_headline', array( 'default' => 'Bring Your Logo to Life', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'footer_headline', array( 'label' => __( 'Footer Headline', 'digital-work' ), 'section' => 'digital_work_footer' ) );

    $wp_customize->add_setting( 'support_email', array( 'default' => 'support@digitalwork.com', 'sanitize_callback' => 'sanitize_email' ) );
    $wp_customize->add_control( 'support_email', array( 'label' => __( 'Support Email', 'digital-work' ), 'section' => 'digital_work_footer' ) );

    $wp_customize->add_setting( 'newsletter_heading', array( 'default' => 'Stay Updated', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'newsletter_heading', array( 'label' => __( 'Newsletter Heading', 'digital-work' ), 'section' => 'digital_work_footer' ) );
}
add_action( 'customize_register', 'digital_work_customize_register' );
