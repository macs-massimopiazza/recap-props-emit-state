<script>
    import EmitChildComponent from './EmitChildComponent.vue'

    export default {
        name: "EmitExample",
        components: {
            EmitChildComponent
        },
        data() {
            return {
                showImg: false,
            }
        },
        methods: {
            toggleShowImg(stringa) {
                console.log(stringa);
                this.showImg = !this.showImg;
            }
        }
    }
</script>

<template>
    <div class="emit_example">
        <h1>Emit:</h1>
        <EmitChildComponent @dogBtnClicked="toggleShowImg"/>
        <img v-if="showImg" src="https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/new-pet-parent/images/golden-retriever-puppy-running-outside.jpg" alt="golden retriver puppy running on grass">
    </div>
</template>

<style lang="scss" scoped>
    .emit_example {
        border: 5px solid #f7ef00;
        padding: 1rem;

        h1 {
            color: #f7ef00;
        }

        img {
            width: 400px;
        }
    }

</style>
