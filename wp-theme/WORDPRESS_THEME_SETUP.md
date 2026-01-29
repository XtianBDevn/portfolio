# Christian Portfolio WordPress Theme Setup

This guide walks through installing, configuring, and optimizing your custom WordPress theme for **christianbryantrva.com**, including CTAs, Projects CPT, and SEO basics.

## 1. Install the theme

1. On your local machine, zip the theme folder:
   - Folder to zip: `wp-theme/christian-portfolio`
   - Resulting file: `christian-portfolio.zip`
2. Log into the WordPress admin for `christianbryantrva.com`.
3. Go to **Appearance → Themes → Add New → Upload Theme**.
4. Upload `christian-portfolio.zip` and click **Install Now**.
5. Click **Activate** to enable the theme.

## 2. Set the homepage and blog

1. In the admin, go to **Settings → Reading**.
2. Under **Your homepage displays**, choose **A static page**.
3. Set:
   - **Homepage**: select (or create) a page called **Home**.
   - **Posts page**: select (or create) a page called **Blog**.
4. Save changes.

The theme’s `front-page.php` will render your portfolio layout on the Home page. The **Blog** page will use the theme’s blog index template.

## 3. Configure navigation and CTAs

### 3.1 Primary menu

1. Go to **Appearance → Menus**.
2. Create a new menu called **Primary**.
3. Add menu items (suggested):
   - **Home** → link to `/` (or the Home page).
   - **Projects** → Custom Link with URL `#projects` and label `Projects`.
   - **Resume** → Custom Link pointing to your resume URL (see below).
   - **Contact** → Custom Link with URL `#contact` and label `Contact`.
4. Under **Menu Settings**, check **Primary Menu**.
5. Save the menu.

### 3.2 Resume CTA

The theme expects a public resume file at:

- `/christian-bryant-resume.pdf`

You can handle this in one of two ways:

**Option A – Upload via Media Library**

1. Go to **Media → Add New** and upload your resume PDF.
2. Copy the file URL (e.g., `https://christianbryantrva.com/wp-content/uploads/.../christian-bryant-resume.pdf`).
3. In `front-page.php`, update the **Download Resume** link to use this absolute URL if needed.
4. Also update the **Resume** menu item URL in the Primary menu.

**Option B – Keep the root-level URL**

If you control the server/hosting, you can upload `christian-bryant-resume.pdf` to the web root so it is available at `https://christianbryantrva.com/christian-bryant-resume.pdf`. Then you do not need to change the theme code.

## 4. Projects as a Custom Post Type

The theme registers a **Projects** custom post type with meta fields for **Live URL** and **Repository URL**.

### 4.1 Add projects

1. In the admin sidebar, go to **Projects → Add New**.
2. For each project:
   - **Title**: e.g., `ClearFall – Tree Service Software`.
   - **Content / Excerpt**: short, portfolio-style description.
   - **Featured Image** (optional): upload a representative image or logo.
3. In the **Project Links** meta box:
   - **Live URL**: e.g., `https://treeremovalsoftware.online/`.
   - **Repository URL**: e.g., `https://github.com/XtianBDevn/clearfall`.
4. Click **Publish**.
5. Repeat for other projects (Emergency Snow Removal RVA, Alexander Law Office P.C., etc.).

The front page **Featured Projects** grid will automatically pull the latest `project` posts (up to 6), showing **Live** and **Code** buttons when URLs are present.

### 4.2 Optional: Projects archive page

Because the CPT is registered with `has_archive => true`, WordPress will expose a projects archive at:

- `/projects`

You can link to this page from your menu if you want a dedicated projects index.

## 5. Contact section & map

The Contact section includes:

- A simple form that opens the users email client to **christian.bryantrva@outlook.com**.
- A **Leaflet.js** map showing your approximate location (6919 Marlowe Road, Richmond, VA).

To adjust map behavior later, edit the Leaflet config in `front-page.php` (look for `L.map('contact-map')`).

## 6. Blog setup

### 6.1 Writing posts

1. Go to **Posts → Add New**.
2. Write your blog post as usual (title, content, featured image, categories/tags).
3. Click **Publish**.

The blog index (the page set as **Posts page** in Settings → Reading) will use the themes blog list styles. Individual posts use the `single.php` template.

### 6.2 Suggested CTAs in content

For posts, consider adding call-to-action blocks at the end, such as:

- Need a senior full-stack dev? Reach out via the Contact section.
- Links back to key projects or your resume.

You can do this manually in each post or via a reusable block in the block editor.

## 7. Basic SEO configuration

### 7.1 Permalinks

1. Go to **Settings → Permalinks**.
2. Choose **Post name** (recommended) and save.

### 7.2 SEO plugin (optional but recommended)

Install one of:

- **Yoast SEO**
- **Rank Math SEO**

Then:

1. Configure the plugins site-wide title/description (use your name + role, e.g., `Christian Bryant – Senior Full Stack Developer`).
2. Set social profiles (GitHub, LinkedIn, etc.).
3. Ensure your **Home** page has a strong meta description.

### 7.3 On-page SEO tips

- Use clear H1/H2 headings on **Home** (`Christian Bryant` as H1, section titles as H2).
- Make sure each Project and Blog post has a descriptive title and excerpt.
- Link between related content (e.g., from blog posts to Projects, from Projects back to Contact/Resume).

## 8. Testing checklist

Before going live, verify:

- [ ] Homepage shows hero, skills, projects, contact, and footer correctly.
- [ ] **View Projects** button scrolls to the Projects section.
- [ ] **Download Resume** and **Resume** menu item open your actual resume.
- [ ] Projects are loading from the **Projects** CPT and buttons go to the right Live/Code URLs.
- [ ] Contact form opens an email to `christian.bryantrva@outlook.com`.
- [ ] Leaflet map renders and marker is in the right general area.
- [ ] Blog index shows your posts and single post pages are readable on mobile.
- [ ] Site titles, permalinks, and meta descriptions look good in the browser tab and when shared.

Once everything looks good, your `christianbryantrva.com` WordPress site will be running on your custom theme with portfolio, blog, CTAs, Projects CPT, and basic SEO in place.