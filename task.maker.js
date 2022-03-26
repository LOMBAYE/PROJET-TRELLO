const generators = document.querySelectorAll('.generator'),
    titre = document.querySelector('.titre'),
    task = document.querySelector('.task'),
    column = document.querySelector('.column'),
    main = document.querySelector('.main'),
    container = document.querySelector('container'),
    textarea = document.querySelector('textarea'),
    form = document.querySelector('form'),
    btn = document.querySelector('.ajouter')

let nbr = 0;

document.body.onload = () => {
    generators[1].setAttribute('disabled', 'disabled')
    generators[1].innerHTML = 'Add a column to start'
}

generators[0].addEventListener('click', function() {
    nbr++
    addColumn();
})
generators[1].addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.exit').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
    })
})


function addColumn() {
    generators[1].innerHTML = '+Add a task'
    generators[1].removeAttribute('disabled')
    if (nbr < 6) {
        const html = document.createElement('div'),
            title = document.createElement('input'),
            task = document.createElement('div')
        html.classList.add('column')
        title.classList.add('titre')
        title.setAttribute('placeholder', 'Title of the list...')
            // title.setAttribute('disabled', 'disabled')
        task.classList.add('task')

        main.appendChild(html)
        html.appendChild(title)
        html.appendChild(task)
        console.log(nbr)
    }
}
form.addEventListener('submit', (e) => {
    if (textarea.value === '') {
        e.preventDefault();
        textarea.style.color = 'red'
        textarea.textContent = 'Obligatoire'
        textarea.addEventListener('click', () => {
            textarea.textContent = ''
        })
    } else {
        addTask();
    }
})

function addTask() {
    const task = document.createElement('div');
    task.classList.add('task')
    alert(textarea.value)
    console.log(task)
}