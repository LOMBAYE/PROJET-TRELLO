const generators = document.querySelectorAll('.generator'),
    titre = document.querySelector('.titre'),
    task = document.querySelector('.task'),
    column = document.querySelector('.column'),
    main = document.querySelector('.main'),
    container = document.querySelector('container'),
    textarea = document.querySelector('textarea'),
    debut = document.querySelector('#debut'),
    fin = document.querySelector('#fin'),
    jour = document.querySelector('.jour'),
    form = document.querySelector('form'),
    btn = document.querySelector('.ajouter')

let nbr = 0;

document.body.onload = () => disableAddTaskButton(nbr)

function disableAddTaskButton(n) {
    if (n === 0) {
        generators[1].setAttribute('disabled', 'disabled')
        generators[1].style.cursor = 'none'
        generators[1].innerHTML = 'First add a column to start'
    } else {
        generators[1].innerHTML = 'Add a new task'
        generators[1].removeAttribute('disabled')
        generators[1].style.cursor = 'pointer'
    }
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

function getColor(n) {
    switch (n) {
        case 1:
            return ''
        case 2:
            return 'black'
        case 3:
            return 'red'
        case 4:
            return 'green'
        case 5:
            return 'blue'
    }
}

function addColumn() {
    disableAddTaskButton(nbr)
    if (nbr < 6) {
        const html = document.createElement('div'),
            title = document.createElement('input'),
            taches = document.createElement('div')
        html.classList.add('column')
        html.setAttribute('id', 'column_' + nbr)
        title.classList.add('titre')
        title.setAttribute('id', 'title_' + nbr)
        title.setAttribute('placeholder', 'Title of the list...')
        taches.classList.add('task')
        taches.setAttribute('id', 'tache_' + nbr)
        html.style.backgroundColor = getColor(nbr)
        main.appendChild(html)
        html.appendChild(title)
        html.appendChild(taches)
        console.log(nbr)
        title.addEventListener('click', () => {
            alert('remove Column')
        })
    }
}
btn.addEventListener('click', (e) => {
    if (textarea.value === '' || textarea.value === 'Obligatoire') {

        // console.log(debut.value)
        // console.log(fin.value)
        e.preventDefault();
        textarea.style.color = 'red'
        textarea.textContent = 'Obligatoire'
        textarea.addEventListener('click', () => {
            textarea.textContent = ''
            textarea.style.color = 'black'
        })
    } else {
        console.log(jour.value)
        console.log(debut.value)
        console.log(fin.value)
        console.log(textarea.value)
        console.log(new Date())
        const note = document.createElement('div');


        console.log(note)

        note.classList.add('note')
        main.appendChild(note)
        document.querySelector('.modal').style.display = 'none';

        // addTask();
    }
})

// function addTask() {
//     // const note = document.createElement('div');
//     // note.classList.add('note')
//     // task.appendChild(note)
//     // console.log(note)
//     alert(textarea.value)
// }