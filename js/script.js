let elements = document.querySelectorAll('.rolling-text');

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';
  
  let textContainer = document.createElement('div');
  textContainer.classList.add('block');
  
  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0': letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }
  
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

// for presentation purpose
setTimeout(() => {
  elements.forEach(element => {
    element.classList.add('play');
  })
}, 600);

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.remove('play');
  });
});

// mobile menu
const hamburger = document.getElementsByClassName('hamburger')[0]
const mobileMenu = document.getElementsByClassName('mobile-menu')[0]
const mobileMenuOverlay = document.getElementsByClassName('mobile-menu-overlay')[0]
const menuClose = document.getElementsByClassName('mobile-menu-close')[0]

const menuOptions = document.querySelectorAll('.mobile-menu a')
menuOptions.forEach(option => {
  option.addEventListener('click', () => {
    hamburger.click();
  })
})

hamburger.addEventListener('click', () => {
  toggleMenu()
  toggleOverlay()
})

menuClose.addEventListener('click', () => {
  toggleMenu()
})

function toggleMenu() {
  mobileMenu.classList.toggle('mobile-menu-open')
}

function toggleOverlay() {
  mobileMenuOverlay.classList.toggle('active')
}
