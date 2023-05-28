import { gsap } from "gsap";

import { trackDirection } from "../helpers/gsap-helpers";

export class artistName {
    constructor(el) {
        this.el = el;
        this.bounds = this.el.getBoundingClientRect();
        this.words = this.el.querySelectorAll('.name-word');
        this.windowBounds = document.documentElement.getBoundingClientRect();
    }

    setLoadingAnimations(callback) {
        let firstWordX = (this.words[1].getBoundingClientRect().width - this.words[0].getBoundingClientRect().width) / 2;

        this.loadingAnimations = gsap.timeline({
            onComplete: () => {
                callback();
                this.setExpandAnimations();
            }
        });
        this.loadingAnimations.addLabel('start')
            // Setting Artist Name Element to Center of the Viewport
            .set(this.el, {
                x: (this.windowBounds.width / 2) - (this.bounds.width / 2) - 50,
                y: (this.windowBounds.height / 2) - (this.bounds.height / 2) - 50,
            })
            // Setting the first word to imitate center align
            .set(this.words[0], {
                x: firstWordX
            })

            .to(this.el.querySelectorAll('.animation-wrapper'), {
                yPercent: -97,
                duration: 6,
                stagger: {
                    amount: 0.2,
                    from: "center",
                    ease: "power1.inOut"
                }
            })
            
            .addLabel('move-up')
            .to(this.el, {
                x: 0,
                y: 0,
            })
            .to(this.words[0], {
                x: 0,
            }, 'move-up').progress(1)
    }

    setExpandAnimations() {
        const [word1, word2] = this.words;

        let word2Y = word1.getBoundingClientRect().top - word2.getBoundingClientRect().top;
        let word2X = word1.getBoundingClientRect().width + 20;

        this.expandAnimations = gsap.timeline({ paused: true })
        .to(this.el, {
            scale: 0.5, 
            duration: 0.8,
        }) 
        .to(this.words[1], {
            y: word2Y,
            x: word2X,
            duration: 0.8,
            ease: "power1.out"
        }, "<")
    }

    openGallery() {
        this.expandAnimations.play();
    }

    closeGallery() {
        this.expandAnimations.reverse();
    }

    init(callback) {
        this.setLoadingAnimations(callback);
        this.setExpandAnimations();
    }
}