console.log('Dom Element',document.getElementById('modal'));

function toggleModal(){
    let modal = document.getElementById('modal')
    let modalStyle = getComputedStyle(modal)['display'];

    modal.style.display = ( modalStyle === 'block' ) ? 'none' : 'block';
}