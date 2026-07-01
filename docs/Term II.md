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
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
  position: relative;
}

.carousel img {
  width: 100%;
  display: none;
  border-radius: 10px;
}

.carousel img.active {
  display: block;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 14px 18px;
  color: white;
  background: rgba(0,0,0,0.5);
  border: none;
  font-size: 24px;
  border-radius: 50%;
  user-select: none;
}

.prev {
  left: 15px;
}

.next {
  right: 15px;
}

.prev:hover,
.next:hover {
  background: rgba(0,0,0,0.8);
}

.dots {
  text-align: center;
  margin-top: 15px;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  display: inline-block;
  background: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background: #333;
}
</style>

<div class="carousel">

    <img class="active" src="./images/image1.png" alt="Image 1">
    <img src="./images/image2.png" alt="Image 2">

    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>

</div>

<div class="dots">
    <span class="dot active"></span>
    <span class="dot"></span>
</div>

<script>
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');

let index = 0;

function showImage(i){
    images.forEach((img,n)=>{
        img.classList.toggle('active', n===i);
        dots[n].classList.toggle('active', n===i);
    });
    index = i;
}

document.querySelector('.next').addEventListener('click', ()=>{
    showImage((index+1)%images.length);
});

document.querySelector('.prev').addEventListener('click', ()=>{
    showImage((index-1+images.length)%images.length);
});

dots.forEach((dot,i)=>{
    dot.addEventListener('click', ()=>showImage(i));
});
</script>
