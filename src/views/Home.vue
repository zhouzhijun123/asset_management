<template>
  <div id='home'>
      <top />
    <index />
  </div>
</template>

<script>
import index from '../components/Index';
import top from '../components/Top'
export default {    
    name: 'home',
    components: {
    top,
    index
  }

};
</script>

<style>

</style>