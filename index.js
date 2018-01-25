//5. Build & append photo-filled divs to modal window
function putPhotosInModal(arr){
	console.log('photo array is ',arr);
    //display the modal
    let modalTable = document.getElementsByClassName('modalTableCell');
    let thisImg = document.createElement('img');
    let tableCell = modalTable[0];
    thisImg.src = arr[0];
    console.log('img src ->',thisImg.src);
    console.log('thisImg',thisImg);
    console.log('modalTableCell',tableCell);
    while (tableCell.firstChild) {
    tableCell.removeChild(tableCell.firstChild);
}
    tableCell.appendChild(thisImg);
    modal.style.display = 'block';

}

//4. Get Photo filenames from directory, put photo paths into array
function getFileNamesFromDirectory(num, path){

	let photoArr = [];

	for(let i = 1; i < (num +1); i ++){
		photoArr.push(path+i+'.jpg');
	}

	putPhotosInModal(photoArr);
}



//3. Set the number of photos to get from the directory
function setNumberOfPhotos(directoryPath){

	console.log('made it here');
	let numberOfPhotos = 0;
	console.log('directoryPath',directoryPath);

	switch (directoryPath){
		
		case ('./imgs/erp/') :
			numberOfPhotos = 5;
			getFileNamesFromDirectory(numberOfPhotos,directoryPath);
			return;
		
		case ('./imgs/macro/') :
			numberOfPhotos = 3;
			getFileNamesFromDirectory(numberOfPhotos,directoryPath);		
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