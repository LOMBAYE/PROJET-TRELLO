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

        // if (nbr < 6) {
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

        // console.log(nbr)
        // console.log(delButton)
        // console.log(html)


        delButton.addEventListener('click', () => {
            html.remove()
                // deleteCol()
                // deleteColumn(main.childElementCount)
            nbr--
            // console.log('remove column')
            // alert('remove Column')
        })
    }
    // }
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
const aujourdhui = new Date()
console.log(aujourdhui)

function addTask(n) {
    compareTimes(debut.value, fin.value)
        // console.log(jour.value)
        // var d = (debut.value).getTime()
        // console.log(d)
        // console.log(d.getTime())
        // console.log(compareDates(debut, fin))
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

    cpt = 1

    taskName.addEventListener('dblclick', function() {
        document.querySelector('#tache_1').removeChild(note)
        removedTasks.appendChild(note)
        backwards.style.visibility = 'hidden'
        forwards.style.visibility = 'hidden'
        taskName.addEventListener('dblclick', () => {
            document.querySelector('#tache_1').appendChild(note)
            backwards.style.visibility = 'visible'
            forwards.style.visibility = 'visible'
        })
    })
    var j = 1;
    const columnAll = document.querySelectorAll('.column')

    forwards.addEventListener('click', () => {
        columnAll[j].lastChild.appendChild(note)
            // if (main.childElementCount > 1) {
            //     document.querySelector('#tache_1').removeChild(note)
            //     document.querySelector('#tache_2').appendChild(note)
            // }
        j++

    })
    backwards.addEventListener('click', () => {
        if (main.childElementCount > 1) {
            document.querySelector('#tache_2').removeChild(note)
            document.querySelector('#tache_1').appendChild(note)

        }
    })
}
btn_toggle.addEventListener('click', () => {
    document.querySelector('.corbeille').style.display = 'block'
})