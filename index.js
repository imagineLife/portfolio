
//Called from arrows inside carousel
//moves images left-or-right
function moveImage(direction){

    //Calculate how much to move the images
    let howMuchToMove = numberOfPhotos - numberOfPhotosLeft;

    let allImages = document.querySelectorAll('.modalTableCell img');
    let singleImageWidth = getComputedStyle(allImages[0]).width;
    
    singleImageWidth = parseInt(singleImageWidth.replace('px',''));

    //when user selects 'right', move all the images LEFT
    if(direction === 'right'){

        if(numberOfPhotosLeft == 0){
            return;
        }else{

            singleImageWidth *= -(howMuchToMove);
           
        //move the images
            allImages.forEach((img) => {
                img.style.left = singleImageWidth + 'px';
            })

            //reset how many photos are left in the carousel
            numberOfPhotosLeft = numberOfPhotosLeft - 1;

            console.log('numberOfPhotos  ',numberOfPhotos);
            console.log('numberOfPhotosLeft  ',numberOfPhotosLeft);

        }
    //when user selects 'left' move all the images RIGHT
    }else{
        console.log('howMuchToMove',howMuchToMove);

    //if at left-most, don't do anything
        if(howMuchToMove == 1){
            console.log('numberOfPhotos  ',numberOfPhotos);
            console.log('numberOfPhotosLeft  ',numberOfPhotosLeft);

            console.log('leftmost, STOP!');
            return;
    
    //if NOT at left-most photo, move-left   
        }else{

            let howMuchToMoveRight = howMuchToMove - 1;
            let howManyPxToMove = ( parseInt(howMuchToMoveRight) - 1 ) * singleImageWidth; 

            //calculate the move-right

            //move the images
            allImages.forEach((img) => {
                img.style.left = -howManyPxToMove + 'px';
            })

            //reset how many photos are left in the carousel
            numberOfPhotosLeft = numberOfPhotosLeft + 1;

            console.log('numberOfPhotos  ',numberOfPhotos);
            console.log('numberOfPhotosLeft  ',numberOfPhotosLeft);
        }

    }
}   




//5. Build & append photo-filled divs to modal window
function putPhotosInModal(arr){
    
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

	switch (directoryPath){
		
		case ('./imgs/erp/') :
			numberOfPhotos = 5;
            numberOfPhotosLeft = 4;
            console.log('number of photos LEFT in modal',numberOfPhotosLeft);
			getFileNamesFromDirectory(numberOfPhotos,directoryPath);

			return;
		
		case ('./imgs/macro/') :
			numberOfPhotos = 3;
            numberOfPhotosLeft = 2;
			getFileNamesFromDirectory(numberOfPhotos,directoryPath);		
            console.log('number of photos LEFT in modal',numberOfPhotosLeft);
			return;

		default:
			return; 
	}

}

//1. Initial toggleModal
function toggleModal(imageLoc){
    let modal = document.getElementById('modal')
    let modalStyle = getComputedStyle(modal)['display'];


    if(modalStyle === 'none'){
    	console.log('modal is closed, opening modal');
    	let curImageDirectory = imageLoc.getAttribute("data-imageloc");

    	setNumberOfPhotos(curImageDirectory);

    }else{
    	console.log('modal is open, closing modal');
    	modal.style.display = 'none';
    }

}


//Hold TOTAL number of photos in modal
let numberOfPhotos = 0;


//holds the COUNT of images in the imgArr
//used for limiting the number of times
// a user can click left-or-right
let numberOfPhotosLeft = 0;