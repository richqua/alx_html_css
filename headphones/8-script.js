 document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const openMenuBtn = document.getElementById('openMenu');
    const closeMenuBtn = document.getElementById('closeMenu');

    openMenuBtn.addEventListener('click', function () {
      menu.classList.add('menu-active');
      openMenuBtn.style.display = 'none';
      closeMenuBtn.style.display = 'block';
    });

    closeMenuBtn.addEventListener('click', function () {
      menu.classList.remove('menu-active');
      openMenuBtn.style.display = 'block';
      closeMenuBtn.style.display = 'none';
    });
  });