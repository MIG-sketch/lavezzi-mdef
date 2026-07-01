# problematize space
 <img width="998" height="562" alt="image" src="https://github.com/user-attachments/assets/e4bafb0c-139b-4a5a-afe0-098bcf061aef" />
 
# problematize narratives

<div style="position: relative; width: 100%; max-width: 900px; margin: 40px auto; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://www.youtube.com/embed/7XKQHD0nbFc"
    title="Francesco Mignogna - Sound to Energy"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

# problematize objects
<style>
.carousel {
  max-width: 1000px;
  margin: 40px auto;
  position: relative;
}

.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-slide {
  display: none;
}

.carousel-slide.active {
  display: block;
}

.carousel-slide img {
  width: 100%;
  border-radius: 8px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
}

.carousel-btn:hover {
  background: rgba(0,0,0,0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.dots {
  text-align: center;
  margin-top: 15px;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.dot.active {
  background: #333;
}
</style>

<div class="carousel">

  <div class="carousel-container">

    <div class="carousel-slide active">
      <img src="images/image1.png" alt="Image 1">
    </div>

    <div class="carousel-slide">
      <img src="images/image2.png" alt="Image 2">
    </div>

    <button class="carousel-btn prev">&#10094;</button>
    <button class="carousel-btn next">&#10095;</button>

  </div>

  <div class="dots">
    <span class="dot active"></span>
    <span class="dot"></span>
  </div>

</div>

<script>
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.toggle('active', i===index);
        dots[i].classList.toggle('active', i===index);
    });
    current=index;
}

document.querySelector('.next').onclick=()=>{
    showSlide((current+1)%slides.length);
};

document.querySelector('.prev').onclick=()=>{
    showSlide((current-1+slides.length)%slides.length);
};

dots.forEach((dot,i)=>{
    dot.onclick=()=>showSlide(i);
});
</script>
