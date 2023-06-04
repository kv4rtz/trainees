const allMarks = document.querySelectorAll('select')
const button = document.querySelector('.button')

button.addEventListener('click', (e) => {
    let count = 0;

    e.preventDefault()

    allMarks.forEach(el => {
        count += Number(el.value)
    })

    document.querySelector('.all').innerHTML = `Всего баллов: ${count}`
})