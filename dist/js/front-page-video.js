const videoTitle = document.querySelector('.video-title');
const videoTitleBox = document.querySelector('.video-titles');
const videoContainer = document.querySelector('#video-container');
const logo = document.querySelector('.prime-oak-logo');
function videoIntro() {
    console.log('front page called');
    const homepageTl = gsap.timeline({
        defaults: {duration: 1.5, ease: "power2.inOut"}
    });
    homepageTl.to(videoTitle, {opacity: "1"});
    homepageTl.to(videoTitle, {opacity: "0", display: "none"});
    homepageTl.to(logo, {opacity: "1"});
    homepageTl.to(logo, {opacity: "0", display: "none"});
    homepageTl.to(videoTitleBox, {display: "none"});
    homepageTl.to(videoContainer, {opacity: "0", display: "none"});
}

videoIntro();