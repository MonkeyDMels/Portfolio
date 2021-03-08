<template>
  <div>
    <div class="cursor"></div>
    <div id="container" style="width: 100%; height: 100%">
      <div class="box" id="box1">
        <img src="../assets/img/MalsIllu.png" style="width: 100%;" alt="Illustration de Malsor Hamiti">
        <span >DRAG ME</span>
      </div>
    </div>
    <img class="bounce-in-top" src="../assets/img/codeIllu.png" alt="Illustration code">
    <img class="bounce-in-top2" src="../assets/img/pcIllu.png" alt="Illustration PC">
    <div class="quisuisje">
      <h2 style="text-align: center">Bonjour</h2>
      <h1 style="text-align: center">Je suis Malsor Hamiti</h1>
      <div style="margin-left:auto;margin-right: auto; display: block; width: fit-content;">
        <h4 class="wordCarousel">
          <div>
            <!--        Use classes 2,3, or 4 to match the number of words -->
            <ul class="flip4">
              <li>un web designer</li>
              <li>un développeur</li>
              <li>un UI / UX designer</li>
            </ul>
          </div>
        </h4>
      </div>
    </div>
    <div class="scale">
      <img class="bounce-in-top3" src="../assets/img/colorIllu.png" alt="Illustration diagramme couleurs">
    </div>
    <a class="cv fixed-bottom" href="https://drive.google.com/file/d/1vccvUvlm6-bfqEZ0bZNJXFr7N7qnKh-y/view?usp=sharing" style=" margin-bottom: clamp(100px, 10%, 250px); margin-left: auto; margin-right: auto; width: fit-content; display: block;">
      <button>Voir mon CV</button>
    </a>

    <img class="bounce-in-top4" src="../assets/img/UIUIXillu.png" alt="Illustration UX">

    <span class="fixed-bottom" style="font-family: 'Cinzel', serif; color: #F2A359; position: fixed; font-weight: bold; margin: 2%">
    - AVAIBABLE FOR WORK -
</span>
  </div>

</template>

<script>

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, ScrollTrigger, InertiaPlugin);

export default {
  name: 'Accueil',
  data () {
    return {
      msg: 'Bienvenue sur mon Portfolio!'
    }
  },

  mounted() {

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500)
    })

    gsap.registerPlugin(InertiaPlugin);

    Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});

    var $snap = $("#snap"),
      $liveSnap = $("#liveSnap"),
      $container = $("#container"),
      gridWidth = $("body").width() / 5,
      gridHeight = 100,
      gridRows = 6,
      gridColumns = 5,
      i, x, y;

    //loop through and create the grid (a div for each cell). Feel free to tweak the variables above
    for (i = 0; i < gridRows * gridColumns; i++) {
      y = Math.floor(i / gridColumns) * gridHeight;
      x = (i * gridWidth) % (gridColumns * gridWidth);
      $("<div/>").css({position:"absolute",width:gridWidth-1, height:gridHeight-1, top:y, left:x}).prependTo($container);
    }

    //set the container's size to match the grid, and ensure that the box widths/heights reflect the variables above
    gsap.set($container, {height: gridRows * gridHeight + 1, width: gridColumns * gridWidth + 1});
    gsap.set(".box", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});
    gsap.set("#box2", {left: gridWidth * 2})

    //the update() function is what creates the Draggable according to the options selected (snapping).
    function update() {
      var snap = $snap.prop("checked"),
        liveSnap = $liveSnap.prop("checked");
      Draggable.create(".box", {
        bounds: $container,
        edgeResistance: 0.65,
        type: "x,y",
        inertia: true,
        autoScroll: true,
        liveSnap: liveSnap,
        snap:{
          x: function(endValue) {
            return (snap || liveSnap) ? Math.round(endValue / gridWidth) * gridWidth : endValue;
          },
          y: function(endValue) {
            return (snap || liveSnap) ? Math.round(endValue / gridHeight) * gridHeight : endValue;
          }
        }
      });
    }

    //when the user toggles one of the "snap" modes, make the necessary updates...
    $snap.on("change", applySnap);
    $liveSnap.on("change", applySnap);

    function applySnap() {
      if ($snap.prop("checked") || $liveSnap.prop("checked")) {
        $(".box").each(function(index, element) {
          gsap.to(element, {
            x: Math.round(gsap.getProperty(element, "x") / gridWidth) * gridWidth,
            y: Math.round(gsap.getProperty(element, "y") / gridHeight) * gridHeight,
            delay: 0.1,
            ease: "power2.inOut"
          });
        });
      }
      update();
    }

    update();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  height:fit-content;
  overflow: hidden;
  padding:0;
  position:absolute;
}

.box {
  text-align: center;
  font-weight: bold;
  font-family: 'Arvo', serif;
  line-height: 100px;
  position: absolute;
  top:0;
}

.controls {
  font-size: 18px;
  margin: 20px 0;
}
.controls ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.controls li {
  display: inline-block;
  padding: 8px 0 8px 10px;
  margin:0;
}
.controls input {
  vertical-align:middle;
  cursor: pointer;
}
.controls .controlsTitle {
  border-bottom:none;
  padding-right:10px;
}


</style>

