
const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            imageActive : 0,
            thumbActive : 0
        }
    },
    methods: {
        imgActive(index) {
          return (index == this.imageActive) ? "img-block" : "none";
        },
        thbActive(index) {
            return (index == this.thumbActive) ? "thumb active" : "thumb";
        },
        next() {
            if(this.imageActive < 4 && this.thumbActive < 4) {
                this.imageActive++
                this.thumbActive++
            }else{
                this.imageActive = 0
                this.thumbActive = 0
            }
        },
        prev() {
            this.imageActive--
            this.thumbActive--
            if(this.imageActive < 0 && this.thumbActive < 0) {
                this.imageActive = 4
                this.thumbActive = 4
            }
        }
    },
}).mount('#app')