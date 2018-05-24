<template>
  <div>
    <lee-header></lee-header>
    <lee-side-bar></lee-side-bar>
    <lee-bread></lee-bread>
    <lee-main></lee-main>
    <!-- <lee-footer></lee-footer> -->
  </div>
</template>

<script>
import LeeHeader from '@views/header/index'
import LeeSideBar from '@views/sidebar/index'
import LeeMain from '@views/main/index'
import LeeFooter from '@views/footer/index'
import LeeBread from '@views/bread/index'
export default {
  name: 'home',
  components: {
    LeeHeader,
    LeeSideBar,
    LeeMain,
    LeeFooter,
    LeeBread
  }
}
</script>

<style scoped>

</style>
