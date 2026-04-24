const ABOUT_SUMMARY = "Software engineer with a non-traditional software path from construction, drawn to challenging problems and practical design constraints. I like breaking problems down and thinking through how data should be shaped before building screens, so systems hold up as they grow. I\u2019ve built mobile, desktop, and full-stack applications and enjoy working across the data layer and UI to ship clean, reliable code.";
const PROJECTS = [
  {
    id: "vacation-scheduler",
    title: "Vacation Scheduler Mobile App \u2014 2025",
    desc: "Built an Android app to help users organize vacations, track excursions, and receive alerts for important dates. Modeled relational entities, enforced date constraints, and implemented lifecycle-aware data access.",
    tags: ["Java", "Android", "Room (SQLite)"],
    live: "",
    code: "",
    x: 30, y: 45,
    size: 120,
    fill: "radial-gradient(circle at 40% 35%, rgba(170,120,255,.95), rgba(80,45,190,.85) 40%, rgba(24,12,60,.95) 100%)",
    floatDur: "4.2s",
    badge: "Featured"
  },
  {
    id: "better-health-r-us",
    title: "Better Health R Us \u2014 Python Data Analysis App \u2014 2023",
    desc: "Built a data-driven application using Pandas to ingest and transform CSV nutrition datasets, applying analysis and evaluation logic with NumPy and ML metrics. Visualized insights using Matplotlib and separated data processing from application flow for maintainable design.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "CSV", "Data Modeling"],
    live: "",
    code: "",
    x: 78, y: 30,
    size: 92,
    fill: "radial-gradient(circle at 40% 35%, rgba(255,255,255,.92), rgba(170,170,170,.75) 45%, rgba(60,60,70,.95) 100%)",
    floatDur: "4.9s",
    badge: "Data"
  },
  {
    id: "routing-simulator",
    title: "Routing Simulator (Python) \u2014 2022",
    desc: "Simulated multi-truck package delivery using a hash table for fast lookups and a greedy routing algorithm to compute delivery times and mileage.",
    tags: ["Python", "Hash Tables", "Greedy Algorithms", "CLI", "CSV Processing"],
    live: "",
    code: "",
    x: 55, y: 60,
    size: 78,
    fill: "radial-gradient(circle at 40% 35%, rgba(110,190,255,.95), rgba(40,110,210,.80) 45%, rgba(10,20,50,.95) 100%)",
    floatDur: "5.6s",
    badge: "Algorithm"
  },
  {
    id: "career-chatbot",
    title: "Student Career Chatbot (AIML) \u2014 2022",
    desc: "Built a rule-based chatbot using AIML on Pandorabots to guide users toward IT career paths via button-driven interactions and intent matching, returning tailored recommendations with learning links.",
    tags: ["AIML", "Pandorabots", "Conversational UI", "Rule-Based AI"],
    live: "",
    code: "",
    x: 20, y: 78,
    size: 88,
    fill: "radial-gradient(circle at 40% 35%, rgba(160,160,160,.92), rgba(90,90,90,.75) 45%, rgba(25,25,30,.95) 100%)",
    floatDur: "6.3s",
    badge: "Chatbot"
  },
  {
    id: "fire-rescue-robot",
    title: "Autonomous Fire Rescue Robot (AI Simulation Project) \u2014 2022",
    desc: "Designed and simulated an autonomous agent to explore hazardous environments using sensor-driven navigation, obstacle avoidance, and path planning. Modeled environment constraints and implemented state tracking to prevent redundant exploration and improve coverage efficiency.",
    tags: ["CoppeliaSim (V-REP)", "Agent-based Simulation", "Path Planning", "Sensor Logic"],
    live: "",
    code: "",
    x: 87, y: 68,
    size: 36,
    fill: "radial-gradient(circle at 40% 35%, rgba(255,210,120,.95), rgba(255,140,40,.80) 45%, rgba(60,22,10,.95) 100%)",
    floatDur: "7.0s",
    badge: "Simulation"
  },
  {
    id: "customer-appointment",
    title: "Customer Appointment App \u2014 2021",
    desc: "Developed a desktop scheduling system with time-based reporting and clean separation between UI, business logic, and persistence layers.",
    tags: ["Java", "JavaFX", "MySQL"],
    live: "",
    code: "",
    x: 60, y: 35,
    size: 70,
    fill: "radial-gradient(circle at 40% 35%, rgba(255,120,160,.92), rgba(200,50,120,.80) 45%, rgba(40,10,30,.95) 100%)",
    floatDur: "4.2s",
    badge: "Desktop"
  },
  {
    id: "product-inventory",
    title: "Product Inventory System \u2014 2021",
    desc: "Built a CRUD inventory tool with search and validation logic and predictable state management.",
    tags: ["Java", "JavaFX"],
    live: "",
    code: "",
    x: 40, y: 72,
    size: 66,
    fill: "radial-gradient(circle at 40% 35%, rgba(120,255,210,.90), rgba(40,190,140,.75) 45%, rgba(10,40,30,.95) 100%)",
    floatDur: "4.9s",
    badge: "CRUD"
  },
  {
    id: "class-roster",
    title: "Class Roster Application \u2014 2020",
    desc: "Created a roster utility to store and query student records with reporting and safe input handling.",
    tags: ["C++"],
    live: "",
    code: "",
    x: 15, y: 60,
    size: 54,
    fill: "radial-gradient(circle at 40% 35%, rgba(190,140,255,.92), rgba(110,70,220,.80) 45%, rgba(20,10,50,.95) 100%)",
    floatDur: "5.6s",
    badge: "Systems"
  },
  {
    id: "ecomix",
    title: "Ecomix \u2014 2016",
    desc: "Built a full-stack e-commerce platform with authentication, product management, and checkout workflows.",
    tags: ["PHP", "MySQL", "Apache", "AWS"],
    live: "",
    code: "",
    x: 85, y: 48,
    size: 64,
    fill: "radial-gradient(circle at 40% 35%, rgba(120,170,255,.92), rgba(50,90,220,.80) 45%, rgba(10,20,50,.95) 100%)",
    floatDur: "6.3s",
    badge: "Full-Stack"
  },
  {
    id: "moto-pit-pass",
    title: "Moto Pit Pass \u2014 2016",
    desc: "Developed a community platform with user profiles, content feeds, and relational data modeling.",
    tags: ["Ruby on Rails", "Angular", "ActiveRecord", "Nginx", "AWS"],
    live: "",
    code: "",
    x: 35, y: 30,
    size: 58,
    fill: "radial-gradient(circle at 40% 35%, rgba(255,180,120,.92), rgba(220,120,40,.80) 45%, rgba(50,20,10,.95) 100%)",
    floatDur: "7.0s",
    badge: "Full-Stack"
  },
  {
    id: "battle-craft",
    title: "Battle Craft \u2014 2016",
    desc: "Built a web-based strategy game with stateful game logic and resource management.",
    tags: ["JavaScript", "Angular", "ActiveRecord", "Nginx", "AWS"],
    live: "",
    code: "",
    x: 70, y: 78,
    size: 52,
    fill: "radial-gradient(circle at 40% 35%, rgba(180,255,120,.88), rgba(110,200,40,.75) 45%, rgba(20,40,10,.95) 100%)",
    floatDur: "4.2s",
    badge: "Game"
  },
  {
    id: "freelance-websites",
    title: "Freelance Websites \u2014 2017",
    desc: "Designed and deployed responsive marketing websites for small businesses with mobile-first performance.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages"],
    live: "",
    code: "",
    x: 50, y: 82,
    size: 44,
    fill: "radial-gradient(circle at 40% 35%, rgba(255,120,255,.90), rgba(200,60,210,.75) 45%, rgba(40,10,45,.95) 100%)",
    floatDur: "4.9s",
    badge: "Web"
  }
];

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d", { alpha: true });

let W=0,H=0,DPR=Math.min(2, window.devicePixelRatio || 1);
let stars=[];
function resize(){
  W=window.innerWidth; H=window.innerHeight;
  DPR=Math.min(2, window.devicePixelRatio || 1);
  canvas.width=Math.floor(W*DPR); canvas.height=Math.floor(H*DPR);
  canvas.style.width=W+"px"; canvas.style.height=H+"px";
  ctx.setTransform(DPR,0,0,DPR,0,0);
  const count=Math.floor((W*H)/8000);
  stars=new Array(count).fill(0).map(()=>({
    x:Math.random()*W, y:Math.random()*H,
    r:Math.random()*1.6+0.2,
    a:Math.random()*0.65+0.25,
    tw:Math.random()*0.9+0.2
  }));
}
window.addEventListener("resize", resize);

let t=0;
function draw(){
  t+=0.01;
  ctx.clearRect(0,0,W,H);
  const g=ctx.createRadialGradient(W*0.35,H*0.18,0,W*0.35,H*0.18,Math.max(W,H));
  g.addColorStop(0,"rgba(124,92,255,0.10)");
  g.addColorStop(0.4,"rgba(255,91,214,0.04)");
  g.addColorStop(1,"rgba(0,0,0,0)");
  ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
  for(const s of stars){
    const pulse=(Math.sin(t*s.tw + s.x*0.01)+1)*0.15;
    const alpha=Math.min(1, s.a + pulse);
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${alpha})`; ctx.fill();
  }
  requestAnimationFrame(draw);
}

const objects=document.getElementById("objects");
const hint=document.getElementById("hint");

// ===== Fly-to / zoom camera (no three.js) =====
let cam={x:0,y:0,z:1};
let camTarget={x:0,y:0,z:1};
let camAnimating=false;

function applyCamera(){
  objects.style.transformOrigin="50% 50%";
  objects.style.transform=`translate(${cam.x}px, ${cam.y}px) scale(${cam.z})`;
  const nA=document.querySelector(".nebula-a");
  const nB=document.querySelector(".nebula-b");
  if(nA) nA.style.transform=`translate(${cam.x*0.03}px, ${cam.y*0.03}px)`;
  if(nB) nB.style.transform=`translate(${cam.x*0.02}px, ${cam.y*0.02}px)`;
}
function animateCamera(){
  if(!camAnimating) return;
  const lerp=(a,b,t)=>a+(b-a)*t;
  cam.x=lerp(cam.x, camTarget.x, 0.10);
  cam.y=lerp(cam.y, camTarget.y, 0.10);
  cam.z=lerp(cam.z, camTarget.z, 0.10);
  applyCamera();
  const dx=Math.abs(cam.x-camTarget.x);
  const dy=Math.abs(cam.y-camTarget.y);
  const dz=Math.abs(cam.z-camTarget.z);
  if(dx<0.5 && dy<0.5 && dz<0.01){
    cam=Object.assign(cam, camTarget);
    applyCamera();
    camAnimating=false;
  } else requestAnimationFrame(animateCamera);
}
function flyToElement(el, zoom=1.85){
  const r=el.getBoundingClientRect();
  const cx=r.left + r.width/2;
  const cy=r.top + r.height/2;
  const heroBottom=document.querySelector(".hero").getBoundingClientRect().bottom;
  const vx=window.innerWidth/2;
  const vy=heroBottom + (window.innerHeight*0.30);
  camTarget.x=(vx-cx);
  camTarget.y=(vy-cy);
  camTarget.z=zoom;
  camAnimating=true;
  requestAnimationFrame(animateCamera);
}
function resetCamera(){
  camTarget={x:0,y:0,z:1};
  camAnimating=true;
  requestAnimationFrame(animateCamera);
}

function createPlanet(p){
  const btn=document.createElement("button");
  btn.className="planet";
  btn.type="button";
  btn.style.left=`${p.x}%`;
  btn.style.top=`${p.y}%`;
  btn.style.setProperty("--size", `${p.size}px`);
  btn.style.setProperty("--planetFill", p.fill);
  btn.style.setProperty("--floatDur", p.floatDur);
  btn.setAttribute("aria-label", `Open project: ${p.title}`);
  const label=document.createElement("div");
  label.className="label";
  label.textContent=p.title;
  btn.appendChild(label);

  btn.addEventListener("click", ()=>{
    flyToElement(btn, 1.85);
    setTimeout(()=>openModal(p), 450);
  });
  return btn;
}
function renderPlanets(){
  objects.innerHTML="";
  PROJECTS.forEach(p=>objects.appendChild(createPlanet(p)));
}

let hintTimer=null;
function hideHintSoon(){
  clearTimeout(hintTimer);
  hintTimer=setTimeout(()=>{
    hint.style.opacity="0";
    hint.style.pointerEvents="none";
    hint.style.transition="opacity .5s ease";
  }, 1800);
}

const grid=document.getElementById("projectGrid");
function escapeHtml(str=""){
  return String(str).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function tagPills(tags=[]){
  return tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join("");
}
function renderProjectCards(){
  if(!grid) return;
  grid.innerHTML=PROJECTS.map(p=>`
    <article class="project-card" id="${p.id}" style="--orbFill:${p.fill}">
      <div class="project-top">
        <div>
          <div class="modal-badge">${escapeHtml(p.badge || "Project")}</div>
          <h3>${escapeHtml(p.title)}</h3>
        </div>
        <div class="project-orb" aria-hidden="true"></div>
      </div>
      <p>${escapeHtml(p.desc)}</p>
      <div class="modal-meta">${tagPills(p.tags)}</div>
      <div class="project-actions">
        <a class="small-btn" href="#projects" data-open="${p.id}">Open Details</a>
        ${p.live ? `<a class="small-btn primary" href="${p.live}" target="_blank" rel="noreferrer">Live</a>` : ""}
        ${p.code ? `<a class="small-btn" href="${p.code}" target="_blank" rel="noreferrer">Code</a>` : ""}
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-open]").forEach(btn=>{
    btn.addEventListener("click",(e)=>{
      e.preventDefault();
      const id=btn.getAttribute("data-open");
      const proj=PROJECTS.find(x=>x.id===id);
      if(proj) setTimeout(()=>openModal(proj), 50);
    });
  });
}

const backdrop=document.getElementById("backdrop");
const modal=document.getElementById("modal");
const closeModalBtn=document.getElementById("closeModal");
const modalTitle=document.getElementById("modalTitle");
const modalDesc=document.getElementById("modalDesc");
const modalMeta=document.getElementById("modalMeta");
const modalBadge=document.getElementById("modalBadge");
const liveLink=document.getElementById("liveLink");
const codeLink=document.getElementById("codeLink");
const jumpLink=document.getElementById("jumpLink");

let lastFocusEl=null;
function openModal(p){
  hideHintSoon();
  lastFocusEl=document.activeElement;
  modalTitle.textContent=p.title;
  modalDesc.textContent=p.desc;
  modalBadge.textContent=p.badge || "Project";
  modalMeta.innerHTML="";
  (p.tags||[]).forEach(tag=>{
    const el=document.createElement("span");
    el.className="tag";
    el.textContent=tag;
    modalMeta.appendChild(el);
  });
  if(jumpLink) jumpLink.href=`#${p.id}`;
  liveLink.style.display=p.live ? "inline-flex" : "none";
  codeLink.style.display=p.code ? "inline-flex" : "none";
  if(p.live) liveLink.href=p.live;
  if(p.code) codeLink.href=p.code;
  backdrop.hidden=false;
  modal.hidden=false;
  closeModalBtn.focus();
}
function closeModal(){
  backdrop.hidden=true;
  modal.hidden=true;
  resetCamera();
  if(lastFocusEl) lastFocusEl.focus();
}
backdrop.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("keydown",(e)=>{ if(e.key==="Escape" && !modal.hidden) closeModal(); });

const drawer=document.getElementById("drawer");
const profileBtn=document.getElementById("profileBtn");
const closeDrawerBtn=document.getElementById("closeDrawer");
function toggleDrawer(force){
  const next=typeof force==="boolean" ? force : drawer.hidden;
  drawer.hidden=!next;
}
profileBtn.addEventListener("click",()=>toggleDrawer(true));
closeDrawerBtn.addEventListener("click",()=>toggleDrawer(false));

resize(); draw(); renderPlanets(); renderProjectCards();
const aboutEl=document.getElementById("aboutSummary");
const drawerEl=document.getElementById("drawerSummary");
if(aboutEl) aboutEl.textContent=ABOUT_SUMMARY;
if(drawerEl) drawerEl.textContent=ABOUT_SUMMARY;
const yearEl=document.getElementById("year");
if(yearEl) yearEl.textContent=String(new Date().getFullYear());
objects.addEventListener("pointerdown", hideHintSoon, { once:true });
