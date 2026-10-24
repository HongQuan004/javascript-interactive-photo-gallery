/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
     1) change the url for the background image of the div with the id = "image" 
     to the source file of the preview image
     
     2) Change the text  of the div with the id = "image" 
     to the alt text of the preview image 
     */
    
    // Bước kiểm tra sự kiện và in thông tin ra console (theo gợi ý của đề bài)
    console.log("Triggered mouseover on: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // 1) Thay đổi background image của phần tử có id = "image" thành src của ảnh được trỏ vào
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // 2) Thay đổi text của phần tử có id = "image" thành alt text của ảnh
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){
     /* In this function you should 
     1) Update the url for the background image of the div with the id = "image" 
     back to the orginal-image.  You can use the css code to see what that original URL was
     
     2) Change the text  of the div with the id = "image" 
     back to the original text.  You can use the html code to see what that original text was
     */
        
    // 1) Đưa background image trở về giá trị ban đầu trong CSS: url('')
    document.getElementById('image').style.backgroundImage = "url('')";

    // 2) Đưa text trở về nội dung ban đầu trong HTML: "Hover over an image below to display here."
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
