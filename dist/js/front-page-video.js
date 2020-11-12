const videoTitle = document.querySelector('.video-title');
const videoTitleBox = document.querySelector('.video-titles');
const videoContainer = document.querySelector('#video-container');
const logo = document.querySelector('.prime-oak-logo');
function videoIntro() {
    console.log('front page called');
    const homepageTl = gsap.timeline({
        defaults: {duration: 2, ease: "power2.inOut"}
    });
    homepageTl.fromTo(videoTitle, {opacity: "0"}, {opacity: "1"});
    homepageTl.fromTo(videoTitle, {opacity: "1"}, {opacity: "0"});
    homepageTl.to(videoTitle, {display: "none"});
    homepageTl.to(logo, {opacity: "1"});
    homepageTl.to(logo, {opacity: "0"});
    homepageTl.to(logo, {display: "none"});
    homepageTl.to(videoTitleBox, {display: "none"});
    homepageTl.fromTo(videoContainer, {opacity:"1"}, {duration: "1", opacity: "0"});
    homepageTl.to(videoContainer, {display: "none"});
}

videoIntro();