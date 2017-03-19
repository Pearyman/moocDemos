<template>
  <div id="app">
    <firstheader></firstheader>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      content区块
    </div>
  </div>
</template>

<script>
import firstheader from './components/header/header'

export default {
  components: { firstheader }
}
</script>

<style>
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .tab-item{
    flex: 1;
    text-align: center;
    
  }
</style>
