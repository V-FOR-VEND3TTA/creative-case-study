// Animate case study cards with a staggered fade-in on scroll
gsap.registerPlugin(ScrollTrigger);

gsap.from(".case-card", {
  scrollTrigger: {
    trigger: ".case-studies",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.15
});
