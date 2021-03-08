<template>
  <div id="app">

    <div class="container-responsive">
      <div class="contenu">
        <nav class="navbar navbar-expand-lg navbar-danger menu">
          <a href="index.html">
            <img src="./assets/img/logoHM.png" style="height: 60px;" alt="Logo HM">
          </a>

          <button class="navbar-toggler"
                  type="button" data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="true"
                  aria-label="Toggle navigation">
                    <span style="color: black" class="navbar-toggler-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             version="1.1"
                             width="24"
                             height="24"
                             viewBox="0 0 24 24"
                             fill="white">
                            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
                        </svg>
                    </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item px-3 text-right">
                <router-link style="text-decoration:none;" class="liennav" to="/">
                  ACCUEIL
                </router-link>
              </li>
              <li class="nav-item px-3 text-right">
                <router-link style="text-decoration:none;" class="liennav" to="/Travaux">
                  TRAVAUX
                </router-link>
              </li>
              <li class="nav-item px-3 text-right ">
                <router-link style="text-decoration:none;" class="liennav" to="/About">
                  À PROPOS
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

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

  }

}




</script>


<style>
#app{
  cursor: url("/src/assets/img/cursor.png"), auto;
}



</style>
