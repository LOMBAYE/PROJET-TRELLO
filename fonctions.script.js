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
    // var target = document.getElementById('column_' + n)
    // var partieEntiere = parseInt(target)

    // return partieEntiere

    setTimeout(function() {
            document.querySelector('.delete').parent.parentElement.remove();
        }, 2000)
        // darken('column_' + n);
}

function deleteColumn(n) {
    var target = document.getElementById('column_' + n)
        // var partieEntiere = parseInt(target)

    // return partieEntiere

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
    // var el = document.getElementById('element')
    from.removeChild(element)
    element.appendChild(to)


}

function verifyTime(date1, date2) {
    const nouvelAn = new Date("January 1, 2023 00:00:00").getTime();
    const aujourdhui = new Date().getTime();
    const dif = nouvelAn - aujourdhui;
}

function compareTimes(debut, fin) {
    var depart = debut.split('-')
    var arr = fin.split('-')

    var splitDep = (depart[0], depart[1])
    var splitFin = (arr[0], arr[1])

    return splitFin - splitDep
}

function compareDates(from, to) {
    //Get the text in the elements
    var from = document.getElementById('from').textContent;
    var to = document.getElementById('to').textContent;

    //Generate an array where the first element is the year, second is month and third is day
    var splitFrom = from.split('-');
    var splitTo = to.split('-');

    //Create a date object from the arrays
    var fromDate = Date.parse(splitFrom[0], splitFrom[1] - 1, splitFrom[2]);
    var toDate = Date.parse(splitTo[0], splitTo[1] - 1, splitTo[2]);

    //Return the result of the comparison
    return fromDate < toDate;
}

function rafraichir() {

}