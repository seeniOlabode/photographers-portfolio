import { gsap } from "gsap"

export class About {
    constructor(el) {
        this.el = el;
        this.aboutSpans = this.el.querySelectorAll('.outer-wrapper .inner-wrap');
    }

    setExpandAnimations() {
        this.expandAnimations = gsap.timeline({ paused: true, ease: "power1.in" })
        this.expandAnimations.to(this.aboutSpans, {
            yPercent: -150,
            duration: 0.8,
        })
        .to(this.el.querySelector('.artist-image'), {
            yPercent: -150,
            duration: 0.8,
        }, "<")
        .to(this.el.querySelector('.header .inner-wrap'), {
                autoAlpha: 0,
                duration: 0.5,
        }, "<")

    }

    openGallery() {
        this.expandAnimations.play()
    }

    closeGallery() {
        this.expandAnimations.reverse();
    }

    init() {
        this.setExpandAnimations();
    }
}