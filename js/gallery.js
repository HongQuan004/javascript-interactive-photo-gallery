/* JavaScript cho Accessible Photo Gallery */

function upDate(previewPic) {
    console.log("Triggered event on: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Thay đổi hình nền của div #image thành src của ảnh đang chọn
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // Thay đổi nội dung chữ của div #image thành thẻ alt của ảnh
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    // Đưa hình nền và chữ trở về trạng thái ban đầu
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over or focus on an image below to display here.";
}

function addTabIndex() {
    console.log("Trang đã tải xong, bắt đầu thêm thuộc tính tabindex cho các ảnh...");

    // Lấy tất cả các phần tử ảnh có class là 'preview'
    let images = document.querySelectorAll('.preview');

    // Dùng vòng lặp for để duyệt qua từng ảnh và gán thuộc tính tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Đã thêm tabindex cho ảnh thứ: " + (i + 1));
    }
}
