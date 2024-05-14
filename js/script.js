
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
            //creo variabile di appoggio per immagine e thum attiva e gli do valore 0 all'inizio
            imageActive: 0,
            thumbActive: 0,
            timer: 0
        }
    },
    methods: {
        //funzione per immagine attiva che se è uguale all?indice aggiunge la classe block senno rimane none
        imgActive(index) {
            return (index == this.imageActive) ? "img-block" : "none";
        },
        //funzione che fa la stessa cosa ma per le thumb ma qui gioco di opacity perchè sono sempre visibili
        thbActive(index) {
            return (index == this.thumbActive) ? "thumb active" : "thumb";
        },
        //funzione per bottone next e se l'immagine è l'ultima passa di nuovo alla prima senza bloccarsi
        next() {
            //aggiungo clear per il timer che ogni volta che clicco sul bottone opposto mi resetta il timer che c'era impostato su quel bottone autoplay
            clearInterval(this.timer)
            //funzione per autoplay che al click sul bottone avanti ogni secondo cambia slide e quando clicco sull'altro bottone il timer viene azzerato
            this.timer = setInterval(() => {
                this.imageActive++
                this.thumbActive++
                if (this.imageActive < this.slides.length && this.thumbActive < this.slides.length) {
                } else {
                    this.imageActive = 0
                    this.thumbActive = 0
                }
            }, 1000);
        },
        //stessa funzione ma per il bottone che torna indietro e quindi se e la prima va all'ultima immagine
        prev() {
            //aggiungo clear per il timer che ogni volta che clicco sul bottone opposto mi resetta il timer che c'era impostato su quel bottone con autoplay
            clearInterval(this.timer)
            //funzione per autoplay che al click sul bottone avanti ogni secondo cambia slide e quando clicco sull'altro bottone il timer viene azzerato
            this.timer = setInterval(() => {
                this.imageActive--
                this.thumbActive--
                if (this.imageActive < 0 && this.thumbActive < 0) {
                    this.imageActive = this.slides.length - 1
                    this.thumbActive = this.slides.length - 1
                }
            }, 1000);
        },
        stop() {
            clearInterval(this.timer)
        },
        noStopNext() {
            this.next()
        },
    },
}).mount('#app')