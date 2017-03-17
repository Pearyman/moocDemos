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
  .tab-item{
    display: inline-block;
  }
</style>
