//4. Get Photos from file-directory
function getFilesFromDirectory(num, path){
	console.log('num ->',num,': path->',path);

    //display the modal
    modal.style.display = 'block';
}



//3. Set the number of photos to get from the directory
function setNumberOfPhotos(directoryPath){

	console.log('made it here');
	let numberOfPhotos = 0;
	console.log('directoryPath',directoryPath);

	switch (directoryPath){
		
		case ('./imgs/erp/') :
			numberOfPhotos = 5;
			getFilesFromDirectory(numberOfPhotos,directoryPath);
			return;
		
		case ('./imgs/macro/') :
			numberOfPhotos = 3;
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

    }else{
    	console.log('modal is open, closing modal');
    	modal.style.display = 'none';
    }


}