<template>
  <v-app dark>
    <common-nav color="primary" dark></common-nav>
    <top-view></top-view>
    <v-content class="pt-2">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <common-footer></common-footer>
  </v-app>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
import TopView from '~/components/TopView.vue'
export default {
  components:{
    'common-nav': Nav,
    'common-footer': Footer,
    'top-view': TopView,

  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
