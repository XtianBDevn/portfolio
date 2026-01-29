<?php
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="site-header">
    <div class="container site-header-inner">
        <div class="site-title">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Christian Bryant</a>
        </div>
        <nav class="main-nav">
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => '',
                    'fallback_cb'    => false,
                )
            );
            ?>
        </nav>
    </div>
</header>
<main>