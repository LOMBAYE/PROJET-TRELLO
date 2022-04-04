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
//
function getColor(n) {
    switch (n) {
        case 1:
            return ''
        case 2:
            return 'red'
        case 3:
            return 'blue'
        case 4:
            return 'grey'
        case 5:
            return 'rgb(0, 136, 255)'
        default:
            return '#f69344'
    }
}
// 
function ConfirmerSuppression() {

}

function addTimeoutEvent(elem, time, bgColor) {
    var timeout = setTimeout(function() {
        elem.style.backgroundColor = bgColor
        elem.removeEventListener('evt', foo)
    }, time);
    elem.addEventListener('evt', foo);

    function foo() {
        if (timeout)
            clearTimeout(timeout);
    }
}

function rafraichir() {
    const allTitle = document.querySelectorAll('.titre')
    const allColumn = document.querySelectorAll('.column')
    allTitle.forEach((element, i) => {
        element.placeholder = 'Title....' + (i + 1)
        nbr = (i + 1)
    })
    allColumn.forEach((element, i) => {
        element.id = 'column_' + (i + 1)
        nbr = (i + 1)
    })
}

function notification(msg = 'Nouvelle colonne ajoutee ', bgColor = 'green') {
    setTimeout(() => {
        h3 = document.querySelector('h3')
        P = document.createElement('p');
        P.style.backgroundColor = bgColor
        P.innerText = msg
        h3.appendChild(P);
        setTimeout(() => h3.removeChild(P), 2000);
    }, 2000);
}

function fadeOut(e) {
    var effect = setInterval(function() {
        if (!e.target.parentElement.parentElement.style.opacity) {
            e.target.parentElement.parentElement.style.opacity = 1;
        }
        if (e.target.parentElement.parentElement.style.opacity > 0) {
            e.target.parentElement.parentElement.style.opacity = 0.3;
        } else {
            clearInterval(effect);
        }
    }, 200)
}

function getIdOfParentColumn(e) {
    var id = e.target.parentElement.parentElement.parentElement.id,
        idSplit = id.split('_'),
        idEntier = parseInt(idSplit[1])
    return idEntier;
}