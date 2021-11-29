<template>
  <div v-for="job in jobs" :key="job">
      <Job :job="job"/>
  </div>

</template>

<script>
import Job from './Job.vue'

export default {
    props:['jobs'],
    components:{
        Job
    },

}
</script>

<style>

</style>