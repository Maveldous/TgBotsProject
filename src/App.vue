<template>
  <div id="app">
    <!-- <transition name="fade" mode="out-in"> -->
          <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: "App",
  components: {
    
  },
  computed: {
    ...mapGetters([
      'HEADER_NAME'
    ])
  },
  methods: {
    ...mapMutations([
      'CHANGE_LANG',
      'UPDATE_NAME'
    ])
  },
  created: function(){

  }
};
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
