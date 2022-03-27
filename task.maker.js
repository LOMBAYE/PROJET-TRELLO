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
            taches = document.createElement('div')
        html.classList.add('column')
        title.classList.add('titre')
        title.setAttribute('placeholder', 'Title of the list...')
            // title.setAttribute('disabled', 'disabled')
        taches.classList.add('task')

        main.appendChild(html)
        html.appendChild(title)
        html.appendChild(taches)
        console.log(nbr)
    }
}
btn.addEventListener('click', (e) => {
    if (textarea.value === '' || textarea.value === 'Obligatoire') {
        console.log(jour)
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

        console.log(textarea.value)
        const note = document.createElement('div');


        console.log(note)

        note.classList.add('note')
        task.appendChild(note)
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