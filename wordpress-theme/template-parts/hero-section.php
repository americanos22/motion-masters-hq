<?php
/**
 * Template Part: Hero Section
 *
 * @package Digital_Work
 */

$hero_headline = digital_work_get_option( 'hero_headline', 'Bring Your Logo to Life' );
$hero_subheadline = digital_work_get_option( 'hero_subheadline', 'Professional animated logo videos that make your brand unforgettable. Delivered in 24 hours.' );
$hero_bg = digital_work_get_option( 'hero_background_image', get_template_directory_uri() . '/assets/images/hero-bg.jpg' );

// Stats
$stat_effects = digital_work_get_option( 'stat_effects', '35+' );
$stat_customers = digital_work_get_option( 'stat_customers', '10K+' );
$stat_delivery = digital_work_get_option( 'stat_delivery', '24h' );
?>

<section class="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
    
    <!-- Background Image -->
    <?php if ( $hero_bg ) : ?>
    <div class="absolute inset-0 z-0">
        <img src="<?php echo esc_url( $hero_bg ); ?>" alt="" class="w-full h-full object-cover opacity-20">
    </div>
    <?php endif; ?>
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-hero opacity-90 z-10"></div>
    
    <!-- Content -->
    <div class="container relative z-20 py-20">
        <div class="max-w-4xl mx-auto text-center text-white">
            
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span class="text-sm font-medium"><?php esc_html_e( 'Trusted by 10,000+ customers', 'digital-work' ); ?></span>
            </div>

            <!-- Headline -->
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide mb-6 animate-fade-in-up">
                <?php echo esc_html( $hero_headline ); ?>
            </h1>

            <!-- Subheadline -->
            <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
                <?php echo esc_html( $hero_subheadline ); ?>
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-300">
                <a href="<?php echo esc_url( function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : home_url( '/shop' ) ); ?>" class="btn-hero-primary">
                    <?php esc_html_e( 'Shop Animation Effects', 'digital-work' ); ?>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a href="<?php echo esc_url( home_url( '/how-it-works' ) ); ?>" class="btn-hero-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <?php esc_html_e( 'See How It Works', 'digital-work' ); ?>
                </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in-up animation-delay-400">
                <div class="text-center">
                    <div class="text-3xl md:text-4xl font-bold text-gradient mb-1"><?php echo esc_html( $stat_effects ); ?></div>
                    <div class="text-sm text-white/60"><?php esc_html_e( 'Animation Effects', 'digital-work' ); ?></div>
                </div>
                <div class="text-center">
                    <div class="text-3xl md:text-4xl font-bold text-gradient mb-1"><?php echo esc_html( $stat_customers ); ?></div>
                    <div class="text-sm text-white/60"><?php esc_html_e( 'Happy Customers', 'digital-work' ); ?></div>
                </div>
                <div class="text-center">
                    <div class="text-3xl md:text-4xl font-bold text-gradient mb-1"><?php echo esc_html( $stat_delivery ); ?></div>
                    <div class="text-sm text-white/60"><?php esc_html_e( 'Delivery Time', 'digital-work' ); ?></div>
                </div>
            </div>

        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div class="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div class="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
    </div>

</section>
