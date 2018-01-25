//4. Get Photos from file-directory
function getFilesFromDirectory(num, path){
	console.log('num ->',num,': path->',path);
}



//3. Set the number of photos to get from the directory
function setNumberOfPhotos(directoryPath){

	let numberOfPhotos = 0;

	switch (directoryPath){
		
		case './imgs/erp/' :
			console.log('erp');
			numberOfPhotos = 5;
			console.log(numberOfPhotos);
			getFilesFromDirectory(numberOfPhotos,directoryPath);
			return;
		
		default:
			return; 
	}

}

//2. get the current image-file-path from the html element
function getCurImgFilePath(imageClicked){
    console.log('curImgFile',imageClicked.target);
}

//1. Initial toggleModal
function toggleModal(imageLoc){
    let modal = document.getElementById('modal')
    let modalStyle = getComputedStyle(modal)['display'];


    //couldn't figure out adding the fn in ternary
    //modal.style.display = ( modalStyle === 'block' ) ? 'none' : 'block';
    //modal.style.display = ( modalStyle === 'block' ) ? getCurImgFilePath() : 'block';


    if(modalStyle === 'none'){
    	console.log('modal is closed, opening modal');
    	let curImageDirectory = imageLoc.getAttribute("data-imageloc");

    	setNumberOfPhotos(curImageDirectory);
    	//display the modal
    	// modal.style.display = 'block';

    }else{
    	console.log('modal is open, closing modal');
    	modal.style.display = 'none';
    }


}