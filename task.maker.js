const generators = document.querySelectorAll('.generator'),
    titre = document.querySelector('.titre'),
    task = document.querySelector('.task'),
    column = document.querySelector('.column'),
    main = document.querySelector('.main'),
    container = document.querySelector('container'),
    textarea = document.querySelector('textarea'),
    form = document.querySelector('form'),
    btn = document.querySelector('button')


let nbr = 0;
generators[0].addEventListener('click', function() {
    nbr++
    addColumn();
    // if (nbr = 5) {
    //     alert('okkkkk')
    // }
})
generators[1].addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.exit').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';

    })
})


function addColumn() {
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
    e.preventDefault();

})