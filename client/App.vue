<template>
  <div>
    <div id="test">{{test}}</div>
    <Test></Test>
  </div>
</template>

<script>
import Test from './todo/test.jsx'
export default {
  name: 'App',
  data () {
    return {
      test: 'abc'
    }
  },
  components: {
    Test
  }
}
</script>

<style scoped>
  #test {
    color: blue;
  }
</style>
