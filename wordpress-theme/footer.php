<?php
/**
 * The footer template
 *
 * @package Digital_Work
 */

$social_links = digital_work_get_social_links();
$support_email = digital_work_get_option( 'support_email', 'support@digitalwork.com' );
?>

<footer class="footer-gradient text-white">
    
    <!-- Video Banner Strip -->
    <div class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-black/40"></div>
        <?php 
        $footer_bg = digital_work_get_option( 'footer_background_image', '' );
        if ( $footer_bg ) : 
        ?>
        <img src="<?php echo esc_url( $footer_bg ); ?>" alt="" class="absolute inset-0 w-full h-full object-cover opacity-30">
        <?php endif; ?>
        
        <div class="container relative z-10 text-center">
            <h2 class="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">
                <?php echo esc_html( digital_work_get_option( 'footer_headline', 'Bring Your Logo to Life' ) ); ?>
            </h2>
            <a href="<?php echo esc_url( function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : home_url( '/shop' ) ); ?>" class="btn-hero-primary">
                <?php esc_html_e( 'Shop Animation Effects', 'digital-work' ); ?>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
    </div>

    <!-- Newsletter Section -->
    <div class="border-t border-white/10 py-12">
        <div class="container">
            <div class="max-w-xl mx-auto text-center">
                <h3 class="text-2xl font-bold mb-4">
                    <?php echo esc_html( digital_work_get_option( 'newsletter_heading', 'Stay Updated' ) ); ?>
                </h3>
                <p class="text-white/70 mb-6">
                    <?php echo esc_html( digital_work_get_option( 'newsletter_text', 'Get exclusive offers, new effects, and creative tips delivered to your inbox.' ) ); ?>
                </p>
                
                <form class="newsletter-form flex gap-3" id="newsletter-form">
                    <input type="email" name="email" placeholder="<?php esc_attr_e( 'Enter your email', 'digital-work' ); ?>" class="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40" required>
                    <button type="submit" class="btn-hero-primary px-6">
                        <?php esc_html_e( 'Subscribe', 'digital-work' ); ?>
                    </button>
                </form>
                <p class="newsletter-message text-sm mt-3 hidden"></p>
            </div>
        </div>
    </div>

    <!-- Footer Links -->
    <div class="border-t border-white/10 py-12">
        <div class="container">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- Brand Column -->
                <div class="lg:col-span-1">
                    <div class="mb-4">
                        <?php if ( has_custom_logo() ) : ?>
                            <?php the_custom_logo(); ?>
                        <?php else : ?>
                            <span class="text-2xl font-bold"><?php bloginfo( 'name' ); ?></span>
                        <?php endif; ?>
                    </div>
                    <p class="text-white/70 text-sm mb-6">
                        <?php echo esc_html( get_bloginfo( 'description' ) ?: __( 'Premium animated logo videos for businesses and creators.', 'digital-work' ) ); ?>
                    </p>
                    
                    <!-- Social Links -->
                    <div class="flex gap-4">
                        <?php if ( ! empty( $social_links['instagram'] ) ) : ?>
                        <a href="<?php echo esc_url( $social_links['instagram'] ); ?>" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <?php endif; ?>
                        
                        <?php if ( ! empty( $social_links['facebook'] ) ) : ?>
                        <a href="<?php echo esc_url( $social_links['facebook'] ); ?>" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <?php endif; ?>
                        
                        <?php if ( ! empty( $social_links['youtube'] ) ) : ?>
                        <a href="<?php echo esc_url( $social_links['youtube'] ); ?>" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </a>
                        <?php endif; ?>
                        
                        <?php if ( ! empty( $social_links['twitter'] ) ) : ?>
                        <a href="<?php echo esc_url( $social_links['twitter'] ); ?>" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Shop Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-4 uppercase tracking-wide"><?php esc_html_e( 'Shop', 'digital-work' ); ?></h4>
                    <?php
                    wp_nav_menu( array(
                        'theme_location' => 'footer_shop',
                        'container'      => false,
                        'menu_class'     => 'space-y-3',
                        'fallback_cb'    => false,
                        'depth'          => 1,
                        'link_before'    => '<span class="text-white/70 hover:text-white transition-colors">',
                        'link_after'     => '</span>',
                    ) );
                    ?>
                </div>

                <!-- Support Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-4 uppercase tracking-wide"><?php esc_html_e( 'Support', 'digital-work' ); ?></h4>
                    <?php
                    wp_nav_menu( array(
                        'theme_location' => 'footer_support',
                        'container'      => false,
                        'menu_class'     => 'space-y-3',
                        'fallback_cb'    => false,
                        'depth'          => 1,
                        'link_before'    => '<span class="text-white/70 hover:text-white transition-colors">',
                        'link_after'     => '</span>',
                    ) );
                    ?>
                </div>

                <!-- Legal Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-4 uppercase tracking-wide"><?php esc_html_e( 'Legal', 'digital-work' ); ?></h4>
                    <?php
                    wp_nav_menu( array(
                        'theme_location' => 'footer_legal',
                        'container'      => false,
                        'menu_class'     => 'space-y-3',
                        'fallback_cb'    => false,
                        'depth'          => 1,
                        'link_before'    => '<span class="text-white/70 hover:text-white transition-colors">',
                        'link_after'     => '</span>',
                    ) );
                    ?>
                </div>

            </div>
        </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white/10 py-6">
        <div class="container">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
                <p>
                    &copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. 
                    <?php esc_html_e( 'All rights reserved.', 'digital-work' ); ?>
                </p>
                <p>
                    <?php esc_html_e( 'Need help?', 'digital-work' ); ?> 
                    <a href="mailto:<?php echo esc_attr( $support_email ); ?>" class="text-white/70 hover:text-white transition-colors">
                        <?php echo esc_html( $support_email ); ?>
                    </a>
                </p>
            </div>
        </div>
    </div>

</footer>

<?php wp_footer(); ?>

</body>
</html>
