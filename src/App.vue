<template>
  <div id="app">
    
    <list-one></list-one>
    <list-two></list-two>

  </div>
</template>

<script>
  
  import ListOne from './components/ListOne.vue'
  import ListTwo from './components/ListTwo.vue'

  export default {
    
    components: {
      'list-one': ListOne,
      'list-two': ListTwo
    }, 

    name: 'app',

    data () {
      return {
        
      }
    }    
  }

</script>

<style scoped>
  body {
    font-family: Ubuntu;
    color: #555;
  }
</style>