import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export class Gallery {
    constructor(el) {
        this.el = el
        this.galleryEl = el.querySelector('.images-holder');
        this.galleryImages = el.querySelectorAll('.images-holder .img-div');
        this.placeHolderEl = el.querySelector('.placeholders');
        this.placeholderImages = el.querySelectorAll('.placeholders .placeholder-img-div')
    }

    setExpandAnimations() {
        this.expandAnimations = gsap.timeline({ paused: true});
        this.setCrossHairAnimation();
    }

    setCrossHairAnimation() {
        const crossHairAnimation = gsap.timeline({ paused: true, }).addLabel('start');
        const placeHolderAnimation = gsap.timeline({ paused: true }).addLabel('start');
        const crossHairSVG = this.el.querySelector('.gallery-svg');

        crossHairAnimation.to(crossHairSVG, {
            scaleX: 3.7,
            scaleY: 3.2,
            duration: 0.8,
            ease: "power2.in"
        })
        .to(crossHairSVG.querySelectorAll('.cross-hair'), {
            scaleX: 1 / 3.7,
            scaleY: 1 / 3.2,
            duration: 0.8,
            ease: "power2.in"
        }, "start")

         gsap.set(this.galleryEl, {
            autoAlpha: 0
         })  
        
        const ImagesBoxes = []
        for (let i = 0; i <= 2; i++) {
            ImagesBoxes.push(this.galleryImages[i].getBoundingClientRect());
        }

        this.placeholderImages.forEach((img, i) => {
            placeHolderAnimation.to(img, {
                x: (ImagesBoxes[i].x - img.getBoundingClientRect().x),
                scale: (ImagesBoxes[i].width / img.getBoundingClientRect().width),
                duration: 0.5,
            }, 'start');
            placeHolderAnimation.to(img.querySelector('.placeholder-inner'), {
                rotate: 0,
                duration: 0.5,
            }, 'start')
        })
        
        placeHolderAnimation.addLabel('end')
            
        
        placeHolderAnimation.set(this.galleryEl, {
            autoAlpha: 1,
        }, "+=0.4")

        placeHolderAnimation.set(this.placeHolderEl, {
            autoAlpha: 0
        }, "+=0.4");

        gsap.registerPlugin(ScrollTrigger)

        this.galleryTl = gsap.timeline({
            scrollTrigger: {
                id: "trigger1",
                trigger: "#app",
                scrub: true,
                pin: true,
        }})
        this.galleryTl.to(this.galleryEl, 
        {
            x: -(this.galleryEl.scrollWidth - 1700),
            duration: 6,
            scrollTrigger: {
                scrub: true,
            }
        })

        this.expandAnimations.add(crossHairAnimation.play());
        this.expandAnimations.add(placeHolderAnimation.play());
        this.expandAnimations.add(this.galleryTl);
    }
    openGallery() {
        this.expandAnimations.play();
        if (ScrollTrigger.getById("trigger1")) {
            ScrollTrigger.getById("trigger1").enable()
        }
    }

    async closeGallery() {
        await this.expandAnimations.reverse();
        this.galleryTl.reverse();
        ScrollTrigger.getById("trigger1").disable()
    }

    init() {
        this.setExpandAnimations();
    }
}