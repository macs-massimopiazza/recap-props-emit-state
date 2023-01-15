<script>
    export default {
        name: "DogCard",
        props: {
            info: Object
        }
    }
</script>

<template>
    <div class="card">
        <h3>{{ info.name }}</h3>

        <img :src="info.img">
    </div>  
</template>

<style lang="scss" scoped>
    img {
        width: 100px;
    }
</style>
