<?php
/**
 * Template Part: Reviews Section
 *
 * @package Digital_Work
 */

// Get product reviews from WooCommerce or use placeholder
$reviews = array();

if ( function_exists( 'wc_get_products' ) ) {
    $comments = get_comments( array(
        'post_type' => 'product',
        'status'    => 'approve',
        'number'    => 6,
        'orderby'   => 'comment_date',
        'order'     => 'DESC',
    ) );
    
    foreach ( $comments as $comment ) {
        $rating = get_comment_meta( $comment->comment_ID, 'rating', true );
        $reviews[] = array(
            'id'      => $comment->comment_ID,
            'name'    => $comment->comment_author,
            'rating'  => $rating ? intval( $rating ) : 5,
            'review'  => $comment->comment_content,
            'date'    => $comment->comment_date,
        );
    }
}

// Fallback placeholder reviews
if ( empty( $reviews ) ) {
    $reviews = array(
        array( 'id' => 1, 'name' => 'Sarah Johnson', 'rating' => 5, 'review' => 'Absolutely stunning animation! My logo has never looked better. The team was incredibly responsive and delivered ahead of schedule.', 'date' => '2 weeks ago' ),
        array( 'id' => 2, 'name' => 'Mike Chen', 'rating' => 5, 'review' => 'Professional quality at an affordable price. I\'ve used other services before but Digital Work is by far the best value.', 'date' => '1 month ago' ),
        array( 'id' => 3, 'name' => 'Emily Davis', 'rating' => 5, 'review' => 'The 4K quality is incredible! Perfect for my YouTube channel intro. Will definitely be ordering more effects.', 'date' => '3 weeks ago' ),
        array( 'id' => 4, 'name' => 'Alex Thompson', 'rating' => 4, 'review' => 'Great communication and fast delivery. The final product exceeded my expectations. Highly recommend!', 'date' => '1 week ago' ),
    );
}

$average_rating = 4.9;
$total_reviews = '2,500+';
?>

<section class="py-20 bg-background">
    <div class="container">
        
        <!-- Section Header -->
        <div class="text-center mb-12">
            <h2 class="section-title mb-4"><?php esc_html_e( 'What Our Customers Say', 'digital-work' ); ?></h2>
            <p class="section-subtitle">
                <?php esc_html_e( 'Join thousands of satisfied customers who trust us with their brand', 'digital-work' ); ?>
            </p>
            
            <!-- Rating Summary -->
            <div class="flex items-center justify-center gap-4 mt-6">
                <div class="flex items-center gap-1">
                    <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hsl(var(--secondary))" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <?php endfor; ?>
                </div>
                <span class="text-2xl font-bold"><?php echo esc_html( $average_rating ); ?></span>
                <span class="text-muted-foreground">(<?php echo esc_html( $total_reviews ); ?> <?php esc_html_e( 'reviews', 'digital-work' ); ?>)</span>
            </div>
        </div>

        <!-- Reviews Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php foreach ( $reviews as $review ) : ?>
            <div class="product-card p-6">
                
                <!-- Stars -->
                <div class="flex items-center gap-1 mb-4">
                    <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="<?php echo $i < $review['rating'] ? 'hsl(var(--secondary))' : 'hsl(var(--muted))'; ?>" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <?php endfor; ?>
                </div>

                <!-- Review Text -->
                <p class="text-muted-foreground text-sm mb-4 line-clamp-4">
                    "<?php echo esc_html( $review['review'] ); ?>"
                </p>

                <!-- Author -->
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        <?php echo esc_html( substr( $review['name'], 0, 1 ) ); ?>
                    </div>
                    <div>
                        <div class="font-medium text-sm"><?php echo esc_html( $review['name'] ); ?></div>
                        <div class="text-xs text-muted-foreground">
                            <?php 
                            if ( is_string( $review['date'] ) && strpos( $review['date'], 'ago' ) !== false ) {
                                echo esc_html( $review['date'] );
                            } else {
                                echo esc_html( human_time_diff( strtotime( $review['date'] ), current_time( 'timestamp' ) ) . ' ago' );
                            }
                            ?>
                        </div>
                    </div>
                </div>

            </div>
            <?php endforeach; ?>
        </div>

        <!-- Trust Badges -->
        <div class="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border">
            <div class="flex items-center gap-2 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span class="text-sm font-medium"><?php esc_html_e( 'Secure Checkout', 'digital-work' ); ?></span>
            </div>
            <div class="flex items-center gap-2 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                <span class="text-sm font-medium"><?php esc_html_e( 'All Major Cards', 'digital-work' ); ?></span>
            </div>
            <div class="flex items-center gap-2 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="text-sm font-medium"><?php esc_html_e( '24h Delivery', 'digital-work' ); ?></span>
            </div>
        </div>

    </div>
</section>
