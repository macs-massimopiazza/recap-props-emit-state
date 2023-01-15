import { reactive } from 'vue';

export const store = reactive({
    dogBreeds: [
        {
            name: "carlino",
            img: "https://www.focus.it/images/2022/05/25/carlino_1020x680.jpg"
        },
        {
            name: "golden retriver",
            img: "https://www.goldendorado.it/themes/goldendorado/files/img/aspect_big.jpg"
        },
        {
            name: "pitbull",
            img: "https://www.annuncianimali.it/immagini/razze/pitbull/pitbull-01.jpg"
        }
    ]
})