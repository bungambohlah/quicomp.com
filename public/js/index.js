(function () {
  'use strict';

  // ===== Preloader

  window.onscroll = function () {
    const headerNavbar = document.querySelector('.navigation');
    const sticky = headerNavbar.offsetTop;

    if (window.pageYOffset > sticky) {
      headerNavbar.classList.add('sticky');
    } else {
      headerNavbar.classList.remove('sticky');
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  };

  // Get the navbar

  // for menu scroll
  const pageLink = document.querySelectorAll('.page-scroll');

  pageLink.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll('.page-scroll');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute('href');
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
        document.querySelector('.page-scroll').classList.remove('active');
        currLink.classList.add('active');
      } else {
        currLink.classList.remove('active');
      }
    }
  }

  window.document.addEventListener('scroll', onScroll);

  // ===== close navbar-collapse when a  clicked
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  document.querySelectorAll('.page-scroll').forEach((e) =>
    e.addEventListener('click', () => {
      if (navbarToggler) navbarToggler.classList.remove('active');
      if (navbarCollapse) navbarCollapse.classList.remove('show');
    })
  );
  if (navbarToggler) {
    navbarToggler.addEventListener('click', function () {
      if (navbarToggler) navbarToggler.classList.toggle('active');
      if (navbarCollapse) navbarCollapse.classList.toggle('show');
    });
  }

  // ======== tiny slider for testimonial
  window.tns({
    container: '.testimonials',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    gutter: 0,
    nav: false,
    controls: false,
  });

  // ======== tiny slider for portfolio
  window.tns({
    container: '.portfolio-carousel',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    gutter: 30,
    nav: true,
    navPosition: 'bottom',
    controls: false,
    responsive: {
      0: {
        items: 1,
      },
      765: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });

  // WOW Scroll Spy
  const wow = new window.WOW({
    // disabled for mobile
    mobile: false,
  });
  wow.init();
})();
