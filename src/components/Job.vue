<template>
    <div class="card"><!--start card-->
        <div class="img">
            <img :src="job.logo" alt="" id="imagen">
            <img src="../images/manage.svg" alt="">
        </div>
        <div class="title">
           <h3>{{job.company}}</h3> <span></span> <span></span>
        </div>
        <pre>
            {{job}}
        </pre>
    </div><!--end card-->

</template>

<script>
export default {
    props:['job'],
}
</script>

<style>
#imagen {
    width:100px;
    height: 200px;
    background: red;
}
</style>