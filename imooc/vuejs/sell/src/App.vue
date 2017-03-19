<template>
  <div id="app">
    <firstheader></firstheader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
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
  .tab-item >a {
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  .tab-item >a.router-link-active{
    color: rgb(240,20,20);
  }
</style>
