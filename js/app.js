const h1 = document.querySelector('div.hello h1')

function handleTitleClick() {
  const clickedClass = 'clicked'
  h1.classList.toggle(clickedClass)
}

h1.addEventListener('click', handleTitleClick)
