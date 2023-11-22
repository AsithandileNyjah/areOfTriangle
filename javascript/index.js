let height = document.querySelector('[height]').value
let base = document.querySelector('[base]').value
let display = document.querySelector('[view]')
let btn = document.querySelector('[count]')

btn.addEventListener('click', count)

function count(){
    let height = document.querySelector('[height]').value
    let base = document.querySelector('[base]').value
    let ans = (height*base)/2
    console.log(ans)
    display.value = ans
}