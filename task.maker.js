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
        generators[1].removeAttribute('disabled')
        generators[1].style.cursor = 'pointer'
        generators[1].innerHTML = 'Add a new task'
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
let num = 0;

function addColumn() {
    disableAddTaskButton(nbr)
    if (nbr < 6) {
        const html = document.createElement('div'),
            title = document.createElement('input'),
            delButton = document.createElement('span')
        taches = document.createElement('div')
        html.classList.add('column')
        html.setAttribute('id', 'column_' + nbr)
        title.classList.add('titre')
        title.setAttribute('id', 'title_' + nbr)
        title.setAttribute('placeholder', 'Title....' + nbr)
        delButton.classList.add('delete')
        delButton.setAttribute('id', 'delButton_' + nbr)
        taches.classList.add('task')
        taches.setAttribute('id', 'tache_' + nbr)
        html.style.backgroundColor = getColor(nbr)
        delButton.innerHTML = 'X'
        delButton.style.backgroundColor = getColor(3)
        html.appendChild(title)
        html.appendChild(taches)
        taches.appendChild(delButton)
        main.appendChild(html)

        // console.log(nbr)
        console.log(delButton)
        console.log(html)

        delButton.addEventListener('click', () => {
            html.remove()
            nbr--
            // deleteColumn(nbr)
            // console.log('remove column')
            // alert('remove Column')
        })
    }
}
btn.addEventListener('click', (e) => {
    if (textarea.value === '' || textarea.value === 'Obligatoire') {
        e.preventDefault();
        textarea.style.color = getColor(3)
        textarea.textContent = 'Obligatoire'
        textarea.addEventListener('click', () => {
            textarea.textContent = ''
            textarea.style.color = getColor(2)
        })
    } else {
        num++
        document.querySelector('.modal').style.display = 'none';
        addTask(num);
    }
})

function addTask(n) {
    console.log(jour.value)
    console.log(debut.value)
    console.log(fin.value)
    console.log(textarea.value)
        // console.log(new Date())
    const note = document.createElement('div');
    const backwards = document.createElement('span')
    const taskName = document.createElement('span')
    const forwards = document.createElement('span')
    forwards.setAttribute('class', 'forwards')
    backwards.setAttribute('class', 'backwards')
    taskName.setAttribute('class', 'taskName')

    forwards.style.cursor = 'pointer'
    backwards.style.cursor = 'pointer'


    backwards.innerHTML = '<<'
    forwards.innerHTML = '>>'
    taskName.innerHTML = textarea.value
    note.classList.add('note')
    note.setAttribute('id', 'note' + n)
    backwards.setAttribute('id', 'backwards' + n)
    taskName.setAttribute('id', 'taskName' + n)
    forwards.setAttribute('id', 'forwards' + n)


    note.appendChild(backwards)
    note.appendChild(taskName)
    note.appendChild(forwards)

    document.querySelector('#tache_1').appendChild(note)

    forwards.addEventListener('click', () => {
        if (main.childElementCount > 1) {
            document.querySelector('#tache_1').removeChild(note)
            document.querySelector('#tache_2').appendChild(note)
        }

    })
    backwards.addEventListener('click', () => {
        if (main.childElementCount > 1) {
            document.querySelector('#tache_2').removeChild(note)
            document.querySelector('#tache_1').appendChild(note)

        }
    })
}

function deleteColumn(n) {
    var target = document.getElementById('column_' + n)
    setTimeout(function() {
        target.remove();
    }, 2000)
    darken('column_' + n);
}

function darken(idtarget) {
    var target = document.getElementById(idtarget);
    var effect = setInterval(function() {
        if (!target.style.opacity) {
            target.style.opacity = 1;
        }
        if (target.style.opacity > 0) {
            target.style.opacity = 0.3;
        } else {
            clearInterval(effect);
        }
    }, 200)
}