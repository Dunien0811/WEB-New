const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function(){
    sliderMainImage.src = sliderImageList[0].src;
    console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function(){
    sliderMainImage.src = sliderImageList[3].src;
    console.log(sliderMainImage.src);
};
sliderImageList[4].onclick = function(){
  sliderMainImage.src = sliderImageList[4].src;
  console.log(sliderMainImage.src);
};
var btnOpen = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");
var iconcloes = document.querySelector(".modal_header i");
var btncloes = document.querySelector(".modal_footer button");

function toggleModal(e) {
  console.log(e.target);
  modal.classList.toggle("hide");
}

btnOpen.addEventListener("click", toggleModal);
btncloes.addEventListener("click", toggleModal);
iconcloes.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
// const fags = document.querySelectorAll(".cps-block-content_btn-showmore");
// fags.forEach((cpsBlockContentBtnShowmore) => {
//   cpsBlockContentBtnShowmore.addEventListener("click", () => {
//     cpsBlockContentBtnShowmore.classList.toggle("active");
//   });
// });
var blockContentProductLeft = document.querySelector(".block-content-product-left");
var btnShowMore = document.querySelector(".btn-show-more");

btnShowMore.addEventListener("click", function() {
  if (blockContentProductLeft.style.maxHeight) {
    blockContentProductLeft.style.maxHeight = null;
    btnShowMore.innerHTML = "See more";
  } else {
    blockContentProductLeft.style.maxHeight = blockContentProductLeft.scrollHeight + "1000px";
    btnShowMore.innerHTML = "Compact";
  }
});
//thanh trượt 
// Cập nhật chiều cao của nội dung khi trang được tải hoặc thay đổi kích thước
window.addEventListener("load", updateHeight);
window.addEventListener("resize", updateHeight);

function updateHeight() {
  var scrollContent = document.querySelector(".scroll-content");
  var scrollContainer = document.querySelector(".scroll-container");
  var contentHeight = scrollContent.clientHeight;
  var containerHeight = scrollContainer.clientHeight;
  
  if (contentHeight > containerHeight) {
    scrollContainer.style.height = containerHeight + "20px";
  } else {
    scrollContainer.style.height = contentHeight + "90%";
  }
}




