
const projects = [
  { title: "AI Assistive Voice System", desc: "Audio-first assistant for visually impaired users." },
  { title: "CyRARR OT Security", desc: "Automated response system for critical infrastructure." }
];

const research = [
  "Inclusive AI for Assistive Technologies (Draft)",
  "Multiplexed Diagnostic Pipelines (In Prep)"
];

const awards = [
  "IBM Cybersecurity Analyst Certification (2024)"
];

const pGrid = document.getElementById("projectsGrid");
projects.forEach(p => {
  const d = document.createElement("div");
  d.className = "card";
  d.innerHTML = `<strong>${p.title}</strong><p>${p.desc}</p>`;
  pGrid.appendChild(d);
});

const rList = document.getElementById("researchList");
research.forEach(r => {
  const d = document.createElement("div");
  d.textContent = r;
  rList.appendChild(d);
});

const aList = document.getElementById("awardsList");
awards.forEach(a => {
  const d = document.createElement("div");
  d.textContent = a;
  aList.appendChild(d);
});
