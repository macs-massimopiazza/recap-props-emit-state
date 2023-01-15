<script>
  import PropsExample from './components/PropsExample.vue';
  import EmitExample from './components/EmitExample.vue';

  export default {
    components: {
      PropsExample,
      EmitExample
    },
    data(){
      return {
        message: "Viva props e viva Vue",
      }
    }
  }
</script>

<template>
  <PropsExample />
  <EmitExample />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  text-align: center;
  min-height: 100vh;
}

img.dog {
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
}

</style>
