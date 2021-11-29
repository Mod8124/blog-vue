<template>
<Header/>
<div v-if="error">{{error}}</div>
 <Jobs :jobs="jobs"/>
</template>

<script>
import Jobs from './components/Jobs.vue'
import Header from './components/Header.vue'
import get from './composable/job'


export default {
  name: 'App',
  components: {
    Jobs,
    Header,
  },
  setup() {
    const {error, load, jobs} = get();

    load();

    return {error, load, jobs}


  }
}
</script>

<style>
* {
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}

#app {
width: 100%;
}


</style>
