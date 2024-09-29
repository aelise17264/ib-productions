class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
<header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <!-- <i class="bi bi-camera"></i>
        <h1 class="sitename">Ian Brander Productions</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.html">Home<br></a></li>
          <li><a href="about.html" class="active">About</a></li>
          <li class="dropdown"><a href="gallery.html"><span>Gallery</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="gallery.html">Nature</a></li>
              <li><a href="gallery.html">People</a></li>
              <li><a href="gallery.html">Architecture</a></li>
              <li><a href="gallery.html">Animals</a></li>
              <li><a href="gallery.html">Sports</a></li>
              <li><a href="gallery.html">Travel</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="services.html">Services</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-social-links">
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/ianjbrander/?hl=en" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/ian-brander-79536bb2/" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></a>
        <a href="https://vimeo.com/user3753585" target="_blank" class="vimeo"><i class="bi bi-vimeo"></i></a>
      </div>

    </div>
  </header>

        `
    
  }
}

class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

       `
    
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);