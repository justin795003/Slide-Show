let index = 0; // Index starting point
let images = []; // Declare images array
let time = 2000; // Declare time variable which will keep track of time in between images in milliseconds


//Store images in array

images[0] = '/assets/image1.jpg';
images[1] = '/assets/image2.jpg';
images[2] = '/assets/image3.jpg';
images[3] = '/assets/image4.jpg';
images[4] = '/assets/image5.jpg';

//Change Image


function changeImg(){
    let slides = document.querySelector('.slides');
    slides.src = images[index];

    if(index < images.length - 1){
        index++;
    }else{
        index = 0;
    }
    setTimeout("changeImg()", time);
    
}

window.onload = changeImg();