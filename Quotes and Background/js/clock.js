const clock = document.querySelector('h2#clock')
/*
function sayHello() {
  console.log('hello')
}
*/
//setInterval(funciton, ms) 시간 간격으로 호출
//setInterval(sayHello, 5000)

//setTimeout(function, ms) 시간이 흐른 뒤 호출
//setTimeout(sayHello, 5000)

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)

//padStart() -> "1".padStart(2, "0") "01"
//padEnd는 뒤쪽에 붙임
//형변환 String()
