<script>
    import PropsChildComponent from './PropsChildComponent.vue'
    import DogCard from './DogCard.vue';
    import { store } from '../store.js';

    export default {
        name: "PropsExample",
        components: {
            PropsChildComponent,
            DogCard
        },
        data() {
            return {
                store,
                message: "Che figata i props"
            }
        }
    }
</script>

<template>
    <div class="props_example">
        <h1>Props:</h1>
        <DogCard v-for="(dog, index) in store.dogBreeds" :key="index" :info="dog"/>

        <!-- 1. PASSO PROP CHIAMATO "TEXT" AL COMPONENTE FIGLIO CHE CONTERRA COME VALORE LA STRINGA "Che figata i props"-->
        <!-- <PropsChildComponent text="Che figata i props"/> -->

        <!-- 1. PASSO PROP CHIAMATO "TEXT" AL COMPONENTE FIGLIO CHE CONTERRA IL VALORE DELLA PROPRIETA' "MESSAGE"-->
        <!-- <PropsChildComponent :text="message"/> -->

    </div>
</template>

<style lang="scss" scoped>
    .props_example {
        border: 5px solid lightgreen;
        padding: 1rem;

        h1 {
            color: lightgreen;
        }

        img {
            width: 100px;
        }
    }

</style>
