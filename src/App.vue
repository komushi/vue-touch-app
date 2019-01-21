<template>
  <v-app>
    <v-content>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import About from './views/About'


export default {
  name: 'App',
  components: {
    About
  },
  data () {
    return {
      //
    }
  }
}
</script>
