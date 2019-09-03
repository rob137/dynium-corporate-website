const toggleMenu = () => {
  const navMenu = document.getElementsByClassName('header_inner_nav_menu')[0];
  const menuIcon = document.getElementsByClassName('hamburger')[0];
  if (navMenu.innerHTML) {
    menuIcon.classList.remove('is-active');
    navMenu.innerHTML = ``;
  } else {
    menuIcon.classList.add('is-active');
    navMenu.innerHTML = `
      <ul class="header_inner_menu">
        <li><a href="#product">Product</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>`;
  }
};

document.getElementsByClassName('hamburger')[0].addEventListener('click', toggleMenu);
