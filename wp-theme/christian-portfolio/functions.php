<?php
/**
 * Theme setup and assets.
 */

function christian_portfolio_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );

    register_nav_menus(
        array(
            'primary' => __( 'Primary Menu', 'christian-portfolio' ),
        )
    );
}
add_action( 'after_setup_theme', 'christian_portfolio_theme_setup' );

function christian_portfolio_enqueue_assets() {
    // Main theme stylesheet
    wp_enqueue_style(
        'christian-portfolio-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get( 'Version' )
    );

    // Leaflet CSS & JS for contact map
    wp_enqueue_style(
        'leaflet-css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        array(),
        '1.9.4'
    );

    wp_enqueue_script(
        'leaflet-js',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
        array(),
        '1.9.4',
        true
    );
}
add_action( 'wp_enqueue_scripts', 'christian_portfolio_enqueue_assets' );

/**
 * Register Project custom post type.
 */
function christian_portfolio_register_project_cpt() {
    $labels = array(
        'name'               => __( 'Projects', 'christian-portfolio' ),
        'singular_name'      => __( 'Project', 'christian-portfolio' ),
        'add_new'            => __( 'Add New', 'christian-portfolio' ),
        'add_new_item'       => __( 'Add New Project', 'christian-portfolio' ),
        'edit_item'          => __( 'Edit Project', 'christian-portfolio' ),
        'new_item'           => __( 'New Project', 'christian-portfolio' ),
        'view_item'          => __( 'View Project', 'christian-portfolio' ),
        'search_items'       => __( 'Search Projects', 'christian-portfolio' ),
        'not_found'          => __( 'No projects found', 'christian-portfolio' ),
        'not_found_in_trash' => __( 'No projects found in Trash', 'christian-portfolio' ),
        'menu_name'          => __( 'Projects', 'christian-portfolio' ),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'show_in_rest'       => true,
        'has_archive'        => true,
        'menu_icon'          => 'dashicons-portfolio',
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'rewrite'            => array( 'slug' => 'projects' ),
    );

    register_post_type( 'project', $args );
}
add_action( 'init', 'christian_portfolio_register_project_cpt' );

/**
 * Project custom fields: live URL and repo URL.
 */
function christian_portfolio_add_project_meta_boxes() {
    add_meta_box(
        'christian_portfolio_project_links',
        __( 'Project Links', 'christian-portfolio' ),
        'christian_portfolio_project_links_meta_box_render',
        'project',
        'normal',
        'default'
    );
}
add_action( 'add_meta_boxes', 'christian_portfolio_add_project_meta_boxes' );

function christian_portfolio_project_links_meta_box_render( $post ) {
    $live_url = get_post_meta( $post->ID, '_christian_project_live_url', true );
    $repo_url = get_post_meta( $post->ID, '_christian_project_repo_url', true );
    wp_nonce_field( 'christian_portfolio_save_project_links', 'christian_portfolio_project_links_nonce' );
    ?>
    <p>
        <label for="christian_project_live_url" style="display:block;font-weight:600;">Live URL</label>
        <input type="url" name="christian_project_live_url" id="christian_project_live_url" value="<?php echo esc_attr( $live_url ); ?>" class="widefat" placeholder="https://example.com" />
    </p>
    <p>
        <label for="christian_project_repo_url" style="display:block;font-weight:600;">Repository URL</label>
        <input type="url" name="christian_project_repo_url" id="christian_project_repo_url" value="<?php echo esc_attr( $repo_url ); ?>" class="widefat" placeholder="https://github.com/..." />
    </p>
    <?php
}

function christian_portfolio_save_project_links_meta( $post_id ) {
    if ( ! isset( $_POST['christian_portfolio_project_links_nonce'] ) ) {
        return;
    }
    if ( ! wp_verify_nonce( $_POST['christian_portfolio_project_links_nonce'], 'christian_portfolio_save_project_links' ) ) {
        return;
    }
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }
    if ( isset( $_POST['post_type'] ) && 'project' === $_POST['post_type'] ) {
        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
        }
    }

    if ( isset( $_POST['christian_project_live_url'] ) ) {
        update_post_meta( $post_id, '_christian_project_live_url', esc_url_raw( $_POST['christian_project_live_url'] ) );
    }

    if ( isset( $_POST['christian_project_repo_url'] ) ) {
        update_post_meta( $post_id, '_christian_project_repo_url', esc_url_raw( $_POST['christian_project_repo_url'] ) );
    }
}
add_action( 'save_post_project', 'christian_portfolio_save_project_links_meta' );

?>
