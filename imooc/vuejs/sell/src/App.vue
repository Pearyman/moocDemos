<template>
  <div id="app">
    <firstheader></firstheader>
    <div class="tab border-1px">
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
 /*@import "common/less/mixin.less"*/
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*border-onepx(rgba(7,17,27,0.1))*/
    border-bottom: 1px solid rgba(7,17,27,0.1);
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
