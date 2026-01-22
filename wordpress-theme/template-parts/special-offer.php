<?php
/**
 * Template Part: Special Offer Section
 *
 * @package Digital_Work
 */

$offer_enabled = digital_work_get_option( 'special_offer_enabled', true );
$offer_title = digital_work_get_option( 'special_offer_title', 'Limited Time Offer' );
$offer_discount = digital_work_get_option( 'special_offer_discount', '20% OFF' );
$offer_description = digital_work_get_option( 'special_offer_description', 'Get your first animation at a special discount. Use code WELCOME20 at checkout.' );
$offer_code = digital_work_get_option( 'special_offer_code', 'WELCOME20' );

if ( ! $offer_enabled ) {
    return;
}
?>

<section class="py-16 bg-gradient-cta">
    <div class="container">
        <div class="max-w-4xl mx-auto text-center text-white">
            
            <!-- Offer Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span class="text-sm font-semibold uppercase tracking-wide"><?php echo esc_html( $offer_title ); ?></span>
            </div>

            <!-- Discount -->
            <h2 class="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">
                <?php echo esc_html( $offer_discount ); ?>
            </h2>

            <!-- Description -->
            <p class="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                <?php echo esc_html( $offer_description ); ?>
            </p>

            <!-- Promo Code -->
            <?php if ( $offer_code ) : ?>
            <div class="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <span class="text-white/70"><?php esc_html_e( 'Use code:', 'digital-work' ); ?></span>
                <span class="font-mono text-xl font-bold tracking-wider"><?php echo esc_html( $offer_code ); ?></span>
                <button type="button" class="copy-code p-2 hover:bg-white/10 rounded-full transition-colors" data-code="<?php echo esc_attr( $offer_code ); ?>" aria-label="<?php esc_attr_e( 'Copy code', 'digital-work' ); ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </div>
            <?php endif; ?>

            <!-- CTA Button -->
            <div>
                <a href="<?php echo esc_url( function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : home_url( '/shop' ) ); ?>" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-white/90 transition-all hover:-translate-y-1 shadow-lg">
                    <?php esc_html_e( 'Shop Now', 'digital-work' ); ?>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>

        </div>
    </div>
</section>
