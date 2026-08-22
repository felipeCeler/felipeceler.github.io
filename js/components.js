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
    <a class="navbar-brand d-flex flex-column text-start" href="index.html">
      <span class="fw-bold fs-6">Felipe Moura de Carvalho</span>
      <span class="text-white" style="font-size: 0.75rem;">D.Sc Computer Science</span>
    </a>

    <!-- Mobile Toggler -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
    <div style="text-align: right !important; width: 100%;">
      <span style="display: inline-block;">Felipe Moura de Carvalho. Copyright © 2026. Powered by MDBootstrap</span>
    </div>
  </div>
</footer>`;
  }
}

// Register Custom Elements
customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);
