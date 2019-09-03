const toggleMenu = () => {
  navMenu = document.getElementsByClassName('header_inner_nav_menu')[0];
  if (navMenu.innerHTML) {
    navMenu.innerHTML = ``;
  } else {
    navMenu.innerHTML = `
      <ul class="header_inner_menu">
        <li><a href="#product">Product</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>`;
  }
};

const navButton = document.getElementsByClassName('header_inner_nav_menuBtn')[0];

navButton.addEventListener('click', toggleMenu);
