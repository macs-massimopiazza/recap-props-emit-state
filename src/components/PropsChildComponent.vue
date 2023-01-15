<script>
  export default {
    name: "PropsChildComponent",
    // 2. DICHIARO I PROPS PASSATI A QUESTO COMPONENTE DAL PADRE (in questo caso "text")
    // OPZIONE 1
    // props: ["text"],
    // OPZIONE 2
    props: {
      text: String
    } 
  }
</script>

<template>
  <div class="props_child">
    <!-- 3. UTILIZZO IL PROP NEL TEMPLATE -->
    <h1>{{ text }}</h1>
  </div>
</template>

<style lang="scss" scoped>
  .props_child {
    background-color: lightgreen;
    padding: 1rem 0;
  }
</style>
