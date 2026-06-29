# FABRICATION PROCESS GIFS

<div class="carousel">
  <input type="radio" name="gif-slides" id="g1" checked>
  <input type="radio" name="gif-slides" id="g2">
  <input type="radio" name="gif-slides" id="g3">
  <input type="radio" name="gif-slides" id="g4">
  <input type="radio" name="gif-slides" id="g5">

  <div class="slides">
    <figure class="slide gif1"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/01.gif"></figure>
    <figure class="slide gif2"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/02.gif"></figure>
    <figure class="slide gif3"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/03.gif"></figure>
    <figure class="slide gif4"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/04.gif"></figure>
    <figure class="slide gif5"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/05.gif"></figure>
  </div>

  <div class="nav gnav1"><label class="btn prev" for="g5">❮</label><label class="btn next" for="g2">❯</label></div>
  <div class="nav gnav2"><label class="btn prev" for="g1">❮</label><label class="btn next" for="g3">❯</label></div>
  <div class="nav gnav3"><label class="btn prev" for="g2">❮</label><label class="btn next" for="g4">❯</label></div>
  <div class="nav gnav4"><label class="btn prev" for="g3">❮</label><label class="btn next" for="g5">❯</label></div>
  <div class="nav gnav5"><label class="btn prev" for="g4">❮</label><label class="btn next" for="g1">❯</label></div>

  <div class="counter">
    <span class="gc1">1 / 5</span>
    <span class="gc2">2 / 5</span>
    <span class="gc3">3 / 5</span>
    <span class="gc4">4 / 5</span>
    <span class="gc5">5 / 5</span>
  </div>
</div>


# FABRICATION PROCESS IMAGES

<div class="carousel">
  <input type="radio" name="image-slides" id="i1" checked>
  <input type="radio" name="image-slides" id="i2">
  <input type="radio" name="image-slides" id="i3">
  <input type="radio" name="image-slides" id="i4">
  <input type="radio" name="image-slides" id="i5">

  <div class="slides">
    <figure class="slide img1"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/11.JPG"></figure>
    <figure class="slide img2"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/12.JPG"></figure>
    <figure class="slide img3"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/13.JPG"></figure>
    <figure class="slide img4"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/14.JPG"></figure>
    <figure class="slide img5"><img src="https://mig-sketch.github.io/lavezzi-mdef/images/15.JPG"></figure>
  </div>

  <div class="nav inav1"><label class="btn prev" for="i5">❮</label><label class="btn next" for="i2">❯</label></div>
  <div class="nav inav2"><label class="btn prev" for="i1">❮</label><label class="btn next" for="i3">❯</label></div>
  <div class="nav inav3"><label class="btn prev" for="i2">❮</label><label class="btn next" for="i4">❯</label></div>
  <div class="nav inav4"><label class="btn prev" for="i3">❮</label><label class="btn next" for="i5">❯</label></div>
  <div class="nav inav5"><label class="btn prev" for="i4">❮</label><label class="btn next" for="i1">❯</label></div>

  <div class="counter">
    <span class="ic1">1 / 5</span>
    <span class="ic2">2 / 5</span>
    <span class="ic3">3 / 5</span>
    <span class="ic4">4 / 5</span>
    <span class="ic5">5 / 5</span>
  </div>
</div>


<style>
.carousel{
  max-width:650px;
  margin:25px auto 40px auto;
  position:relative;
}

.carousel input{
  position:absolute;
  left:-9999px;
}

.slide{
  display:none;
  margin:0;
  text-align:center;
}

.slide img{
  width:100%;
  max-height:480px;
  object-fit:contain;
  border-radius:12px;
}

#g1:checked ~ .slides .gif1,
#g2:checked ~ .slides .gif2,
#g3:checked ~ .slides .gif3,
#g4:checked ~ .slides .gif4,
#g5:checked ~ .slides .gif5,
#i1:checked ~ .slides .img1,
#i2:checked ~ .slides .img2,
#i3:checked ~ .slides .img3,
#i4:checked ~ .slides .img4,
#i5:checked ~ .slides .img5{
  display:block;
}

.nav{
  display:none;
}

#g1:checked ~ .gnav1,
#g2:checked ~ .gnav2,
#g3:checked ~ .gnav3,
#g4:checked ~ .gnav4,
#g5:checked ~ .gnav5,
#i1:checked ~ .inav1,
#i2:checked ~ .inav2,
#i3:checked ~ .inav3,
#i4:checked ~ .inav4,
#i5:checked ~ .inav5{
  display:block;
}

.btn{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  padding:10px 14px;
  border-radius:999px;
  background:rgba(0,0,0,0.55);
  color:white;
  font-size:18px;
  cursor:pointer;
  z-index:10;
}

.prev{ left:8px; }
.next{ right:8px; }

.counter{
  text-align:center;
  margin-top:8px;
  font-size:12px;
  opacity:0.7;
}

.counter span{
  display:none;
}

#g1:checked ~ .counter .gc1,
#g2:checked ~ .counter .gc2,
#g3:checked ~ .counter .gc3,
#g4:checked ~ .counter .gc4,
#g5:checked ~ .counter .gc5,
#i1:checked ~ .counter .ic1,
#i2:checked ~ .counter .ic2,
#i3:checked ~ .counter .ic3,
#i4:checked ~ .counter .ic4,
#i5:checked ~ .counter .ic5{
  display:inline;
}
</style>
# REFLECTION
The Fundamentals of Digital Fabrication course strengthened my confidence in turning ideas into physical prototypes. Through hands-on experimentation, I worked with a wide range of fabrication techniques, including laser cutting, 3D printing, CNC milling, mold making, electronics, and biomaterials. Rather than simply learning how to use machines, the course helped me understand how to select the right tools and processes for different design challenges. This practical knowledge became essential for developing my own projects and gave me the confidence to prototype more independently and efficiently.
