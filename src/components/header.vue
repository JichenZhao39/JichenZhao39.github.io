<template>
  <div>

    <div class="nav-pos">
      <!--nav-->
      <el-row :gutter="20">
        <el-col :span="16"><div class="grid-content bg-purple bg-size">Lightwood Limited</div></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple" @click.stop="clickGo">
            <el-dropdown @command="handleClick" >
              <el-button >
                Protocol
                <!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">Privacy Policy</el-dropdown-item>
                <el-dropdown-item command="b">Terms of Service</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
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
            this.$router.push('protocol1')
            break;
          case 'b':
            //todo 跳转第二个协议
            this.$router.push('protocol2')
            break;
        }
      },
      clickGo(){
        //todo 跳转第一个协议
        this.$router.push('protocol1')
      },

  }
  }
</script>

<style scoped>

  /*nav*/
  .nav-pos {
    position: fixed;
    z-index: 99;
    width:100%;
    top:0;
    left:0;
    right:0;
  }
  .el-row {
    padding: 20px 0;
    background: #041167;
    color:#fff;
  }
  .el-row :last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    /*background: #d3dce6;*/
    text-align: center;
    line-height: 50px;
  }
  .bg-size {
    font-size: 1.5rem;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    /*padding: 10px 0;*/
    background-color: #f9fafc;
  }

  /*下拉菜单*/
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
