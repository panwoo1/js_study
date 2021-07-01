# Events

element의 내부를 보고 싶으면 console.dir()

#### click event

---.addEventListener()
어떤 이벤트인지 제대로 명시해야함.
js에게 무슨 event를 listen 하는 것인지 명확히 제시

const title = document.querySelector('div.hello h1')

function handleTitleClick() {
title.style.color = 'blue'
}

title.addEventListener('click',
handleTitleClick)

함수를 전달할 때 함수 이름만 전달, 실행X
click하면 function이 동작하길 원함

### part 2

- tag element 검색 Mozilla Developer Network (MDN)

- console.dir()

JavaScript로 style 변경 가능하지만 css에서 하는 것이 맞음

### more

- event 사용 방법

  1. .addEventListener()
  2. on*eventname*

  - 첫번째는 .removeEventListenr로 지울 수 있음

- document의 body, head, title 이런 것들은 중요하기 때문에 document.body.style.~ 의 명령이 허용됨

```
const title = document.querySelector('div.hello h1')

function handleTitleClick() {
  title.style.color = 'blue'
}
function handleMouseEnter() {
  title.innerText = 'Mouse is here!'
}
function handleMouseLeave() {
  title.innerText = 'Mouse is gone'
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato'
}

function handleWindowCopy() {
  alert('copier!')
}

function handleWindowOffline() {
  alert('SOS no wifi!')
}
function handleWindowOnline() {
  alert('oh good')
}
title.onclick = handleTitleClick
title.onmouseenter = handleMouseEnter
title.addEventListener('mouseleave', handleMouseLeave)

window.addEventListener('resize', handleWindowResize)
window.addEventListener('copy', handleWindowCopy)
window.addEventListener('offline', handleWindowOffline)
window.addEventListener('online', handleWindowOnline)

```
