<?php
/**
 * Template Part: Use Cases Section
 *
 * @package Digital_Work
 */

$use_cases = array(
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
        'title'       => __( 'YouTube Intros', 'digital-work' ),
        'description' => __( 'Make memorable first impressions with professional channel branding.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
        'title'       => __( 'Social Media', 'digital-work' ),
        'description' => __( 'Stand out in feeds with eye-catching animated content.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>',
        'title'       => __( 'Podcasts', 'digital-work' ),
        'description' => __( 'Professional visual branding for audio shows and video podcasts.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
        'title'       => __( 'Presentations', 'digital-work' ),
        'description' => __( 'Impress clients and stakeholders with polished corporate branding.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        'title'       => __( 'Websites', 'digital-work' ),
        'description' => __( 'Enhance landing pages and headers with dynamic logo reveals.', 'digital-work' ),
    ),
    array(
        'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>',
        'title'       => __( 'Video Ads', 'digital-work' ),
        'description' => __( 'Boost brand recall with animated logos in your ad campaigns.', 'digital-work' ),
    ),
);
?>

<section class="py-20 bg-background">
    <div class="container">
        
        <!-- Section Header -->
        <div class="text-center mb-12">
            <h2 class="section-title mb-4"><?php esc_html_e( 'Perfect For Every Platform', 'digital-work' ); ?></h2>
            <p class="section-subtitle">
                <?php esc_html_e( 'Our animated logos work seamlessly across all your marketing channels', 'digital-work' ); ?>
            </p>
        </div>

        <!-- Use Cases Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ( $use_cases as $use_case ) : ?>
            <div class="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group">
                
                <!-- Icon -->
                <div class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <?php echo $use_case['icon']; ?>
                </div>

                <!-- Content -->
                <div>
                    <h3 class="text-lg font-semibold mb-1">
                        <?php echo esc_html( $use_case['title'] ); ?>
                    </h3>
                    <p class="text-muted-foreground text-sm">
                        <?php echo esc_html( $use_case['description'] ); ?>
                    </p>
                </div>

            </div>
            <?php endforeach; ?>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12">
            <a href="<?php echo esc_url( function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : home_url( '/shop' ) ); ?>" class="btn-hero-primary">
                <?php esc_html_e( 'Browse All Effects', 'digital-work' ); ?>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>

    </div>
</section>
