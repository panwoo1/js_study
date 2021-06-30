# Searching For Elements

한 번에 많은 요소를 가져올 때
document.getElementsByClassName() /array 반환
하지만 이럴 일은 별로 없음

document.getElementByTagName()
tag 이름으로 element 가져오기 / array 반환

document.querySelector(.className tag)
element를 CSS방식으로 검색 가능, 하나의 element return
만약 똑같은 tag 여러개면 첫번째 tag element
return

ex)const title = document.querySelector('.hello h1')

tag를 모두 가지고 오고 싶다면
document.querySelectorAll() /array 반환

querySelector 에서 id를 검색할 때는 #
class name 앞에 .
그냥 요소를 주면 tag
