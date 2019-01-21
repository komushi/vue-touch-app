import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import Touch from 'vuetify/es5/directives/touch'

Vue.use(Vuetify, {
  iconfont: 'md',
  directives: {
    Touch
  }
})
