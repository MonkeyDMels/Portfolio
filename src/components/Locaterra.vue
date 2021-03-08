<template>
<div>
  <div class="cursor"></div>
  <div>
    <h1 class="title">LOCATERRA</h1>
    <div id="del3" class="delayed-section" data-scrub="0.6">
      <div class="innerContainer">
        <img width="575" src="../assets/img/loca.png" alt="LocaTerra">
      </div>
    </div>
  </div>


  <div class="section" style="">

    <h2 style="margin-bottom: 5%;" >L'Histoire de LocaTerra</h2>

    <p>
      LocaTerra est le fruit de questionnements autour de l’écologie de Madame Christelle Bloch, enseignante au département MMI de Montbéliard. Dans une volonté d’agir pour l’environnement, elle propose un projet aux étudiants du DUT MMI de Montbéliard comme contribution dans ce domaine.</p>

    <p>Les étudiants chargés de ce projet ont eu la liberté de choisir la direction à prendre, et après mûre réflexion il a été décidé de choisir un axe particulier : celui de l’associatif. Il a donc été convenu de mettre en avant les différentes associations écologiques, dans une démarche toutefois positive et entreprenante.</p>

    <p> LocaTerra est le projet le plus important du cursus scolaire du DUT MMI. J'ai exercé le rôle de chef de projet et d'expert communication et suis à l'orgine de la stratégie de communication.
    </p>

    <h2 style="margin-bottom: 5%; margin-top: 5%">Le plan de communication</h2>

    <a style="font-family: 'Cinzel', serif; font-size: 20px; font-weight: bold; color: #f2a359;text-decoration: underline white; margin-bottom: 5%" href="https://drive.google.com/file/d/1zOO5GScHT22XuZq_GuC2HoHaV4hayGYI/view?usp=sharing">VOIR LE PLAN DE COMMUNICATION
      <img style="width: 4%" src="../assets/img/arrow.png" alt="icône flèche">
    </a>

    <div class="suivant">
      <p>PROJET SUIVANT</p>
      <router-link to="/Spot2pot" style="text-decoration: none">
      <p class="projetsuiv">SPOT2POT</p>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import pdf from 'vue-pdf'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Locaterra",
  components: {
    pdf
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
