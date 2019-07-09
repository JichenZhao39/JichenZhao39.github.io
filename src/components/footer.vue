<template>
  <div>
    <!--<div class="line"></div>-->
    <!--Contact Us-->
    <div class="index-contact">
      <p class="contact-title">Contact Us</p>
      <div class="contact-con">
        <p>Address：Ocean Centre, Harbour City, 5 Canton Road, Tsim Sha Tsui, Kowloon,Hong Kong</p>
        <p>Mail：lightwoodlimited@163.com</p>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods:{
      handleClick (command){
        switch(command){
          case 'a':
            //todo 跳转第一个协议
            // window.open(window.location.origin + 'web-guanwang/protocol1.html')
            // window.location.go= window.location.origin + 'web-guanwang/protocol1.html'
            break;
          case 'b':
            //todo 跳转第二个协议
            break;
        }
      },
      clickGo(){
        //todo 跳转第一个协议
      },

    }
  }
</script>

<style scoped>
  .line {
    margin-bottom:230px;
  }
  /**/
  .index-contact {
    width:100%;
    text-align: center;
    color:#fff;
    font-weight:300;
    padding: 30px 100px;
    box-sizing: border-box;
    background: #041167;
    /*position: fixed;*/
    /*bottom:0;*/
    /*left:0;*/
    /*right:0;*/
    /*z-index: 99;*/

  }
  .contact-title {
    font-size: 1.8rem;
    line-height: 30px;
  }
  .contact-con {
    font-size: 1rem;
    line-height: 20px;
  }
</style>
