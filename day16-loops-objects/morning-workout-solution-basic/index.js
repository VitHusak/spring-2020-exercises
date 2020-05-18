'use strict';

const aside = document.querySelector('#aside');

aside.addEventListener('mouseenter', () => {
  aside.classList.remove('aside--closed');
});

aside.addEventListener('mouseleave', () => {
  aside.classList.add('aside--closed');
});