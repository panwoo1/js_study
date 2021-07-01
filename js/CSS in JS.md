# CSS in JavaScript

js로 class name을 변경하지 않게 해야함

```
function handleTitleClick() {
  const clickedClass = 'clicked'
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass)
  } else {
    h1.classList.add(clickedClass)
  }
}
```

- toggle 은 class name 확인 존재하면 삭제, 존재하지 않으면 추가

-> 코드 단축

```
function handleTitleClick() {
  const clickedClass = 'clicked'
  h1.classList.toggle(clickedClass)
}
```
