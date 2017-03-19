<template>
  <div id="app">
    <firstheader></firstheader>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>

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
