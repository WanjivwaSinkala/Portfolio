const content = [
  { headline: "BUILDING RESILIENT ECONOMIES, EMPOWERING COMMUNITIES", subtext: "Turning data into action to drive sustainable growth." },
  { headline: "SHAPING POLICY. DRIVING IMPACT.", subtext: "Advancing evidence-based solutions that transform lives." },
  { headline: "FROM INSIGHT TO INNOVATION", subtext: "Transforming research into strategies that deliver real-world change." }
];
let currentIndex = 0;
const headlineEl = document.getElementById("rotating-headline");
const subtextEl = document.getElementById("rotating-subtext");
function changeContent() {
  headlineEl.textContent = content[currentIndex].headline;
  subtextEl.textContent = content[currentIndex].subtext;
  currentIndex = (currentIndex + 1) % content.length;
}
setInterval(changeContent, 5000);
