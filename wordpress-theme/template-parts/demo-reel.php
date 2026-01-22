<?php
/**
 * Template Part: Demo Reel Section
 *
 * @package Digital_Work
 */

$steps = array(
    array(
        'number' => '01',
        'title'  => __( 'Choose Your Effect', 'digital-work' ),
        'text'   => __( 'Browse our collection of 35+ professional animation styles.', 'digital-work' ),
    ),
    array(
        'number' => '02',
        'title'  => __( 'Upload Your Logo', 'digital-work' ),
        'text'   => __( 'Submit your logo in PNG, SVG, or AI format for best results.', 'digital-work' ),
    ),
    array(
        'number' => '03',
        'title'  => __( 'We Create Magic', 'digital-work' ),
        'text'   => __( 'Our team animates your logo with precision and care.', 'digital-work' ),
    ),
    array(
        'number' => '04',
        'title'  => __( 'Download & Use', 'digital-work' ),
        'text'   => __( 'Get your files in multiple formats, ready for any platform.', 'digital-work' ),
    ),
);

$demo_image = digital_work_get_option( 'demo_reel_image', get_template_directory_uri() . '/assets/images/customer-work-grid.jpg' );
?>

<section class="py-20 bg-gradient-dark text-white">
    <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <!-- Left Column: Content -->
            <div>
                <h2 class="section-title text-left text-white mb-6">
                    <?php esc_html_e( 'How It Works', 'digital-work' ); ?>
                </h2>
                <p class="text-lg text-white/70 mb-10">
                    <?php esc_html_e( 'Getting your animated logo is simple. Follow these four easy steps to transform your brand.', 'digital-work' ); ?>
                </p>

                <!-- Steps -->
                <div class="space-y-6">
                    <?php foreach ( $steps as $step ) : ?>
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                            <span class="text-secondary font-bold"><?php echo esc_html( $step['number'] ); ?></span>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-1"><?php echo esc_html( $step['title'] ); ?></h3>
                            <p class="text-white/60 text-sm"><?php echo esc_html( $step['text'] ); ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>

                <!-- CTA -->
                <div class="mt-10">
                    <a href="<?php echo esc_url( function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : home_url( '/shop' ) ); ?>" class="btn-hero-primary">
                        <?php esc_html_e( 'Start Creating', 'digital-work' ); ?>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Right Column: Demo Reel Visual -->
            <div class="relative">
                <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <?php if ( $demo_image ) : ?>
                    <img 
                        src="<?php echo esc_url( $demo_image ); ?>" 
                        alt="<?php esc_attr_e( 'Demo Reel', 'digital-work' ); ?>"
                        class="w-full h-full object-cover"
                    >
                    <?php endif; ?>
                    
                    <!-- Play Button Overlay -->
                    <div class="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
                        <div class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                            <div class="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-glow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Decorative Elements -->
                <div class="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>

        </div>
    </div>
</section>
