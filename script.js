const toggleMenu = () => {
  navContent = document.getElementsByClassName('header_nav')[0].innerHTML;
  if (navContent) {
    document.getElementsByClassName('header_nav')[0].innerHTML = ``;
  } else {
    document.getElementsByClassName('header_nav')[0].innerHTML = `
      <ul class="header_inner_menu">
        <li><a>Product</a></li>
        <li><a>Careers</a></li>
        <li><a>Contact us</a></li>
      </ul>`;
  }
};

const navButton = document.getElementsByClassName('header_inner_menuBtn')[0];

navButton.addEventListener('click', toggleMenu);
