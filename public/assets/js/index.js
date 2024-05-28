// ScrollTrigger 라이브러리 가져오기
const { gsap } = window;
const { ScrollTrigger } = window;

// ScrollTrigger 활성화
// gsap.registerPlugin(ScrollTrigger);

// // 요소 선택
// const introText = document.querySelectorAll("#section2 .desc > div");
// const pictureDesc = document.querySelectorAll("#section2 .img .intro");

// // 애니메이션 효과 추가
// introText.forEach((item) => {
//     gsap.to(item, {
//         opacity: 1,
//         duration: 1,
//         x: 0,
//         y: 0,
//         scale: 1,
//         rotation: 0,
//         scrollTrigger: {
//             trigger: item,
//             start: "top 80%", // 화면 상단에서 80% 지점에서 애니메이션 시작
//             scrub: true, // scrub 효과 적용
//         },
//     });
// });

// pictureDesc.forEach((item) => {
//     gsap.to(item, {
//         opacity: 1,
//         duration: 2,
//         x: 0,
//         y: 0,
//         scale: 1,
//         rotation: 0,
//         scrollTrigger: {
//             trigger: item,
//             start: "top 80%", // 화면 상단에서 80% 지점에서 애니메이션 시작
//             scrub: true, // scrub 효과 적용
//         },
//     });
// });


// var t1 = gsap.timeline({
//     // 무한히 반복하고 싶다면 repeat:-1
//     repeat: -1,
//     // repeatDelay: 애니메이션이 끝나고 쉬는 시간
//     repeatDelay: 1
// })
// tl.from("#section2 .desc > div > span", {
//     opacity: 0,
//     y: 100,
//     duration: 1,
//     stagger: 0.5
// });

// tl.to("#section2 .desc > div > span", {
//     opacity: 0,
//     y: -100,
//     duration: 1,
//     stagger: {
//         each: "0.1",
//         from: "end"
//     }
// }, "+=2");
//   // "+=2" 는 delay를 나타냄








