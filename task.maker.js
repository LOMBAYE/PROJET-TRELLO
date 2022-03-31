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
        delButton.style.backgroundColor = getColor(2)
        html.appendChild(title)
        html.appendChild(taches)
        taches.appendChild(delButton)
        main.appendChild(html)

        //    closest p or div or input might be useful
        delButton.addEventListener('click', (e) => {
            setTimeout(() => {
                e.target.parentElement.parentElement.remove()
                rafraichir()
            }, 1000)
        })

    }
}
btn.addEventListener('click', (e) => {
    // var dd = Date.parse('jour.value 10:20:45') > Date.parse('jour.value 5:10:10')
    const heured = Date.parse(`${jour.value} ${debut.value}`)
    const now = Date.parse(new Date())
    var heuref = Date.parse(`${jour.value} ${fin.value}`)
        // message d alerte si heure de fin arrive 

    if (textarea.value === '' || textarea.value === 'Obligatoire' || heured > heuref || now > heured || jour.value === '') {
        e.preventDefault();
    } else {
        num++
        document.querySelector('.modal').style.display = 'none';
        addTask(num);
    }
    setInterval(function() {
            console.log((heured - now))

        }, 1000)
        // setTimeout(() => {
        //     console.log((heured - now))
        // }, 1000)
})

function addTask(n) {

    const note = document.createElement('div');
    const backwards = document.createElement('span')
    const taskName = document.createElement('span')
    const forwards = document.createElement('span')
    forwards.setAttribute('class', 'forwards')
    backwards.setAttribute('class', 'backwards')
    taskName.setAttribute('class', 'taskName')
        // taskName.style.boxSizing = 'border-box'
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
    taskName.addEventListener('dblclick', function(e) {
        console.log(e.target.parentElement)
            // alert('ojjjjjjjjjjj')
            // document.querySelector('#tache_1').removeChild(note)
            // removedTasks.appendChild(note)
            // backwards.style.visibility = 'hidden'
            // forwards.style.visibility = 'hidden'
            // taskName.addEventListener('dblclick', () => {
            //     document.querySelector('#tache_1').appendChild(note)
            //     backwards.style.visibility = 'visible'
            //     forwards.style.visibility = 'visible'
            // })
    })
}


btn_toggle.addEventListener('click', () => {
    document.querySelector('.corbeille').style.display = 'block'
})