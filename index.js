function getCurImgFilePath(imageClicked){
    console.log('curImgFile',imageClicked.target);
}

function toggleModal(imageLoc){
    let modal = document.getElementById('modal')
    let modalStyle = getComputedStyle(modal)['display'];

    //couldn't figure out adding the fn in ternary
    //modal.style.display = ( modalStyle === 'block' ) ? 'none' : 'block';
    
    //modal.style.display = ( modalStyle === 'block' ) ? getCurImgFilePath() : 'block';

    if(modalStyle === 'none'){
    	console.log('modal is closed, opening modal');
    	console.log('imageLoc ->',imageLoc.getAttribute("data-imageloc"));
    	let curImgFile = document.getElementsByClassName("projectImg");

    	// modal.style.display = 'block';

    }else{
    	console.log('modal is open, closing modal');
    	modal.style.display = 'none';
    }


}