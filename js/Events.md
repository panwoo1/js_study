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
