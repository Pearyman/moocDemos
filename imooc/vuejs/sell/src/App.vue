<template>
  <div id="app">
    <first-header></first-header>
    <div class="tab">
      tab区块
    </div>
    <div class="content">
      content区块
    </div>
  </div>
</template>

<script>
import firstheader from './components/header/header'
export default {
  components: {
    'first-header': firstheader
  }
}
</script>

<style>

</style>
