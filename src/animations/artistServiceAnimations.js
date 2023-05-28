import { gsap } from "gsap"

export class artistService {
    constructor(el) {
        this.el = el;
        this.header = this.el.querySelector('.service-header');
    }

    setLoadingAnimation() {
        this.loadingAnimation = gsap.timeline();

        this.loadingAnimation.from(this.header.querySelectorAll('.word-inner-wrapper'), {
            yPercent: 150,
            duration: 1,
            stagger: {
                amount: 0.3
            }
        }, ">5")
            
        .from(this.el.querySelectorAll('.service-inner-wrapper'), {
            yPercent: 150,
            duration: 1,
            stagger: {
                amount: 0.3
            }
        }).progress(1)
    }

    setExpandAnimation() {
        this.expandAnimation = gsap.timeline({ paused: true })

        this.expandAnimation.to([...this.header.querySelectorAll('.word-inner-wrapper'), this.el.querySelectorAll('.service-inner-wrapper')], {
            yPercent: -150,
            duration: 0.8,
            stagger: {
                amount: 0.3,
                ease: "power1.out",
            }
        })
    }

    openGallery() {
        this.expandAnimation.play()
    }

    closeGallery() {
        this.expandAnimation.reverse();
    }

    init() {
        this.setLoadingAnimation();
        this.setExpandAnimation();
    }
}