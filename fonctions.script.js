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
            return 'blue'
        case 2:
            return 'red'
        case 3:
            return 'rgb(0, 136, 255)'
        case 4:
            return 'grey'
        case 5:
            return ''
        default:
            return '#f69344'
    }
}
// 
function ConfirmerSuppression(n) {
    switch (n) {
        case 1:
            return true
            break;
        case 2:
            return false;
            break;
        default:
            break;
    }

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
    // setTimeout(() => {
    h3 = document.querySelector('h3')
    P = document.createElement('p');
    P.style.backgroundColor = bgColor
    P.innerText = msg
    h3.appendChild(P);
    setTimeout(() => h3.removeChild(P), 2000);
    // }, 2000);
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


function confirm(div, message) {

    const notif = document.createElement('div');
    const contentNotif = document.createElement('div');
    const bodytNotif = document.createElement('div');
    const headerNotif = document.createElement('div');
    const footerNotif = document.createElement('div');
    let btnAnnuler = document.createElement('button');
    let btnValider = document.createElement('button');

    notif.className = "notif";
    contentNotif.setAttribute('class', 'content-notif');
    bodytNotif.setAttribute('class', 'body-notif');
    headerNotif.setAttribute('class', 'header-notif');
    footerNotif.setAttribute('class', 'footer-notif');
    btnAnnuler.setAttribute('id', 'btn-annuler');
    btnValider.setAttribute('id', 'btn-valider');

    headerNotif.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
    btnAnnuler.innerHTML = "Annuler";
    btnValider.innerHTML = "Valider";
    bodytNotif.textContent = message;

    container.appendChild(notif);
    contentNotif.append(headerNotif, bodytNotif, footerNotif);
    footerNotif.append(btnValider, btnAnnuler);
    notif.appendChild(contentNotif);

    btnAnnuler.addEventListener('click', () => {
        notif.style.display = "none";
    });
    btnValider.addEventListener('click', () => {
        if (colonnes.length > 1 && div != colonnes[0]) {
            div.remove();
        } else if (colonnes.length == 1) {
            div.remove();
        }
        notif.style.display = "none";
        colonneArchive.appendChild(div);
    });
}