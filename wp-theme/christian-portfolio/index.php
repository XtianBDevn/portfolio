<?php
/**
 * Fallback template.
 */

get_header();
?>
<section class="section">
    <div class="container">
        <h1 class="section-title"><?php esc_html_e( 'Blog', 'christian-portfolio' ); ?></h1>
        <div class="blog-list">
            <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>
                    <article <?php post_class( 'blog-post' ); ?>>
                        <h2 class="blog-post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <div class="blog-post-meta"><?php echo get_the_date(); ?></div>
                        <div class="blog-post-excerpt"><?php the_excerpt(); ?></div>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <p><?php esc_html_e( 'No posts found.', 'christian-portfolio' ); ?></p>
            <?php endif; ?>
        </div>
    </div>
</section>
<?php
get_footer();
?>