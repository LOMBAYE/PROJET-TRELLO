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
            return 'black'
        case 4:
            return 'green'
        case 5:
            return 'blue'
        default:
            return 'yellow'
    }
}
// 
function ConfirmerSuppression() {

}

function deleteCol() {
    setTimeout(function() {
            document.querySelector('.delete').parent.parentElement.remove();
        }, 2000)
        // darken('column_' + n);
}

function deleteColumn() {


    setTimeout(function() {
        target.remove();
    }, 2000)
    darken('column_' + n);
}
// 
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
// 
function moveElementTo(element, from, to) {
    //Element
    //position actuelle
    //position finale
    from.removeChild(element)
    element.appendChild(to)
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
        // alert("OK")
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