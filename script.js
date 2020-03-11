// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 20000,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12 .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 20000,
        delay: (el, i) => 100 + 30 * i
    });


// Letter animation - moving effect
// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml1 .letter');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: true })
//     .add({
//         targets: '.ml1 .letter',
//         scale: [0.3, 1],
//         opacity: [0, 1],
//         translateZ: 0,
//         easing: "easeOutExpo",
//         duration: 600,
//         delay: (el, i) => 70 * (i + 1)
//     }).add({
//         targets: '.ml1 .line',
//         scaleX: [0, 1],
//         opacity: [0.5, 1],
//         easing: "easeOutExpo",
//         duration: 700,
//         offset: '-=875',
//         delay: (el, i, l) => 80 * (l - i)
//     }).add({
//         targets: '.ml1',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     });