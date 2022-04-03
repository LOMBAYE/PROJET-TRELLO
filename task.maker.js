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
    btn = document.querySelector('.ajouter'),
    btn_toggle = document.querySelector('.toggle'),
    removedTasks = document.querySelector('.removedTasks')

let nbr = 0;
let num = 0;

document.body.onload = () => disableAddTaskButton(nbr)

generators[0].addEventListener('click', function() {
    nbr++
    addColumn();
    rafraichir()
    notification('Nouvelle colonne ajoutee')
})
generators[1].addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.exit').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
    })
})



function addColumn() {
    disableAddTaskButton(nbr)
    if (main.childElementCount < 5) {
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
            // delButton.style.backgroundColor = getColor(2)
        html.appendChild(title)
        html.appendChild(taches)
        taches.appendChild(delButton)
        main.appendChild(html)

        delButton.addEventListener('click', (e) => {
            if (e.target.parentElement.parentElement.id === 'column_1') {
                if (main.childElementCount > 1) {
                    e.preventDefault();
                } else {
                    e.target.parentElement.parentElement.remove()
                    notification()
                }
            } else {
                setTimeout(() => {
                    e.target.parentElement.parentElement.remove()
                    rafraichir()
                }, 1000)
                notification()
            }
        })

    }
}
btn.addEventListener('click', (e) => {
    // validite des horaires choisis
    const heured = Date.parse(`${jour.value} ${debut.value}`)
    const now = Date.parse(new Date())
    var heuref = Date.parse(`${jour.value} ${fin.value}`)

    if (textarea.value.trim === '' || heured > heuref || now > heured || jour.value === '') {
        e.preventDefault();
        textarea.style.color = 'red'
        textarea.innerHTML = 'Verifiez les valeurs saisies'
        textarea.addEventListener('click', () => {
            textarea.style.color = 'black'
            textarea.innerHTML = ''
        })
    } else {
        num++
        document.querySelector('.modal').style.display = 'none';
        addTask(num);
    }
    //  alerte si heure de debut ou fin arrive 
    var alerteDebut = heured - now
    var timeIsUp = heuref - now
    addTimeoutEvent(document.getElementById('note' + num), alerteDebut, 'green')
    addTimeoutEvent(document.getElementById('note' + num), timeIsUp, 'grey')
})

function addTask(n) {
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
    taskName.style.cursor = 'pointer'
    note.classList.add('note')
    note.setAttribute('id', 'note' + n)
    backwards.setAttribute('id', 'backwards' + n)
    taskName.setAttribute('id', 'taskName' + n)
    forwards.setAttribute('id', 'forwards' + n)

    note.appendChild(backwards)
    note.appendChild(taskName)
    note.appendChild(forwards)

    document.querySelector('#tache_1').appendChild(note)

    forwards.addEventListener('click', (e) => {
        var hj = e.target.parentElement.parentElement.parentElement.id,
            idSplt = hj.split('_'),
            idEntier = parseInt(idSplt[1])
        var suivant = document.getElementById('column_' + (idEntier + 1))
        suivant.lastChild.appendChild((note))
    })
    backwards.addEventListener('click', (e) => {
        var hj = e.target.parentElement.parentElement.parentElement.id,
            idSplt = hj.split('_'),
            idEntier = parseInt(idSplt[1]),
            precedent = document.getElementById('column_' + (idEntier - 1))
        precedent.lastChild.appendChild((note))
    })

    // suppression tache
    document.getElementById('note' + num).addEventListener('dblclick', () => {
        removedTasks.appendChild(document.getElementById('note' + num))
        notification('Tache deplacee vers la corbeille')
        forwards.style.visibility = 'hidden'
        backwards.style.visibility = 'hidden'
    })
}

btn_toggle.addEventListener('click', () => {
    var x = document.querySelector('.corbeille')
    if (x.style.display == "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
})