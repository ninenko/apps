/* CAFA Pre-Conference 2026 - built by build_preconference.py; edit template-preconference.html, not this file. */
(function(){
  var cs = document.currentScript;
  var BASE = (cs && cs.src ? cs.src.replace(/[^/]*$/, '') : 'https://ninenko.github.io/apps/pages/cafa-preconference/');
  window.__PRECAFA_BASE = BASE;
  var mount = document.getElementById('precafa-root');
  if (!mount){ mount = document.createElement('div'); mount.id = 'precafa-root'; cs.parentNode.insertBefore(mount, cs); }
  mount.innerHTML = "<div id=\"precafa\">\n<header class=\"masthead\">\n  <div class=\"wrap\">\n    <div class=\"lockup\">\n      <a class=\"logo-link\" href=\"https://www.bis.kg/school/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Bishkek International School \u2014 school website\">\n        <img class=\"logo\" alt=\"Bishkek International School\" src=\"__BASE__images/bis-logo.png\">\n      </a>\n      <span class=\"divider\" aria-hidden=\"true\"></span>\n      <span class=\"sub\">Pre-Conference</span>\n      <a class=\"cafa-badge\" href=\"https://www.bis.kg/school/cafa-conference-2026/\" target=\"_blank\" rel=\"noopener\">\n        <img src=\"__BASE__images/cafa-logo.png\" alt=\"CAFA\">\n        CAFA PD Pre-Conference\n      </a>\n    </div>\n    <p class=\"eyebrow\" id=\"precafa-date-eyebrow\"></p>\n  </div>\n</header>\n\n<div class=\"hero\">\n  <div class=\"grain\"></div>\n  <div class=\"wrap\">\n    <p class=\"eyebrow\" id=\"precafa-hero-eyebrow\"></p>\n    <h1 id=\"precafa-h1\"></h1>\n    <div class=\"rule\"></div>\n    <p class=\"deck\" id=\"precafa-deck\"></p>\n    <div class=\"facts\" id=\"precafa-facts\"></div>\n  </div>\n</div>\n\n<main class=\"wrap\">\n  <section>\n    <p class=\"eyebrow\">Speakers</p>\n    <h2 id=\"precafa-speakers-h2\"></h2>\n    <div class=\"speakers\" id=\"precafa-speakers\"></div>\n  </section>\n\n  <section>\n    <p class=\"eyebrow\">What you take away</p>\n    <h2 id=\"precafa-takeaways-h2\"></h2>\n    <ul class=\"takeaways\" id=\"precafa-takeaways\"></ul>\n  </section>\n</main>\n\n<footer>\n  <div class=\"wrap\">\n    <div class=\"foot-logos\">\n      <img class=\"foot-logo\" alt=\"Bishkek International School\" src=\"__BASE__images/bis-logo.png\">\n      <a href=\"https://www.bis.kg/school/cafa-conference-2026/\" target=\"_blank\" rel=\"noopener\" aria-label=\"CAFA PD Pre-Conference page on bis.kg\">\n        <img class=\"cafa-foot-logo\" alt=\"CAFA\" src=\"__BASE__images/cafa-logo.png\">\n      </a>\n    </div>\n    <p id=\"precafa-footer-line\"></p>\n  </div>\n</footer>\n</div>".replace(/__BASE__/g, BASE);
})();

(function(){
  var BASE = window.__PRECAFA_BASE || "";
  var asset = function(u){ return /^https?:/.test(u||"") ? u : BASE + u; };
  var GLYPHS = [
    '<svg class="glyph" viewBox="0 0 64 44" fill="none" aria-hidden="true"><rect x="2.8" y="2.8" width="58" height="11" rx="2" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/><path d="M9 8.4l2.8 2.8 5.4-5.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="2.8" y="16.5" width="58" height="11" rx="2" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/><path d="M9 22.1l2.8 2.8 5.4-5.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="2.8" y="30.2" width="58" height="11" rx="2" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 4" opacity=".45"/></svg>',
    '<svg class="glyph" viewBox="0 0 64 44" fill="none" aria-hidden="true"><rect x="2" y="6" width="12" height="12" rx="2.5" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/><rect x="26" y="6" width="12" height="12" rx="2.5" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/><rect x="50" y="6" width="12" height="12" rx="2.5" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/><path d="M16.5 12h7M21 9.4l2.9 2.6-2.9 2.6M40.5 12h7M45 9.4l2.9 2.6-2.9 2.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M56 21v7.5c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V22" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".55"/><path d="M5.2 24.6 8 21l2.8 3.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/></svg>',
    '<svg class="glyph" viewBox="0 0 64 44" fill="none" aria-hidden="true"><path d="M3 41h58" stroke="currentColor" stroke-width="1.4" opacity=".3"/><path d="M4.5 39C18 38 27 33.5 33 24" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M33 24C39 14 44 7.5 52.5 3.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-dasharray="4 4" opacity=".6"/><circle cx="33" cy="24" r="3.4" fill="currentColor"/></svg>'
  ];

  function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
  // allow a small, fixed set of inline tags (strong/a/em) already baked into data strings
  function safe(s){ return s; }

  function render(d){
    var E = d.event;
    document.getElementById("precafa-date-eyebrow").textContent = E.dateLine;
    document.getElementById("precafa-hero-eyebrow").textContent = E.dateTimeLine;
    document.getElementById("precafa-h1").innerHTML = esc(E.title) + "<br><span class=\"dim\">" + esc(E.subtitle) + "</span>";
    document.getElementById("precafa-deck").textContent = E.deck;

    var facts = document.getElementById("precafa-facts");
    facts.innerHTML = "<span class=\"fact lead\">" + esc(E.time) + "</span><span class=\"fact\">" + esc(E.venue) + "</span>"
      + "<span class=\"fact cafa-link\"><a href=\"" + esc(E.cafaConferenceUrl) + "\" target=\"_blank\" rel=\"noopener\">Part of CAFA PD 2026 &rarr;</a></span>";

    document.getElementById("precafa-speakers-h2").textContent = d.speakersHeading;
    document.getElementById("precafa-speakers").innerHTML = d.speakers.map(function(s){
      return "<article class=\"card\"><img class=\"portrait\" alt=\"" + esc(s.name) + "\" src=\"" + asset(s.photo) + "\">"
        + "<h3>" + esc(s.name) + "</h3>"
        + "<p>" + s.bio + "</p></article>";
    }).join("");

    document.getElementById("precafa-takeaways-h2").textContent = d.takeawaysHeading;
    document.getElementById("precafa-takeaways").innerHTML = d.takeaways.map(function(t, i){
      return "<li>" + GLYPHS[i % GLYPHS.length] + "<b>" + esc(t.title) + "</b><span>" + esc(t.text) + "</span></li>";
    }).join("");

    document.getElementById("precafa-footer-line").innerHTML = "<strong>Pre-Conference</strong> &middot; " + esc(E.dateTimeLine) + " &middot; " + esc(E.venue);
    document.title = d.pageTitle;
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", d.pageDescription);
  }

  render({"_README": "Edit this file to change the pre-conference page text, speakers or takeaways. Push to GitHub after editing (see the guide) \u2014 the bis.kg page reads it live (~10 min cache). Photos live in images/ next to this file.", "pageTitle": "Pre-Conference \u2014 The Current State of AI | Bishkek International School", "pageDescription": "Pre-Conference, Friday 25 September 2026, 12:00-15:30 at Bishkek International School: what frontier AI models and agents can and cannot do.", "event": {"dateLine": "Friday 25 September 2026 \u00b7 Bishkek", "dateTimeLine": "Friday 25 September \u00b7 12:00\u201315:30", "title": "The Current State of AI", "subtitle": "What frontier models can and cannot do", "deck": "Practitioners show what today\u2019s models and agents already do \u2014 live, with real tasks and real failure cases.", "time": "12:00\u201315:30", "venue": "Bishkek International School", "cafaConferenceUrl": "https://www.bis.kg/school/cafa-conference-2026/"}, "speakersHeading": "Four practitioners, four vantage points", "speakers": [{"name": "Igor Chemerkin", "photo": "images/igor-chemerkin.jpg", "bio": "<strong>Igor Chemerkin</strong> is <a href=\"https://pro.ololo.city/course/ai-dlya-biznesa\" target=\"_blank\" rel=\"noopener\">AI Mentor at OloloPro</a> where he trains and consults different businesses on AI integration. Igor worked as a senior software developer for over 9 years and then gradually shifted to AI mentorship. He is the founder of the <a href=\"https://t.me/ai_in_kg\" target=\"_blank\" rel=\"noopener\">Bishkek AI community</a>."}, {"name": "Aidin Biibosunov", "photo": "images/aidin-biibosunov.jpg", "bio": "<strong>Aidin Biibosunov</strong> is a Computational Biology Researcher at <a href=\"https://differentiabio.com/\" target=\"_blank\" rel=\"noopener\">Differentia Bio</a>, where he works on mathematical modeling of the immune system. As a Teach for Kyrgyzstan fellow teaching math in a rural public school, he built <a href=\"https://aisuluu.aidinbii.me/\" target=\"_blank\" rel=\"noopener\">AIsuluu</a> \u2014 an AI assistant that grades handwritten math homework and gives each student personalized feedback."}, {"name": "Aidil Umarov", "photo": "images/aidil-umarov.jpg", "bio": "<strong>Aidil Umarov</strong> is Lead Software Engineer at EPAM Kyrgyzstan, the local branch of the global digital transformation and software engineering company EPAM Systems. <a href=\"https://www.epam.com/\" target=\"_blank\" rel=\"noopener\">EPAM Systems</a> is a global provider of digital platform engineering, software development, and AI-enabled transformation services, ranked among the <a href=\"https://finance.yahoo.com/news/newsweek-ranks-epam-among-top-150200997.html\" target=\"_blank\" rel=\"noopener\">Top 5 in IT Services &amp; Consulting by Newsweek</a>."}, {"name": "Ivan Ninenko", "photo": "images/ivan-ninenko.jpg", "bio": "<strong>Ivan Ninenko</strong> is Strategic Lead for Education Systems Innovation at <a href=\"https://www.bis.kg/school/\" target=\"_blank\" rel=\"noopener\">Bishkek International School</a>. He has driven a Teach for Kyrgyzstan initiative <a href=\"https://ninenko.github.io/apps/pages/ai-tutors.html\" target=\"_blank\" rel=\"noopener\">piloting AI-powered teaching assistants</a> across rural Kyrgyz public schools, and co-founded <a href=\"https://quantaquiz.com/\" target=\"_blank\" rel=\"noopener\">QuantaQuiz</a>, an AI-powered testing and personalized-feedback platform."}], "takeawaysHeading": "A shared, current picture of the technology \u2014 before we discuss the skills.", "takeaways": [{"title": "What AI can already automate", "text": "Which slices of the working week are genuinely handed over."}, {"title": "How AI agents work", "text": "Plan, use a tool, check the result \u2014 and where the loop breaks."}, {"title": "How fast things are changing", "text": "The slope we are on \u2014 and what the next year plausibly holds."}]});

  function get(url){ return fetch(url + (url.indexOf("?") < 0 ? "?" : "&") + "t=" + Date.now(), {cache:"no-store"}).then(function(r){ if (!r.ok) throw 0; return r.json(); }); }
  get(BASE + "data.json").then(render).catch(function(){});
})();
