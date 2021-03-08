<template>
<div>
  <div class="cursor"></div>
  <div>
    <h1 class="title">INDIGLU</h1>
    <div id="del3" class="delayed-section" data-scrub="0.6">
      <div class="innerContainer">
        <img width="575" src="../assets/img/ImacIndi.png" alt="Indiglu sur mac">
      </div>
    </div>
  </div>


  <div class="section">

    <h2 style="margin-bottom: 5%">Qu'est-ce que c'est ?</h2>

    <p>
      Indiglu est une association qui aide les personnes atteintes du diabète à lutter contre la maladie. Le site web d’Indiglu propose aux diabétiques plusieurs fonctionnalités pour les aider: Grâce à une vaste base de données alimentaire, le site propose la création d’un repas avec diverses caractéristiques comme les glucides, les protéines ou les lipides. Mais sa fonctionnalité principale est de calculer le taux d’insuline nécessaire aux diabétiques après chaque repas créé sur le site en se basant sur son indice glucidique.
      Le site peut aussi servir aux personnes souhaitant manger sainement ou suivre un régime particulier de part la possibilité d’avoir accès aux caractéristiques du repas.
    </p>

    <a style="font-family: 'Cinzel', serif; font-size: 20px; font-weight: bold; color: #f2a359;text-decoration: underline white; margin-bottom: 5%" href="https://indiglu.com/">VOIR LE SITE
      <img style="width: 4%" src="../assets/img/arrow.png" alt="icône flèche">
    </a>

    <h2 style="margin-top: 5%; margin-bottom: 5%">La charte graphique</h2>
    <br>
    <p>Indiglu souhaite avoir plus de visibilité aussi bien auprès des personnes atteintes de diabète que du corps médical, mais aussi de trouver de nouveaux partenariats (collectivités locales et territoriales, laboratoires pharmaceutiques, fondations caritatives…). Il a donc été jugé nécessaire de réaliser une nouvelle identité visuelle de l’association et du site web ainsi que d’établir une stratégie de communication efficace.
      J'ai donc réalisé une charte graphique pour répondre à ce besoin.
    </p>
    <a style="font-family: 'Cinzel', serif; font-size: 20px; font-weight: bold; color: #f2a359;text-decoration: underline white; margin-bottom: 5%" href="https://drive.google.com/file/d/1PqHKTr0a8bDPVD0jvRy5znqoYfnaWbLl/view?usp=sharing ">VOIR LA CHARTE GRAPHIQUE
      <img style="width: 4%" src="../assets/img/arrow.png" alt="icône flèche">
    </a>

    <div class="suivant">
      <p>PROJET SUIVANT</p>
      <p onclick="window.location.href='http://moodymondays.malsorhamiti.fr'" class="projetsuiv">MOODY MONDAYS</p>
    </div>
  </div>
</div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
name: "Indiglu",

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
