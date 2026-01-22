<?php
/**
 * Template Helper Functions
 * @package Digital_Work
 */

if ( ! function_exists( 'digital_work_posted_on' ) ) {
    function digital_work_posted_on() {
        echo '<time datetime="' . esc_attr( get_the_date( 'c' ) ) . '">' . esc_html( get_the_date() ) . '</time>';
    }
}
