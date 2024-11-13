
function incrementarLike(id) {
    let contador = document.getElementById(id);
    let count = parseInt(contador.innerText.split(' ')[0]);
    contador.innerText = (count + 1) + ' Likes';
}

function incrementarDislike(id) {
    let contador = document.getElementById(id);
    let count = parseInt(contador.innerText.split(' ')[0]);
    contador.innerText = (count + 1) + ' Dislikes';
}

