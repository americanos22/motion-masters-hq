<?php
/**
 * The front page template (Homepage)
 *
 * @package Digital_Work
 */

get_header();
?>

<main class="flex-1">

    <?php get_template_part( 'template-parts/hero', 'section' ); ?>

    <?php get_template_part( 'template-parts/customer', 'work' ); ?>

    <?php get_template_part( 'template-parts/special', 'offer' ); ?>

    <?php get_template_part( 'template-parts/reviews', 'section' ); ?>

    <?php get_template_part( 'template-parts/benefits', 'section' ); ?>

    <?php get_template_part( 'template-parts/use', 'cases' ); ?>

    <?php get_template_part( 'template-parts/demo', 'reel' ); ?>

</main>

<?php
get_footer();
