var random_images_array = ["1.png", "2.png", "3.png" , "4.png" , "5.png" , "6.png", "7.png"];

function getRandomImage(imgAr, path) {
    path = path || 'assets/demo_one/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "404 Page not found" class="img-fluid img-responsive">';
    document.write(imgStr); document.close();
}