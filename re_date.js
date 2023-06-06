const button1 = document.querySelector('.click')
let sentence = ""
button1.addEventListener('click', ()=>{
    sentence = prompt('Enter your sentence')
    
    let date = / \d{1,2}\.\d{1,2}\.\d{4}|\d{1,2}\/\d{1,2}\/\d{4}|\d{1,2}\-\d{1,2}\-\d{4} /
    let res = sentence.match(date)
    console.log(res[0])
})

