<template>
  <div>
    <div class="cursor"></div>

    <div class="worksection">
      <router-link to="/Locaterra">
    <h1 class="loca" >LOCATERRA</h1>
    <div id="del1" class="delayed-section" data-scrub="0.4">
      <div class="innerContainer">
        <img width="575" src="../assets/img/cartevisiteLoca.png" alt="Image carte de viste LocaTerra">
      </div>
    </div>
    <div id="del2" class="delayed-section" data-scrub="0.2">
      <div class="innerContainer">
        <img width="575" src="../assets/img/pancarte.png" alt="Photo pancarte écologique">
      </div>
    </div>
    <div id="del3" class="delayed-section" data-scrub="0.6">
      <div class="innerContainer">
        <img width="575" src="../assets/img/loca.png" alt="Photo PC LocaTerra">
      </div>
    </div>
      </router-link>
  </div>

    <div class="worksection">
      <router-link to="/Spot2pot">
        <h1 class="s2p" >SPOT2POT</h1>
        <div id="del4" class="delayed-section" data-scrub="0.4">
          <div class="innerContainer">
            <img width="575" src="../assets/img/skater.png" alt="Photo skater">
          </div>
        </div>
        <div id="del5" class="delayed-section" data-scrub="0.2">
          <div class="innerContainer">
            <img width="575" src="../assets/img/skater2.png" alt="Photo skater">
          </div>
        </div>
        <div id="del6" class="delayed-section" data-scrub="0.6">
          <div class="innerContainer">
            <img width="575" src="../assets/img/Spot2Pot.png" alt="Spot2Pot">
          </div>
        </div>
      </router-link>
  </div>

    <div class="worksection">
      <router-link to="/Indiglu">
        <h1 class="indiglu">INDIGLU</h1>
        <div id="del7" class="delayed-section" data-scrub="0.4">
          <div class="innerContainer">
            <img width="575" src="../assets/img/ImacIndi.png" alt="Indiglu sur mac">
          </div>
        </div>
        <div id="del8" class="delayed-section" data-scrub="0.2">
          <div class="innerContainer">
            <img width="575" src="../assets/img/cartevisIndiglu.png" alt="Carte de visite Indiglu">
          </div>
        </div>
        <div id="del9" class="delayed-section" data-scrub="0.6">
          <div class="innerContainer">
            <img width="575" src="../assets/img/citation.png" alt="Citation Hippocrate">
          </div>
        </div>
      </router-link>
    </div>

    <div onclick="window.location.href='http://moodymondays.malsorhamiti.fr'" class="worksection">
    <h1 class="classe">MOODY MONDAYS</h1>
    <div id="del10" class="delayed-section" data-scrub="0.4">
      <div class="innerContainer">
        <img width="575" src="../assets/img/dessinetontpAI.png" alt="Screen Illustrator">
      </div>
    </div>
    <div id="del11" class="delayed-section" data-scrub="0.2">
      <div class="innerContainer">
        <img width="575" src="../assets/img/svg.png" alt="SVG">
      </div>
    </div>
    <div id="del12" class="delayed-section" data-scrub="0.6">
      <div class="innerContainer">
        <img width="575" src="../assets/img/dessinetontp.png" alt="Illustration">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Travaux",

  mounted() {

    const delSections = document.querySelectorAll(".delayed-section");

    delSections.forEach(section => {
      const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
        y: "30vh",
        ease: "none"
      });

      const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-30vh",
        ease: "none",
        paused: true
      });

      const scrub = gsap.to(imageAnim, {
        progress: 1,
        paused: true,
        ease: "power3",
        duration: parseFloat(section.dataset.scrub) || 0.1,
        overwrite: true
      });

      ScrollTrigger.create({
        animation: containerAnim,
        scrub: true,
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: self => {
          scrub.vars.progress = self.progress;
          scrub.invalidate().restart();
        }
      });
    });

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

  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Signika+Negative:300,400&display=swap');
body {
  height: 400vh
}

.delayed-section {
  position: absolute;
  width: 30vw;
  height: 38.87vw;
}
.delayed-section .inner-container {
  will-change: transform;
}
.delayed-section img {
  max-width: 100%;
  will-change: transform;
}

#del1 {
  top: 21vh;
  left: 10vw;
}
#del2 {
  top: 30vh;
  left: 60vw;
}
#del3 {
  top: 40vh;
  left: 35vw;
}
#del4 {
  top: 181vh;
  left: 10vw;
}
#del5 {
  top: 190vh;
  left: 60vw;
}
#del6 {
  top: 200vh;
  left: 35vw;
}

#del7 {
  top: 341vh;
  left: 10vw;
}
#del8 {
  top: 350vh;
  left: 60vw;
}
#del9 {
  top: 360vh;
  left: 35vw;
}

#del10 {
  top: 501vh;
  left: 10vw;
}
#del11 {
  top: 510vh;
  left: 60vw;
}
#del12 {
  top: 520vh;
  left: 35vw;
}
@media all and (max-width: 600px) {
  #del4 {
    top: 81vh;
    left: 10vw;
  }
  #del5 {
    top: 90vh;
    left: 60vw;
  }
  #del6 {
    top: 100vh;
    left: 35vw;
  }
  #del7 {
    top: 141vh;
    left: 10vw;
  }
  #del8 {
    top: 150vh;
    left: 60vw;
  }
  #del9 {
    top: 160vh;
    left: 35vw;
  }

  #del10 {
    top: 201vh;
    left: 10vw;
  }
  #del11 {
    top: 210vh;
    left: 60vw;
  }
  #del12 {
    top: 220vh;
    left: 35vw;
  }
  .s2p{
    top: 81vh;
  }

  .indiglu {
    top: 141vh;
  }

  .classe {
    top: 201vh;
  }

  .loca:hover, .s2p:hover, .indiglu:hover, .classe:hover {
    -webkit-text-stroke: 1px #F2A359;
  }
}
</style>
