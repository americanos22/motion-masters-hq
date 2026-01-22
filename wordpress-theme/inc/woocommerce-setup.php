<?php
/**
 * WooCommerce Setup
 * @package Digital_Work
 */

// Disable default WooCommerce styles
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

// Change products per row
add_filter( 'loop_shop_columns', function() { return 3; } );

// Change products per page
add_filter( 'loop_shop_per_page', function() { return 12; } );

// Add wrapper classes
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

add_action( 'woocommerce_before_main_content', function() {
    echo '<main class="flex-1"><div class="container py-12">';
}, 10 );

add_action( 'woocommerce_after_main_content', function() {
    echo '</div></main>';
}, 10 );
