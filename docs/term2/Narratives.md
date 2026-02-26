<h1 style="margin-bottom:16px;">PICTORIAL</h1>

<div class="carousel">

  <!-- radio controls -->
  <input type="radio" name="slides" id="s1" checked>
  <input type="radio" name="slides" id="s2">
  <input type="radio" name="slides" id="s3">
  <input type="radio" name="slides" id="s4">

  <!-- slides -->
  <div class="slides">
    <figure class="slide slide1">
      <img src="Screenshot%202026-02-25%20191022.png" alt="Pictorial 1">
    </figure>

    <figure class="slide slide2">
      <img src="Screenshot%202026-02-25%20191309.png" alt="Pictorial 2">
    </figure>

    <figure class="slide slide3">
      <img src="Screenshot%202026-02-25%20191322.png" alt="Pictorial 3">
    </figure>

    <figure class="slide slide4">
      <img src="Screenshot%202026-02-25%20191333.png" alt="Pictorial 4">
    </figure>
  </div>

  <!-- arrows -->
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

  <!-- counter -->
  <div class="counter">
    <span class="c1">1 / 4</span>
    <span class="c2">2 / 4</span>
    <span class="c3">3 / 4</span>
    <span class="c4">4 / 4</span>
  </div>
</div>

<style>
/* container */
.carousel{
  max-width: 1100px;
  margin: 24px auto 40px auto;
  position: relative;
}

/* hide radios */
.carousel input{ position:absolute; left:-9999px; }

/* slides */
.slides{
  position: relative;
  background: transparent;
  border-radius: 14px;
  overflow: hidden;
}

.slide{
  display:none;
  margin:0;
}

.slide img{
  width:100%;
  height:auto;
  display:block;
  border-radius:14px;
}

/* show correct slide */
#s1:checked ~ .slides .slide1{ display:block; }
#s2:checked ~ .slides .slide2{ display:block; }
#s3:checked ~ .slides .slide3{ display:block; }
#s4:checked ~ .slides .slide4{ display:block; }

/* navigation */
.nav{ display:none; }
#s1:checked ~ .nav1{ display:block; }
#s2:checked ~ .nav2{ display:block; }
#s3:checked ~ .nav3{ display:block; }
#s4:checked ~ .nav4{ display:block; }

.btn{
  cursor:pointer;
  position:absolute;
  top:50%;
  transform: translateY(-50%);
  padding:14px 16px;
  border-radius:999px;
  background: rgba(0,0,0,0.55);
  color:#fff;
  font-size:20px;
  user-select:none;
}

.btn:hover{ background: rgba(0,0,0,0.8); }

.prev{ left:14px; }
.next{ right:14px; }

/* counter bottom */
.counter{
  margin-top:10px;
  font-size:13px;
  opacity:0.75;
  text-align:center;
  font-family: Arial, sans-serif;
}

.counter span{ display:none; }
#s1:checked ~ .counter .c1{ display:inline; }
#s2:checked ~ .counter .c2{ display:inline; }
#s3:checked ~ .counter .c3{ display:inline; }
#s4:checked ~ .counter .c4{ display:inline; }
</style>
