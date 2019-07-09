<template>
  <div>
    <headerVue></headerVue>
    <div class="nav-line"></div>
    <!--图片-->
    <div class="block">
      <el-image src="../../static/img/1.jpg"></el-image>
    </div>
    <!--Who we are-->
    <div class="index-who">
      <p class="who-title">Who we are ？</p>
      <p class="who-con">Founded in May 2019, Lightwood Limited is a start-up Internet company dedicated to providing outstanding and fun applications to users around the world. We are committed to maximizing the needs of our users, listening to the voices of our users, and hoping to create interesting applications that enrich their lives.</p>
    </div>
    <footerVue></footerVue>
  </div>
</template>

<script>
  import headerVue from './header'
  import footerVue from './footer'
  export default {
    components:{headerVue,footerVue},
    data () {
      return {

      }
    },
    methods:{


    }
  }
</script>

<style scoped>
  /*nav下面的线*/
  .nav-line {
    margin-top: 90px;
  }
  /*图片*/
  .block {
  }

  /**/
  .index-who {
    width:100%;
    text-align: center;
    padding:0 100px;
    box-sizing: border-box;
  }
  .who-title {
    font-size: 2.5rem;
    line-height: 40px;
  }
  .who-con {
    font-size: 1.3rem;
    line-height: 40px;
  }
</style>
