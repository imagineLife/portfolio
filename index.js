function moveImage(direction){

    let allImages = document.querySelectorAll('.modalTableCell img');
    let singleImageWidth = getComputedStyle(allImages[0]).width;
    
    singleImageWidth = parseInt(singleImageWidth.replace('px',''));
    // console.log('singleImageWidth',singleImageWidth);
    //returns 375 ex

    if(direction === 'right'){
        singleImageWidth *= -1;
    }

    //move the images
    allImages.forEach((img) => {
        img.style.left = singleImageWidth + 'px';
    })

    /*
        set a var outside the fn
            IF NOT will be overwritten each time its called. duh :/
            holding WHERE in the picture-loop its AT,
            need to update the (*= -2, -3),
            COULD/SHOULD?! update based on image-width.

            ALSO, figure out how to know if I reached the end of the array.      
    */
}   




//5. Build & append photo-filled divs to modal window
function putPhotosInModal(arr){
	
    console.log('photo array is ',arr);

    //create table var
    let modalTable = document.getElementsByTagName('table');
    modalTable = modalTable[0];

    //create cell var
    let modalTableCell = document.getElementsByClassName('modalTableCell');
    let tableCell = modalTableCell[0];

    //set table width based or photo-array length
    modalTable.style.width = parseInt(arr.length * 100) + '%';
    
    //increase width of table
    // to add padding, 
    //AND 
    //thisImg.style.margin, etc.

    //remove current photos from table
    while (tableCell.firstChild) {
	    tableCell.removeChild(tableCell.firstChild);
	}
    

    //insert NEW photos into modal
    for(i=0; i < arr.length; i++){
    
        let thisImg = document.createElement('img');
        thisImg.src = arr[i];

        thisImg.style.width = parseInt(100 / arr.length) + '%';

        console.log('thisImg',thisImg);
	    tableCell.appendChild(thisImg);
    }


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
// function getCurImgFilePath(imageClicked){
//     console.log('curImgFile',imageClicked.target);
// }

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