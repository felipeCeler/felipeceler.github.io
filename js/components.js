/**
 * Reusable Components for Felipe Moura de Carvalho's Website
 * Provides <site-navbar> and <site-footer> custom elements to avoid duplication.
 */

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || 'about';
    this.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top w-100 px-3">
  <div class="container-fluid">
    <!-- Navbar Brand with Name and Title -->
    <a class="navbar-brand d-flex flex-column text-left" href="index.html">
      <span class="mainheader" style="font-weight: 500; letter-spacing: -0.5px;">Felipe de Carvalho</span>
      <span class="text-white" style="font-size: 0.55rem;"></span>
    </a>

    <!-- Mobile Toggler -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navigation Links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ${active === 'about' ? 'active' : ''}"><a class="nav-link ${active === 'about' ? 'active' : ''}" href="index.html">About</a></li>
        <li class="nav-item ${active === 'education' ? 'active' : ''}"><a class="nav-link ${active === 'education' ? 'active' : ''}" href="education.html">Education</a></li>
        <li class="nav-item ${active === 'projects' ? 'active' : ''}"><a class="nav-link ${active === 'projects' ? 'active' : ''}" href="projects.html">Projects</a></li>
        <li class="nav-item ${active === 'publications' ? 'active' : ''}"><a class="nav-link ${active === 'publications' ? 'active' : ''}" href="publications.html">Publications</a></li>
      </ul>
    </div>
  </div>
</nav>`;

    const toggler = this.querySelector('.navbar-toggler');
    const collapse = this.querySelector('#navbarNav');

    if (toggler && collapse) {
      toggler.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = collapse.classList.contains('show');
        if (isOpen) {
          collapse.classList.remove('show');
          toggler.setAttribute('aria-expanded', 'false');
          toggler.classList.add('collapsed');
        } else {
          collapse.classList.add('show');
          toggler.setAttribute('aria-expanded', 'true');
          toggler.classList.remove('collapsed');
        }
      });

      // Close dropdown if clicked outside
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target) && collapse.classList.contains('show')) {
          collapse.classList.remove('show');
          toggler.setAttribute('aria-expanded', 'false');
          toggler.classList.add('collapsed');
        }
      });
    }
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="site-footer w-100">
  <!-- Full-width horizontal line spanning edge-to-edge -->
  <hr class="footer-divider">

  <!-- Text container forced to the right -->
  <div class="container-fluid px-4 py-2">
    <div style="text-align: center !important; width: 100%;">
      <span style="display: inline-block;font-size: 0.8rem;">© 2019-2026 Felipe de Carvalho. Powered by <a href="https://mdbootstrap.com/" target="_blank">MDBootstrap</a></span>
    </div>
  </div>
</footer>`;
  }
}

// Register Custom Elements
customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);
