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
            return 'black'
        case 3:
            return 'red'
        case 4:
            return 'green'
        case 5:
            return 'blue'
    }
}
// 
function deleteColumn(n) {
    var target = document.getElementById('column_' + n)
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