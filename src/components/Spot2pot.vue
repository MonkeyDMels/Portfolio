<template>
  <div>
    <div class="cursor"></div>
    <div>
      <h1 class="title" >SPOT2POT</h1>
      <div id="del3" class="delayed-section" data-scrub="0.6">
        <div class="innerContainer">
          <img width="575" src="../assets/img/Spot2Pot.png" alt="Spot2pot">
        </div>
      </div>
    </div>


    <div class="section">

      <h2 style="margin-bottom: 5%">Qu'est-ce que c'est ?</h2>

      <p>
        Spot2Pot est un projet innovant qui consiste en la création d’une site permettant la localisation de lieux adéquats à la pratique de sports de glisse urbaine dans la région de Franche-Comté (dans un premier temps), c’est à dire le BMX, le skateboard ainsi que la trottinette.
      </p>
      <p>Au cours de ce projet, j'ai tenu le rôle de maquettiste/graphiste et ai réalisé le site promotionnel du projet</p>

      <a style="font-family: 'Cinzel', serif; font-size: 20px; font-weight: bold; color: #f2a359;text-decoration: underline white; margin-bottom: 5%" href="http://landingpageS2P.malsorhamiti.fr">VOIR LE SITE
        <img style="width: 4%" src="../assets/img/arrow.png" alt="icône flèche">
      </a>
      <img style="width: 100%; margin-top: 5%" src="../assets/img/imgS2P.png" alt="screen S2P">

      <div class="suivant">
        <p>PROJET SUIVANT</p>
        <router-link to="/Indiglu" style="text-decoration: none">
          <p class="projetsuiv">INDIGLU</p>
        </router-link>
      </div>
    </div>  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "spot2pot",

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
  }

}
</script>

<style scoped>
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

#del3 {
  top: 40vh;
  left: 35vw;
}
h2 {
  display: block;
  width: fit-content;
  color: white;
  font-family: 'Arvo', sans-serif;
  font-weight: 700;
  position: relative;
  text-decoration: none;
}

h2:after{
  content: '';
  display: block;
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  height: 15px;
  transition: 0.25s cubic-bezier(0.72,-0.01, 0.19, 0.92);
  color: #f2a359;
  background: rgba(242, 163, 89, 0.5);
}
</style>
