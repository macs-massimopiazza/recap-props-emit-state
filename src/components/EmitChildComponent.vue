<script>
  export default {
    name: "EmitChildComponent"
  }
</script>

<template>
  <div class="emit_child">
    <button class="btn" @click="$emit('dogBtnClicked')">Mostra Cane</button>
  </div>
</template>

<style lang="scss" scoped>
  .btn {
    border: none;
    border-radius: 10px;
    background-color: #3bcafa;
    color: #fff;
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .emit_child {
    background-color: #fffb91;
    padding: 1rem 0;
  }
</style>
