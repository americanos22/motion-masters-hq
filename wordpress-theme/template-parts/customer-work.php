<?php
/**
 * Template Part: Customer Work Section
 *
 * @package Digital_Work
 */

// Get featured products or use placeholder data
$featured_videos = array();

if ( function_exists( 'wc_get_products' ) ) {
    $products = wc_get_products( array(
        'limit'    => 6,
        'featured' => true,
        'status'   => 'publish',
    ) );
    
    foreach ( $products as $product ) {
        $featured_videos[] = array(
            'id'    => $product->get_id(),
            'title' => $product->get_name(),
            'image' => wp_get_attachment_url( $product->get_image_id() ),
            'link'  => get_permalink( $product->get_id() ),
        );
    }
}

// Fallback to placeholder data if no products
if ( empty( $featured_videos ) ) {
    $featured_videos = array(
        array( 'id' => 1, 'title' => 'Cinematic Logo Reveal', 'image' => get_template_directory_uri() . '/assets/images/sample-video-1.jpg', 'link' => '#' ),
        array( 'id' => 2, 'title' => 'Glitch Effect Animation', 'image' => get_template_directory_uri() . '/assets/images/sample-video-2.jpg', 'link' => '#' ),
        array( 'id' => 3, 'title' => 'Particle Explosion', 'image' => get_template_directory_uri() . '/assets/images/sample-video-3.jpg', 'link' => '#' ),
        array( 'id' => 4, 'title' => 'Minimal Clean Intro', 'image' => get_template_directory_uri() . '/assets/images/sample-video-4.jpg', 'link' => '#' ),
        array( 'id' => 5, 'title' => 'Neon Glow Effect', 'image' => get_template_directory_uri() . '/assets/images/sample-video-5.jpg', 'link' => '#' ),
        array( 'id' => 6, 'title' => '3D Metallic Logo', 'image' => get_template_directory_uri() . '/assets/images/sample-video-6.jpg', 'link' => '#' ),
    );
}
?>

<section class="py-20 bg-muted">
    <div class="container">
        
        <!-- Section Header -->
        <div class="text-center mb-12">
            <h2 class="section-title mb-4"><?php esc_html_e( "Customer's Work", 'digital-work' ); ?></h2>
            <p class="section-subtitle">
                <?php esc_html_e( 'See what our customers have created with our animation effects', 'digital-work' ); ?>
            </p>
        </div>

        <!-- Video Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ( $featured_videos as $video ) : ?>
            <a href="<?php echo esc_url( $video['link'] ); ?>" class="group relative aspect-video rounded-2xl overflow-hidden shadow-md">
                
                <!-- Thumbnail -->
                <?php if ( ! empty( $video['image'] ) ) : ?>
                <img 
                    src="<?php echo esc_url( $video['image'] ); ?>" 
                    alt="<?php echo esc_attr( $video['title'] ); ?>"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                >
                <?php else : ?>
                <div class="w-full h-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                        <line x1="7" y1="2" x2="7" y2="22"></line>
                        <line x1="17" y1="2" x2="17" y2="22"></line>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <line x1="2" y1="7" x2="7" y2="7"></line>
                        <line x1="2" y1="17" x2="7" y2="17"></line>
                        <line x1="17" y1="17" x2="22" y2="17"></line>
                        <line x1="17" y1="7" x2="22" y2="7"></line>
                    </svg>
                </div>
                <?php endif; ?>

                <!-- Play Button Overlay -->
                <div class="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                </div>

                <!-- Title -->
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 class="text-white font-semibold"><?php echo esc_html( $video['title'] ); ?></h3>
                </div>

            </a>
            <?php endforeach; ?>
        </div>

        <!-- View All Link -->
        <div class="text-center mt-10">
            <a href="<?php echo esc_url( function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : home_url( '/shop' ) ); ?>" class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                <?php esc_html_e( 'View All Effects', 'digital-work' ); ?>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>

    </div>
</section>
