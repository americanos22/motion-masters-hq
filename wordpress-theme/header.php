<?php
/**
 * The header template
 *
 * @package Digital_Work
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class( 'min-h-screen flex flex-col' ); ?>>
<?php wp_body_open(); ?>

<?php
// Announcement Bar
$announcement_enabled = digital_work_get_option( 'announcement_enabled', true );
$announcement_text = digital_work_get_option( 'announcement_text', '🎬 Get 20% OFF your first order! Use code: WELCOME20' );

if ( $announcement_enabled && $announcement_text ) :
?>
<div class="announcement-bar" id="announcement-bar">
    <div class="container">
        <div class="flex items-center justify-center gap-4">
            <p class="text-sm font-medium"><?php echo esc_html( $announcement_text ); ?></p>
            <button type="button" class="announcement-close opacity-70 hover:opacity-100 transition-opacity" aria-label="<?php esc_attr_e( 'Close announcement', 'digital-work' ); ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
</div>
<?php endif; ?>

<header class="sticky top-0 z-50 bg-background border-b border-border" id="site-header">
    <div class="container">
        <div class="flex items-center justify-between h-16 md:h-20">
            
            <!-- Logo -->
            <div class="flex items-center">
                <?php digital_work_logo(); ?>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8" aria-label="<?php esc_attr_e( 'Primary Navigation', 'digital-work' ); ?>">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'flex items-center gap-8',
                    'fallback_cb'    => 'digital_work_fallback_menu',
                    'depth'          => 1,
                    'link_before'    => '<span class="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">',
                    'link_after'     => '</span>',
                ) );
                ?>
            </nav>

            <!-- Header Actions -->
            <div class="flex items-center gap-4">
                
                <!-- Search Button -->
                <button type="button" class="search-toggle p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="<?php esc_attr_e( 'Search', 'digital-work' ); ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>

                <!-- Account Link -->
                <a href="<?php echo esc_url( function_exists( 'wc_get_account_endpoint_url' ) ? wc_get_account_endpoint_url( 'dashboard' ) : wp_login_url() ); ?>" class="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="<?php esc_attr_e( 'My Account', 'digital-work' ); ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </a>

                <!-- Cart Button -->
                <?php if ( function_exists( 'WC' ) ) : ?>
                <a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="cart-toggle relative p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="<?php esc_attr_e( 'Shopping Cart', 'digital-work' ); ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <?php 
                    $cart_count = digital_work_get_cart_count();
                    if ( $cart_count > 0 ) : 
                    ?>
                    <span class="cart-count absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-secondary text-secondary-foreground">
                        <?php echo esc_html( $cart_count ); ?>
                    </span>
                    <?php endif; ?>
                </a>
                <?php endif; ?>

                <!-- Mobile Menu Toggle -->
                <button type="button" class="mobile-menu-toggle md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="<?php esc_attr_e( 'Toggle Menu', 'digital-work' ); ?>" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon hidden">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

            </div>
        </div>

        <!-- Mobile Navigation -->
        <nav class="mobile-menu hidden md:hidden border-t border-border" aria-label="<?php esc_attr_e( 'Mobile Navigation', 'digital-work' ); ?>">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'py-4 space-y-2',
                'fallback_cb'    => 'digital_work_fallback_menu',
                'depth'          => 1,
                'link_before'    => '<span class="block py-2 text-base font-medium text-foreground">',
                'link_after'     => '</span>',
            ) );
            ?>
        </nav>
    </div>
</header>

<!-- Search Overlay -->
<div class="search-overlay fixed inset-0 z-50 hidden" aria-hidden="true">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm search-overlay-backdrop"></div>
    <div class="relative container h-full flex items-start justify-center pt-32">
        <div class="w-full max-w-2xl bg-background rounded-2xl shadow-lg p-6 animate-scale-in">
            <form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="relative">
                <input type="search" name="s" placeholder="<?php esc_attr_e( 'Search for animation effects...', 'digital-work' ); ?>" class="input-styled text-lg pr-12" value="<?php echo get_search_query(); ?>">
                <button type="submit" class="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </form>
            <p class="text-sm text-muted-foreground mt-4"><?php esc_html_e( 'Press ESC to close', 'digital-work' ); ?></p>
        </div>
    </div>
</div>

<?php
/**
 * Fallback menu if no menu is assigned
 */
function digital_work_fallback_menu() {
    echo '<ul class="flex items-center gap-8">';
    echo '<li><a href="' . esc_url( home_url( '/shop' ) ) . '" class="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">' . esc_html__( 'Shop', 'digital-work' ) . '</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/how-it-works' ) ) . '" class="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">' . esc_html__( 'How It Works', 'digital-work' ) . '</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/about' ) ) . '" class="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">' . esc_html__( 'About', 'digital-work' ) . '</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/contact' ) ) . '" class="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">' . esc_html__( 'Contact', 'digital-work' ) . '</a></li>';
    echo '</ul>';
}
?>
