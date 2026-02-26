# PICTORIAL DRAFT

<div class="carousel">
  <input type="radio" name="slides" id="s1" checked>
  <input type="radio" name="slides" id="s2">
  <input type="radio" name="slides" id="s3">
  <input type="radio" name="slides" id="s4">

  <div class="slides">
    <figure class="slide slide1">
      <img src="https://mig-sketch.github.io/lavezzi-mdef/images/imagine1.png">
    </figure>

    <figure class="slide slide2">
      <img src="https://mig-sketch.github.io/lavezzi-mdef/images/imagine2.png">
    </figure>

    <figure class="slide slide3">
      <img src="https://mig-sketch.github.io/lavezzi-mdef/images/imagine3.png">
    </figure>

    <figure class="slide slide4">
      <img src="https://mig-sketch.github.io/lavezzi-mdef/images/imagine4.png">
    </figure>
  </div>

  <div class="nav nav1">
    <label class="btn prev" for="s4">❮</label>
    <label class="btn next" for="s2">❯</label>
  </div>
  <div class="nav nav2">
    <label class="btn prev" for="s1">❮</label>
    <label class="btn next" for="s3">❯</label>
  </div>
  <div class="nav nav3">
    <label class="btn prev" for="s2">❮</label>
    <label class="btn next" for="s4">❯</label>
  </div>
  <div class="nav nav4">
    <label class="btn prev" for="s3">❮</label>
    <label class="btn next" for="s1">❯</label>
  </div>

  <div class="counter">
    <span class="c1">1 / 4</span>
    <span class="c2">2 / 4</span>
    <span class="c3">3 / 4</span>
    <span class="c4">4 / 4</span>
  </div>
</div>


<!-- testo sotto carousel -->
<div class="text-block">
  In the draft, the imagery is an explicit reference to music and nightlife,
  but through elements of movement it aims to convey energy.
</div>


<hr class="separator">


<!-- immagine finale -->
<h2 class="snapshot-title">SNAPSHOT FOR IVAN</h2>

<div class="snapshot">
  <img src="https://mig-sketch.github.io/lavezzi-mdef/images/snapshot_ivan.jpg">
</div>



<style>
.carousel{
  max-width:1100px;
  margin:30px auto 20px auto;
  position:relative;
}

.carousel input{ position:absolute; left:-9999px; }

.slide{ display:none; margin:0; }
.slide img{
  width:100%;
  border-radius:12px;
}

#s1:checked ~ .slides .slide1{ display:block; }
#s2:checked ~ .slides .slide2{ display:block; }
#s3:checked ~ .slides .slide3{ display:block; }
#s4:checked ~ .slides .slide4{ display:block; }

.nav{ display:none; }
#s1:checked ~ .nav1{ display:block; }
#s2:checked ~ .nav2{ display:block; }
#s3:checked ~ .nav3{ display:block; }
#s4:checked ~ .nav4{ display:block; }

.btn{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  padding:14px 18px;
  border-radius:999px;
  background:rgba(0,0,0,0.6);
  color:white;
  font-size:20px;
  cursor:pointer;
}
.prev{ left:10px; }
.next{ right:10px; }

.counter{
  text-align:center;
  margin-top:10px;
  font-size:13px;
  opacity:0.7;
}
.counter span{ display:none; }
#s1:checked ~ .counter .c1{ display:inline; }
#s2:checked ~ .counter .c2{ display:inline; }
#s3:checked ~ .counter .c3{ display:inline; }
#s4:checked ~ .counter .c4{ display:inline; }


.text-block{
  max-width:1100px;
  margin:0 auto 30px auto;
  line-height:1.6;
  font-size:15px;
}

.separator{
  max-width:1100px;
  margin:30px auto;
  opacity:0.3;
}

.snapshot-title{
  max-width:1100px;
  margin:0 auto 15px auto;
  font-size:18px;
  letter-spacing:0.08em;
}

.snapshot{
  max-width:1100px;
  margin:0 auto 60px auto;
}
.snapshot img{
  width:100%;
  border-radius:12px;
}
</style>
