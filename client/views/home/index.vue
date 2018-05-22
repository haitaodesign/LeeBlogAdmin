<template>
  <div>
    <lee-header></lee-header>
    <LeeSideBar></LeeSideBar>
    <lee-main></lee-main>
    <lee-footer></lee-footer>
  </div>
</template>

<script>
import LeeHeader from '../components/header/index'
import LeeSideBar from '../components/sidebar/index'
import LeeMain from '../components/main/index'
import LeeFooter from '../components/footer/index'
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
