<template>
  <div>
    <lee-header></lee-header>
    <LeeSideBar></LeeSideBar>
    <lee-main></lee-main>
    <!-- <lee-footer></lee-footer> -->
  </div>
</template>

<script>
import LeeHeader from '@views/header/index'
import LeeSideBar from '@views/sidebar/index'
import LeeMain from '@views/main/index'
import LeeFooter from '@views/footer/index'
export default {
  name: 'home',
  components: {
    LeeHeader,
    LeeSideBar,
    LeeMain,
    LeeFooter
  }
}
</script>

<style scoped>

</style>
