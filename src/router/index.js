import Vue from 'vue'
import Router from 'vue-router'

import Accueil            from '@/components/Accueil'

import Travaux            from '@/components/Travaux'

import About              from '@/components/About'

import Spot2pot           from '@/components/Spot2pot'

import Indiglu            from '@/components/Indiglu'

import Locaterra          from '@/components/Locaterra'


Vue.use(Router)

export default new Router({
  routes: [

    { path: '/',                      name: 'Accueil',            component: Accueil},
    { path: '/travaux',               name: 'Travaux',            component: Travaux},
    { path: '/about',                 name: 'About',              component: About},
    { path: '/spot2pot',              name: 'Spot2pot',           component: Spot2pot},
    { path: '/indiglu',               name: 'Indiglu',            component: Indiglu},
    { path: '/locaterra',             name: 'Locaterra',          component: Locaterra},
  ]
})

