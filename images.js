// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {

        // What to do when the request is successful

        var imgJson = JSON.parse(this.responseText);
        
        var imgWidth;
        var fullImg = document.querySelector('.full_img');                                // DOM selector for div tag to display and hide full image
        var backDrop = document.querySelector('.backdrop');                               // DOM selector for the background when displaying full image
        var mediaDesktop = window.matchMedia("(min-width : 813px)");                      // CSS media query matching variable for Laptop/Desktop 
        var mediaPhone = window.matchMedia("(max-width: 812px) and (min-width:640px)");   // CSS media query matching variable for phones landscape mode
        var display = '';


        //Loop through Json file for image urls(I am fetching small image sizes for initial display)
        for (var i in imgJson){
        
            display +='<img src="'+imgJson[i].urls.small+'" alt="">' ;   
        }


        // Update the DOM with display variable which has looped through img tags 
        document.querySelector('.container').innerHTML = display;

        // DOM selector for individual image tags to add click listeners
        var imgTag = document.querySelectorAll('img');      
     

         // Adding backdrop event listener, when clicked resume back to grid view. 
         backDrop.addEventListener('click', function(){

             backDrop.style.display = 'none';
             fullImg.style.display = 'none';

             if(mediaDesktop.matches ){    //Resume the updated width when backdrop is clicked for laptop/Desktop devices
                 
                fullImg.style.width = '60%';
                fullImg.style.left = '20%';
             }
             if(mediaPhone.matches ){     //Resume the updated width when backdrop is clicked for Phones/Tablets devices especially in landscape mode
                 
                fullImg.style.width = '65%';
                fullImg.style.left = '15%';
             }
             
         })


         // Looping through all the individual image tags to attach event listeners, when clicked to become full images
         // Here I'm using regular size images
         for(var j=0; j<imgTag.length; j++){

            imgTag[j].addEventListener('click', createFullImg(j));
         }

         function createFullImg(n){
            
           return function(){

            backDrop.style.display = 'block';
            fullImg.style.display = 'block';
            imgWidth = imgJson[n].width;

            document.querySelector('.full_img').innerHTML = '<img src="'+imgJson[n].urls.regular+'" alt="">';

            // Updating the full image media query width dynamically based on actual width of the image fetching from Json image file.  
            if(imgWidth <= 3737 && mediaDesktop.matches){
                fullImg.style.width = '40%';
                fullImg.style.left = '30%';
            }

            if(imgWidth <= 3737 && mediaPhone.matches){

                fullImg.style.width = '40%';
                fullImg.style.left = '30%';
            }

           } 
           
        }
           
	
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', './data/photos.json');
xhr.send();
