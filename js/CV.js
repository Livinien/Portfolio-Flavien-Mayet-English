

// ANIMATION DU MENU HAMBURGER //

const btnMenu = document.querySelector('.btn1')
const lignes = document.querySelector('.navigation');
const wrapper = document.querySelector('.wrapper');
const content = document.querySelector('.content');
const nav = document.querySelectorAll('.nav')
const allItemNav = document.querySelectorAll('.nav-menu-item')


    btnMenu.addEventListener('click', () => {
        

        btnMenu.classList.toggle('active')
        wrapper.classList.toggle('active-menu')
        content.classList.toggle('active-menu')
        lignes.classList.toggle('active-menu')
        
        

    })


if(window.matchMedia('(max-width: 980px)')) {

    allItemNav.forEach(item => {

        item.addEventListener('click', () => {
            
            btnMenu.classList.toggle('active')
            wrapper.classList.toggle('active-menu');
            content.classList.toggle('active-menu')
            lignes.classList.toggle('active-menu')
            
        })

    })
}

 


// ANIMATION ECRITURE //


const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {

    loop: false,
    deleteSpeed: 20

})

    typewriter
    .pauseFor(3000)
    .changeDelay(20)

    .typeString('<strong>Web Developer</strong> ')
    .pauseFor(1000)
    .deleteChars(1)

    .typeString('<span style = "color: #da451d;"> HTML</span> /<span style = "color: #05aff4;"> CSS</span> ')
    .pauseFor(1000)
    .deleteChars(12)

    .typeString('<span style = "color: #c6a822;"> JavaScript</span> ')
    .pauseFor(1000)
    .deleteChars(12)

    .typeString('<span style = "color: #EA39ff;"> Symfony</span> ')
    .pauseFor(1000)
    .deleteChars(8)

    .typeString('<span style = "color: #00a6ff;"> MySQL</span> ')
    .pauseFor(1000)
    .deleteChars(8)

    .start()



// ANIMATION GREENSOCK ET SCROLLMAGIC //

    const titre1 = document.querySelector('h1')
    const titre2 = document.querySelector('h2')
    const titrePortfolio = document.querySelector('.social')
    const navigation = document.querySelectorAll('.nav')
    const btn_black = document.querySelectorAll('.lien')
    const social = document.querySelectorAll('.logo')


    const TL1 = gsap.timeline({paused: true});



    TL1

    .from(titre2, 5, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 7})

    .staggerFrom(titre1, 5, {opacity: 0}, 0.90, '0.75')

    .staggerFrom(titrePortfolio, 5, {opacity: 0}, 0.90, '0.75')

    .staggerFrom(navigation, 4, {opacity: 0}, 0.50, '0.80')

    .staggerFrom(btn_black, 2, {opacity: 0}, 0.90, '2')

    .staggerFrom(social, 1, {opacity: 0}, 0.90, '0.75')


    window.addEventListener('load', () => {

        TL1.play();

    })




// ANIMATION - A PROPOS | TITRE ET PARAGRAPHE 1 //

const about = document.querySelector('#about')
const aboutMe = document.querySelector('.about-me');
const pAboutMe = document.querySelectorAll('.p1');



const tlAboutMe = new TimelineMax();


tlAboutMe

.from(aboutMe, {y: -50, opacity: 0, duration: 1})
.staggerFrom(pAboutMe, 2, {opacity: 0}, 0.5, '-=0.5')


const ctrl = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({

    triggerElement: about,
    triggerHook: 0.26,
    reverse: false

})

.setTween(tlAboutMe)
// .addIndicators()
.addTo(ctrl)






// ANIMATION - PORTFOLIO //


const portfolio = document.querySelector('.portfolio')
const titlePortfolio = document.querySelector('.title-port');
const itemPortfolio = document.querySelectorAll('.vague1');


// VAGUE 1 //

const tlPortfolio1 = new TimelineMax();


tlPortfolio1

.from(titlePortfolio, {y: -50, opacity: 0, duration: 1})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({

    triggerElement: portfolio,
    triggerHook: 0.5,
    reverse: false

})


.setTween(tlPortfolio1)
// .addIndicators()
.addTo(controller)




// VAGUE 2 //

const itemPortfolio2 = document.querySelectorAll('.vague2');

const tlPortfolio2 = new TimelineMax();


tlPortfolio2
.staggerFrom(itemPortfolio2, 2, {opacity: 0}, 0.3, '-=0.5')


const scene3 = new ScrollMagic.Scene({

    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false

})


.setTween(tlPortfolio2)
// .addIndicators()
.addTo(controller)







// ANIMATION - COMPÉTENCES //

const titleCompetences = document.querySelector('.title-exp');
const itemCompetences1 = document.querySelectorAll('.skill-box');




// VAGUE 1 //

const tlCompetences1 = new TimelineMax();


tlCompetences1

.from(titleCompetences, {y: -50, opacity: 0, duration: 1})
.staggerFrom(itemCompetences1, 1, {opacity: 0}, 0.5, '-=0.5')



const scene4 = new ScrollMagic.Scene({

    triggerElement: itemCompetences1,
    triggerHook: 0.4,
    reverse: false
})


.setTween(tlCompetences1)
//.addIndicators()
.addTo(controller)




// VAGUE 2 //

const itemCompetences2 = document.querySelectorAll('.item2');


const tlCompetences2 = new TimelineMax();

tlCompetences2


.staggerFrom(itemCompetences2, 2, {opacity: 0}, 0.5, '-=0.5')


const scene5 = new ScrollMagic.Scene({

    triggerElement: itemCompetences2,
    triggerHook: 0.5,
    reverse: false

})


.setTween(tlCompetences2)
//.addIndicators()
.addTo(controller)



// VAGUE 3 //

const itemCompetences3 = document.querySelectorAll('skill-box .item2');


const tlCompetences3 = new TimelineMax();

tlCompetences3


.staggerFrom(itemCompetences3, 3, {opacity: 0}, 0.5, '-=0.5')


const scene6 = new ScrollMagic.Scene({

    triggerElement: itemCompetences3,
    triggerHook: 0.6,
    reverse: false

})


.setTween(tlCompetences3)
//.addIndicators()
.addTo(controller)








// ANIMATION - EXPÉRIENCES //

const titleExperiences = document.querySelector('.exp');
const experiences1 = document.querySelector('.row-1');

const tlExperiences1 = new TimelineMax();


tlExperiences1

.from(titleExperiences, {y: -50, opacity: 0, duration: 1})




// VAGUE 1 //

.from(experiences1, {y: -50, opacity: 0, duration: 1})


const scene7 = new ScrollMagic.Scene({

    triggerElement: experiences1,
    triggerHook: 0.5,
    reverse: false
})


.setTween(tlExperiences1)
//.addIndicators()
.addTo(controller)





// VAGUE 2 //

const experiences2 = document.querySelector('.row-2');

const tlExperiences2 = new TimelineMax();


tlExperiences2


.from(experiences2, {y: -50, opacity: 0, duration: 1})


const scene8 = new ScrollMagic.Scene({

    triggerElement: experiences2,
    triggerHook: 0.3,
    reverse: false
})


.setTween(tlExperiences2)
//.addIndicators()
.addTo(controller)






// VAGUE 3 //

const experiences3 = document.querySelector('.row-row-3');

const tlExperiences3 = new TimelineMax();


tlExperiences3


.from(experiences3, {y: -50, opacity: 0, duration: 1})


const scene9 = new ScrollMagic.Scene({

    triggerElement: experiences3,
    triggerHook: 0.5,
    reverse: false
})


.setTween(tlExperiences3)
//.addIndicators()
.addTo(controller)






// VAGUE 4 //

const experiences4 = document.querySelector('.row-row-4');

const tlExperiences4 = new TimelineMax();


tlExperiences4


.from(experiences4, {y: -50, opacity: 0, duration: 1})


const scene10 = new ScrollMagic.Scene({

    triggerElement: experiences4,
    triggerHook: 0.6,
    reverse: false
})


.setTween(tlExperiences4)
//.addIndicators()
.addTo(controller)





// VAGUE 5 //

const experiences5 = document.querySelector('.row-row-5');

const tlExperiences5 = new TimelineMax();


tlExperiences5


.from(experiences5, {y: -50, opacity: 0, duration: 1})


const scene11 = new ScrollMagic.Scene({

    triggerElement: experiences5,
    triggerHook: 0.6,
    reverse: false
})


.setTween(tlExperiences5)
//.addIndicators()
.addTo(controller)







// ANIMATION - CONTACT //

// ANIMATION - MES RÉSEAUX SOCIAUX //

const titleContact = document.querySelector('.contact');
const titleSocial = document.querySelector('.title-social');
const network = document.querySelector('.network');

const tlContact = new TimelineMax();

tlContact

.from(titleContact, {y: -50, opacity: 0, duration: 1})
.from(titleSocial, {y: -50, opacity: 0, duration: 0.50})
.from(network, {y: -50, opacity: 0, duration: 0.50})


const scene12 = new ScrollMagic.Scene({

    triggerElement: titleContact,
    triggerHook: 0.6,
    reverse: false

})


.setTween(tlContact)
//.addIndicators()
.addTo(controller)





// ANIMATION - MES CONTACTS PERSONNELS //

const titleContactPersonnels = document.querySelector('.contact-personnels');
const phone = document.querySelector('.phone');
const mail = document.querySelector('.mail');
const addresse = document.querySelector('.adress');

const tlContactPersonnels = new TimelineMax();

tlContactPersonnels

.from(titleContactPersonnels, {y: -50, opacity: 0, duration: 0.50})
.from(phone, {y: -50, opacity: 0, duration: 0.50})
.from(mail, {y: -50, opacity: 0, duration: 0.50})
.from(addresse, {y: -50, opacity: 0, duration: 0.50})


const scene13 = new ScrollMagic.Scene({

    triggerElement: titleContact,
    triggerHook: 0.2,
    reverse: false

})


.setTween(tlContactPersonnels)
//.addIndicators()
.addTo(controller)



