<template>
  <!--<div class="show-model-content" :style="{top:height+'px', left: width+'px'}">-->
  <div class="show-model-content">
    <div class="show-model-title" >
      <label>第{{index}}监测点</label>
      <label type="close" class="close-btn" @click="closeModel">关闭</label>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'NewAreaInfo',
    props: {
      visible: Boolean,
      width: Number,
      height: Number,
      index: Number
    },
    data () {
      return {
        panelWidth: String,
        panelHeight: String,
      }
    },
    mounted () {
      this.panelWidth = this.width + 'px'
      console.log(this.panelWidth)
      this.panelHeight = this.height + 'px'
    },
    methods: {
      cancel(){
        console.log("emit")
      },
      closeModel(){
          console.log("emit")
        this.$emit('handleCloseModal')
      }
    }
  }
</script>

<style>
  .show-model-content{
    padding:8px;
    width:280px;
    min-height:180px;
    position: absolute;
    z-index:8;
    top:120px;
    left:300px;
    border:1px solid #eee;
    border-radius: 5px;
    background: #fff;
    box-shadow: 2px 0px 3px #ccc,-2px 0px 3px #ccc;
    opacity: 0.6;
  }
  .show-model-title{
    font-size:16px;
    color:#000;
    width:100%;
    height:26px;
    color:#2d8cf0;
  }
  .close-btn{
    display: block;
    font-size: 12px;
    width: 26px;
    height:16px;
    float:right;
    cursor: pointer;
    color:#000;
    margin-top:3px;
  }
  .close-btn:hover{
    color:#2d8cf0;
  }
</style>
