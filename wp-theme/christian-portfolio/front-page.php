<?php
/**
 * Front page template.
 */

get_header();
?>
<section class="hero" id="top">
    <div class="hero-inner">
        <div class="hero-avatar">
            <img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/christian-avatar.jpg' ); ?>" alt="Christian Bryant" />
        </div>
        <h1 class="hero-title">Christian Bryant</h1>
        <p class="hero-subtitle">Full Stack Developer — Next.js, Node, PostgreSQL</p>
        <p class="hero-body">Building secure, scalable web applications with clean UX and production-ready architecture.</p>
        <div class="hero-actions">
            <a href="#projects" class="btn-primary">View Projects</a>
            <a href="/christian-bryant-resume.pdf" class="btn-secondary">Download Resume</a>
        </div>
    </div>
</section>

<section class="section" id="skills">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Skills & Stack</h2>
            <p class="section-subtitle">Tools I use to ship production-ready software.</p>
        </div>
        <div class="skills-list">
            <span class="skill-pill">Next.js</span>
            <span class="skill-pill">React</span>
            <span class="skill-pill">Node.js</span>
            <span class="skill-pill">TypeScript</span>
            <span class="skill-pill">PostgreSQL</span>
            <span class="skill-pill">Prisma</span>
            <span class="skill-pill">Tailwind CSS</span>
            <span class="skill-pill">REST & GraphQL APIs</span>
        </div>
    </div>
</section>

<section class="section" id="projects">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Featured Projects</h2>
        </div>
        <div class="projects-grid">
            <?php
            $projects_query = new WP_Query(
                array(
                    'post_type'      => 'project',
                    'posts_per_page' => 6,
                    'orderby'        => 'date',
                    'order'          => 'DESC',
                )
            );

            if ( $projects_query->have_posts() ) :
                while ( $projects_query->have_posts() ) :
                    $projects_query->the_post();
                    $live_url = get_post_meta( get_the_ID(), '_christian_project_live_url', true );
                    $repo_url = get_post_meta( get_the_ID(), '_christian_project_repo_url', true );
            ?>
            <article <?php post_class( 'project-card' ); ?>>
                <h3 class="project-title"><?php the_title(); ?></h3>
                <p class="project-description"><?php echo esc_html( get_the_excerpt() ); ?></p>
                <div class="project-links">
                    <?php if ( $live_url ) : ?>
                        <a class="btn-primary" href="<?php echo esc_url( $live_url ); ?>" target="_blank" rel="noopener noreferrer">Live</a>
                    <?php endif; ?>
                    <?php if ( $repo_url ) : ?>
                        <a class="btn-secondary" href="<?php echo esc_url( $repo_url ); ?>" target="_blank" rel="noopener noreferrer">Code</a>
                    <?php endif; ?>
                </div>
            </article>
            <?php
                endwhile;
                wp_reset_postdata();
            else :
            ?>
            <p><?php esc_html_e( 'Add some projects in the admin to have them appear here.', 'christian-portfolio' ); ?></p>
            <?php endif; ?>
        </div>
    </div>
</section>

<section class="section" id="contact">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Get In Touch</h2>
            <p class="section-subtitle">Have a project in mind? Let's work together.</p>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault(); window.location.href='mailto:christian.bryantrva@outlook.com';">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">Send Message</button>
        </form>

        <div id="contact-map" class="contact-map" aria-label="Map showing my location in Richmond, VA"></div>

        <script>
        document.addEventListener('DOMContentLoaded', function () {
            if (typeof L === 'undefined') return;

            // Approximate coordinates for 6919 Marlowe Road, Richmond, VA
            var map = L.map('contact-map').setView([37.53, -77.55], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            L.marker([37.53, -77.55]).addTo(map)
                .bindPopup('Christian Bryant – Richmond, VA')
                .openPopup();
        });
        </script>
    </div>
</section>

<?php
get_footer();
?>
