/* ===============================
   Content Data (Easy to Edit)
================================ */

const projects = [
  {
    title: "AI Assistive Voice System",
    desc: "Audio-first assistive interface for visually impaired users, designed with privacy-aware ML pipelines and accessible interaction patterns.",
    tag: "Accessibility · Human-Centered AI"
  },
  {
    title: "CyRARR OT Security Framework",
    desc: "Distributed automated response controls for securing operational technology and critical infrastructure systems.",
    tag: "Cybersecurity · Systems"
  }
];

const research = [
  {
    title: "Inclusive AI for Assistive Technologies",
    status: "Draft manuscript",
  },
  {
    title: "Multiplexed Diagnostic Data Pipelines",
    status: "In preparation",
  }
];

const awards = [
  {
    title: "IBM Cybersecurity Analyst Certification",
    year: "2024"
  }
];

/* ===============================
   Render Projects
================================ */

const pGrid = document.getElementById("projectsGrid");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <strong>${p.title}</strong>
    <p style="margin-top:6px;">${p.desc}</p>
    <p style="opacity:0.7;font-size:13px;margin-top:6px;">${p.tag}</p>
  `;

  pGrid.appendChild(card);
});

// enable stagger animation
pGrid.classList.add("reveal-stagger");

/* ===============================
   Render Research
================================ */

const rList = document.getElementById("researchList");

research.forEach(r => {
  const item = document.createElement("div");
  item.className = "card";

  item.innerHTML = `
    <strong>${r.title}</strong>
    <p style="opacity:0.7;font-size:13px;margin-top:4px;">${r.status}</p>
  `;

  rList.appendChild(item);
});

rList.classList.add("reveal-stagger");

/* ===============================
   Render Awards
================================ */

const aList = document.getElementById("awardsList");

awards.forEach(a => {
  const item = document.createElement("div");
  item.className = "card";

  item.innerHTML = `
    <strong>${a.title}</strong>
    <p style="opacity:0.7;font-size:13px;margin-top:4px;">${a.year}</p>
  `;

  aList.appendChild(item);
});

aList.classList.add("reveal-stagger");
