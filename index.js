//Called from arrows inside carousel
// & moves images left-or-right
function moveImage(direction){

    //Calculate how much to move the images
    let howMuchToMove = numberOfPhotos - numberOfPhotosLeft;

    let allImages = document.querySelectorAll('.modalTableCell img');

    let singleImageWidth = getComputedStyle(allImages[0]).width;
    
    singleImageWidth = parseInt(singleImageWidth.replace('px',''));

    //when user selects 'right', move all the images LEFT
    if(direction === 'right'){

    //If at the end of the phots, STOP!
        if(numberOfPhotosLeft == 0){
            return;
        
    //If NOT at the end of the phots, move them left
        }else{
            singleImageWidth *= -(howMuchToMove);
    //move the images
            allImages.forEach((img) => {
                img.style.left = singleImageWidth + 'px';
            })

    //reset how many photos are left in the carousel
            numberOfPhotosLeft = numberOfPhotosLeft - 1;


        }
    //when user selects 'left' move all the images RIGHT
    }else{

   //If at the end of the phots, STOP!
        if(howMuchToMove == 1){
            return;
    
    //if NOT at left-most photo, move-left   
        }else{

            let howMuchToMoveRight = howMuchToMove - 1;
            let howManyPxToMove = ( parseInt(howMuchToMoveRight) - 1 ) * singleImageWidth; 

    //move the images
            allImages.forEach((img) => {
                img.style.left = -howManyPxToMove + 'px';
            })

    //reset how many photos are left in the carousel
            numberOfPhotosLeft = numberOfPhotosLeft + 1;
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

    //remove current photos from table
    while (tableCell.firstChild) {
	    tableCell.removeChild(tableCell.firstChild);
	}
    

    //insert NEW photos into modal
    for(i=0; i < arr.length; i++){
    
        let thisImg = document.createElement('img');
        thisImg.src = arr[i];
        thisImg.className = "modalImage";
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
			getFileNamesFromDirectory(numberOfPhotos,directoryPath);

			return;

        case ('./imgs/vinFinder/') :
            numberOfPhotos = 1;
            numberOfPhotosLeft = 0;
            getFileNamesFromDirectory(numberOfPhotos,directoryPath);

            return;

        case ('./imgs/miles/') :
            numberOfPhotos = 3;
            numberOfPhotosLeft = 2;
            getFileNamesFromDirectory(numberOfPhotos,directoryPath);

            return;

        case ('./imgs/say-what/') :
            numberOfPhotos = 4;
            numberOfPhotosLeft = 3;
            getFileNamesFromDirectory(numberOfPhotos,directoryPath);

            return;

		case ('./imgs/macro/') :
			numberOfPhotos = 3;
            numberOfPhotosLeft = 2;
			getFileNamesFromDirectory(numberOfPhotos,directoryPath);		
			return;

        case ('./imgs/jazzQuiz/') :
            numberOfPhotos = 3;
            numberOfPhotosLeft = 2;
            getFileNamesFromDirectory(numberOfPhotos,directoryPath);        
            return;

        case ('./imgs/ristats/') :
            numberOfPhotos = 3;
            numberOfPhotosLeft = 2;
            getFileNamesFromDirectory(numberOfPhotos,directoryPath);        
            return;

        case ('./imgs/worldmap/') :
            numberOfPhotos = 3;
            numberOfPhotosLeft = 2;
            getFileNamesFromDirectory(numberOfPhotos,directoryPath);        
            return;

		default:
			return; 
	}

}

//1. Initial toggleModal function called
//   from html
function toggleModal(imageLoc){
    console.log('toggleModal, imageLoc')
    console.log(imageLoc)
    let modal = document.getElementById('modal')
    let modalStyle = getComputedStyle(modal)['display'];


    if(modalStyle === 'none'){
    	let curImageDirectory = imageLoc.getAttribute("data-imageloc");
        console.log('curImageDirectory')
        console.log(curImageDirectory)
    	setNumberOfPhotos(curImageDirectory);

    }else{
    	modal.style.display = 'none';
    }

}


//Holds TOTAL number of photos in modal
let numberOfPhotos = 0;


//holds the COUNT of images in the imgArr
//used for limiting the number of times
// a user can click left-or-right
let numberOfPhotosLeft = 0;


//Scrolling function
scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementById("projectsButton").addEventListener('click', () => {
  scrollTo(document.getElementById("projects"));
});

document.getElementById("skillsButton").addEventListener('click', () => {
  scrollTo(document.getElementById("skillset"));
});

document.getElementById("contactButton").addEventListener('click', () => {
  scrollTo(document.getElementById("contact"));
});