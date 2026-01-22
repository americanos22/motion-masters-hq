<?php
/**
 * Template Part: Benefits Section
 *
 * @package Digital_Work
 */

$benefits = array(
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
        'title'       => __( 'Premium Quality', 'digital-work' ),
        'description' => __( 'All animations rendered in stunning 4K resolution with smooth 60fps playback.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        'title'       => __( 'Fast Turnaround', 'digital-work' ),
        'description' => __( 'Standard delivery in 24-48 hours. Rush options available for urgent projects.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>',
        'title'       => __( 'Unlimited Revisions', 'digital-work' ),
        'description' => __( 'Not 100% satisfied? We\'ll revise until you love it. Your satisfaction guaranteed.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
        'title'       => __( 'Multiple Formats', 'digital-work' ),
        'description' => __( 'Download in MP4, MOV, and GIF. Transparent backgrounds available.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        'title'       => __( 'Dedicated Support', 'digital-work' ),
        'description' => __( 'Our team is here to help via email or live chat. Quick response guaranteed.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        'title'       => __( 'Commercial License', 'digital-work' ),
        'description' => __( 'Full commercial rights included. Use anywhere—social media, ads, broadcasts.', 'digital-work' ),
    ),
);
?>

<section class="py-20 bg-muted">
    <div class="container">
        
        <!-- Section Header -->
        <div class="text-center mb-12">
            <h2 class="section-title mb-4"><?php esc_html_e( 'Why Choose Digital Work?', 'digital-work' ); ?></h2>
            <p class="section-subtitle">
                <?php esc_html_e( 'We make professional logo animation accessible to everyone', 'digital-work' ); ?>
            </p>
        </div>

        <!-- Benefits Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php foreach ( $benefits as $index => $benefit ) : ?>
            <div class="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                
                <!-- Icon -->
                <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <?php echo $benefit['icon']; ?>
                </div>

                <!-- Title -->
                <h3 class="text-xl font-semibold mb-3">
                    <?php echo esc_html( $benefit['title'] ); ?>
                </h3>

                <!-- Description -->
                <p class="text-muted-foreground">
                    <?php echo esc_html( $benefit['description'] ); ?>
                </p>

            </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
