(() => {
  const T = window.TRIP, C = window.CREDITS || {};
  const $app = document.getElementById("app");
  const TZ = "America/New_York";
  const DOW = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const DOW3 = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const MON = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const LINE = { B: "#FF6319", D: "#FF6319", F: "#FF6319", M: "#FF6319", A: "#0039A6", C: "#0039A6", E: "#0039A6",
    N: "#FCCC0A", Q: "#FCCC0A", R: "#FCCC0A", W: "#FCCC0A", 1: "#EE352E", 2: "#EE352E", 3: "#EE352E",
    4: "#00933C", 5: "#00933C", 6: "#00933C", 7: "#B933AD", G: "#6CBE45", J: "#996633", Z: "#996633", L: "#A7A9AC" };

  /* ---------- helpers ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const I = (name) => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  const ICONS = {
    cal: '<rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
    ticket: '<path d="M3 8.5a2.2 2.2 0 0 0 0 4.4V17h18v-4.1a2.2 2.2 0 0 1 0-4.4V5H3z"/><path d="M14 5v12" stroke-dasharray="2 2.5"/>',
    train: '<rect x="5" y="3" width="14" height="14" rx="4"/><path d="M5 10.5h14M8.5 21l2-4M15.5 21l-2-4"/><circle cx="9" cy="13.8" r=".6"/><circle cx="15" cy="13.8" r=".6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.8h.01"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    pin: '<path d="M12 21.5s7-6.2 7-11.5a7 7 0 1 0-14 0c0 5.3 7 11.5 7 11.5z"/><circle cx="12" cy="10" r="2.5"/>',
    back: '<path d="M15 5l-7 7 7 7"/>', chev: '<path d="M9 5l7 7-7 7"/>',
    walk: '<circle cx="13" cy="4.5" r="1.6"/><path d="M10 21l2-6 3 3v4M8.5 11l3-3 3 3 3 1M11.5 8l-1 5"/>',
    car: '<path d="M5 16V11l2-5h10l2 5v5M5 16h14M5 16v2.5M19 16v2.5"/><circle cx="8" cy="13" r=".8"/><circle cx="16" cy="13" r=".8"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    tip: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"/>',
    near: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/><circle cx="12" cy="12" r="2"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    door: '<path d="M6 21V4h10l2 2v15M6 21h14M13 12h.01"/>',
    tap: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M3 9a6 6 0 0 1 0 6M21 9a6 6 0 0 1 0 6"/>',
    sign: '<path d="M4 5h16v7H4zM12 12v9"/>',
    exit: '<path d="M10 4H5v16h5M15 8l4 4-4 4M19 12H9"/>',
    warn: '<path d="M12 3 2 20h20zM12 10v4.5M12 17.5h.01"/>',
    money: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
    food: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-2 7 0 9v9"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    share: '<path d="M12 15V3M8 7l4-4 4 4M5 12v8h14v-8"/>'
  };
  const store = {
    get(k, d) { try { const v = localStorage.getItem("ny26:" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("ny26:" + k, JSON.stringify(v)); } catch {} }
  };
  const img = id => id ? `${id}.webp` : null;
  const bg = id => id ? `style="background-image:url('${img(id)}')"` : "";
  const bullet = (l, big) => `<span class="bul${big ? " lg" : ""}${LINE[l] === "#FCCC0A" ? " y" : ""}" style="background:${LINE[l] || "#808183"}" aria-label="linha ${l}">${l}</span>`;
  const place = id => T.places[id];

  function nyNow() {
    const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false })
      .formatToParts(new Date()).map(x => [x.type, x.value]));
    return { date: `${p.year}-${p.month}-${p.day}`, min: (+p.hour % 24) * 60 + +p.minute };
  }
  const dObj = s => { const [y, m, d] = s.split("-").map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  const dateLong = s => { const d = dObj(s); return `${DOW[d.getUTCDay()]}, ${d.getUTCDate()} de ${MON[d.getUTCMonth()]}`; };
  const toMin = t => /^\d\d:\d\d$/.test(t) ? (+t.slice(0, 2)) * 60 + +t.slice(3) : null;
  const todayIdx = () => T.days.findIndex(d => d.date === nyNow().date);

  /* current / next stop for a day */
  function liveState(day) {
    const now = nyNow(); const isToday = day.date === now.date;
    if (!isToday) return { isToday, cur: -1, next: 0 };
    let cur = -1, last = null;
    day.stops.forEach((s, i) => { const m = toMin(s.t) ?? (last != null ? last + 1 : null); if (m != null) { last = m; if (m <= now.min) cur = i; } });
    return { isToday, cur, next: Math.min(cur + 1, day.stops.length - 1) };
  }

  /* map links */
  const ll = p => `${p.lat},${p.lon}`;
  const appleTo = (p, mode) => `https://maps.apple.com/?daddr=${ll(p)}&dirflg=${mode === "walk" ? "w" : "r"}`;
  const appleFromTo = (a, b, mode) => `https://maps.apple.com/?saddr=${a.join(",")}&daddr=${b.join(",")}&dirflg=${mode === "walk" ? "w" : "r"}`;
  function dayMap(day) {
    const pts = []; day.stops.forEach(s => { const p = place(s.p); if (p && s.p !== "jfk") { const k = ll(p); if (pts[pts.length - 1] !== k) pts.push(k); } });
    if (pts.length < 2) return pts.length ? `https://maps.apple.com/?q=${pts[0]}` : "#";
    const wp = pts.slice(1, -1).join("|");
    return `https://www.google.com/maps/dir/?api=1&origin=${pts[0]}&destination=${pts[pts.length - 1]}${wp ? "&waypoints=" + encodeURIComponent(wp) : ""}&travelmode=walking`;
  }

  function legLine(s) {
    const L = s.leg; if (!L) return "";
    if (L.mode === "subway") { const sb = T.subway[L.sub]; return `${sb.lines.map(l => bullet(l)).join(" ")} ${esc(sb.from)} → ${esc(sb.stops[sb.stops.length - 1].replace(/ \(.*\)/, ""))}`; }
    return esc(L.text);
  }

  /* ---------- tab bar ---------- */
  function tabbar(active) {
    const tabs = [["roteiro", "#/", "cal", "Roteiro"], ["ingressos", "#/ingressos", "ticket", "Ingressos"], ["metro", "#/metro", "train", "Metrô"], ["dicas", "#/dicas", "info", "Dicas"]];
    return `<div class="tabbar"><nav aria-label="Seções">${tabs.map(([k, h, ic, l]) => `<a href="${h}" ${k === active ? 'aria-current="page"' : ""}>${I(ic)}${l}</a>`).join("")}</nav></div>`;
  }

  /* ---------- DAY ---------- */
  function viewDay(n) {
    const di = n ? Math.min(Math.max(+n, 1), T.days.length) - 1 : (todayIdx() >= 0 ? todayIdx() : 0);
    const day = T.days[di]; const st = liveState(day); const ti = todayIdx();
    const now = nyNow();
    const daysTo = Math.round((dObj(T.start) - dObj(now.date)) / 864e5);
    const fi = st.isToday ? st.next : 0; const fs = day.stops[fi]; const fp = place(fs.p);
    const label = st.isToday ? (st.cur === -1 ? "Primeira parada" : (fi === st.cur ? "Agora" : "Próximo")) : "Primeira parada";
    const seg = T.days.map((d, i) => { const dd = dObj(d.date); return `<a href="#/dia/${d.n}" class="${i === di ? "on" : ""}${i === ti ? " today" : ""}" aria-label="Dia ${d.n}, ${DOW[dd.getUTCDay()]}">${DOW3[dd.getUTCDay()]}<b>${dd.getUTCDate()}</b></a>`; }).join("");
    const rows = day.stops.map((s, i) => {
      if (i === fi) return "";
      const p = place(s.p); const cls = st.isToday && i < st.cur ? "past" : (st.isToday && i === st.cur ? "now" : "");
      return `<a class="row ${cls}" href="#/lugar/${s.p}/${day.n}/${i}">
        <div class="th" ${bg(p.img)}>${p.img ? "" : I(s.p === "hotel" ? "door" : "pin")}</div>
        <div class="tx"><div class="n">${esc(p.name)}</div>
        <div class="s"><span class="tm">${esc(s.t)}</span>${s.leg ? " · " : ""}${legLine(s)}</div>
        ${s.note ? `<div class="note">${esc(s.note)}</div>` : ""}</div>${I("chev").replace('class="ico"', 'class="ico chev"')}</a>`;
    }).join("");
    return `<div class="screen">
      <header class="head"><small>${dateLong(day.date)} · Dia ${day.n} de ${T.days.length}</small><h1>${esc(day.title)}</h1>
      ${daysTo > 0 ? `<div class="count">${I("sun")}Faltam ${daysTo} ${daysTo === 1 ? "dia" : "dias"} pra viagem</div>` : ""}</header>
      <nav class="seg" aria-label="Dias da viagem">${seg}</nav>
      <a class="feat" href="#/lugar/${fs.p}/${day.n}/${fi}">
        <div class="img" ${bg(fp.img)}><span class="pill">${label} · ${esc(fs.t)}</span></div>
        <div class="n">${esc(fp.name)}</div>
        <div class="s">${esc(fs.note || fp.addr)}</div>
      </a>
      <div class="actions">
        <a class="btn pri" href="${dayMap(day)}" target="_blank" rel="noopener">${I("map")}Mapa do dia</a>
        <a class="btn" href="${appleTo(fp, fs.leg && fs.leg.mode === "walk" ? "walk" : "transit")}" target="_blank" rel="noopener">${I("pin")}Como chegar</a>
      </div>
      <div class="list">${rows}</div>
    </div>${tabbar("roteiro")}`;
  }

  /* ---------- PLACE ---------- */
  function viewPlace(id, dn, si, tab) {
    const p = place(id); if (!p) return viewDay();
    const day = dn ? T.days[+dn - 1] : null; const s = day ? day.stops[+si] : null;
    const gal = (p.gallery || (p.img ? [p.img] : []));
    const credit = gal[0] && C[gal[0]] ? `Foto: ${C[gal[0]].a} · ${C[gal[0]].l}` : "";
    const tabs = [["ver", "O que ver", p.see], ["dicas", "Dicas", p.tips], ["redor", "Ao redor", p.around], ["chegar", "Como chegar", null]].filter(t => t[0] === "chegar" || (t[2] && t[2].length));
    const cur = tabs.find(t => t[0] === tab) ? tab : tabs[0][0];
    const icon = { ver: "eye", dicas: "tip", redor: "near" };
    let pane = "";
    if (cur === "chegar") {
      const L = s && s.leg;
      if (L && L.mode === "subway") {
        const sb = T.subway[L.sub];
        pane = `<a class="leg" href="#/rota/${L.sub}"><div class="bs">${sb.lines.map(l => bullet(l, true)).join("")}</div><div style="flex:1"><b>${esc(sb.title)}</b><span>${sb.stops.length} paradas · ~${sb.mins} min · desce em ${esc(sb.stops[sb.stops.length - 1].replace(/ \(.*\)/, ""))}</span></div>${I("chev")}</a>
        <div class="stack"><a class="btn pri" href="#/rota/${L.sub}">${I("train")}Ver o passo a passo</a><a class="btn" href="${appleFromTo(sb.from_ll, sb.to_ll, "transit")}" target="_blank" rel="noopener">${I("ext")}Abrir no Apple Maps</a></div>`;
      } else if (L) {
        pane = `<div class="leg">${I(L.mode === "transfer" ? "car" : "walk")}<div style="flex:1"><b>${esc(L.text)}</b><span>${esc(p.addr)}</span></div></div>
        <div class="stack"><a class="btn pri" href="${appleTo(p, "walk")}" target="_blank" rel="noopener">${I("ext")}Abrir rota a pé no Apple Maps</a></div>`;
      } else {
        pane = `<div class="leg">${I("pin")}<div style="flex:1"><b>${esc(p.addr)}</b><span>Ponto de partida do dia</span></div></div>
        <div class="stack"><a class="btn pri" href="${appleTo(p, "transit")}" target="_blank" rel="noopener">${I("ext")}Abrir no Apple Maps</a></div>`;
      }
    } else {
      const items = tabs.find(t => t[0] === cur)[2];
      pane = items.map(([t, d]) => `<div class="it"><div class="ic">${I(icon[cur])}</div><div><b>${esc(t)}</b><p>${esc(d)}</p></div></div>`).join("");
    }
    const nx = day && day.stops[+si + 1]; const np = nx && place(nx.p);
    const tk = p.ticket && T.tickets.find(t => t.id === p.ticket);
    const backTo = day ? `#/dia/${day.n}` : "#/";
    return `<div class="screen ${nx ? "has-next" : ""}">
      <div class="gal">
        ${gal.length ? `<div class="slides">${gal.map(g => `<div ${bg(g)} role="img" aria-label="${esc(p.name)}"></div>`).join("")}</div>` : `<div class="noimg">${esc(p.name.split(" ").map(w => w[0]).slice(0, 2).join(""))}</div>`}
        <a class="back" href="${backTo}" aria-label="Voltar">${I("back")}</a>
        ${credit ? `<span class="cr">${esc(credit)}</span>` : ""}
      </div>
      <div class="sheet">
        <h1>${esc(p.name)}</h1>
        <div class="meta">${day ? `Dia ${day.n} · ${esc(s.t)} · ` : ""}${esc(p.addr)}</div>
        ${s && s.note ? `<div class="meta">${esc(s.note)}</div>` : ""}
        <p class="sum">${esc(p.summary)}</p>
        ${tk ? ticketRow(tk, true) : ""}
        <div class="tabs" role="tablist">${tabs.map(([k, l]) => `<button role="tab" aria-selected="${k === cur}" data-tab="${k}">${l}</button>`).join("")}</div>
        <div class="pane">${pane}</div>
        ${s && s.alt ? `<a class="leg" href="#/lugar/${s.alt}/${day.n}/${si}" style="margin-top:18px"><div style="flex:1"><b>Alternativa: ${esc(place(s.alt).name)}</b><span>${esc(place(s.alt).summary)}</span></div>${I("chev")}</a>` : ""}
      </div>
      ${nx ? `<div class="next"><div class="in"><a class="t" href="#/lugar/${nx.p}/${day.n}/${+si + 1}"><b>Próximo: ${esc(nx.t)}</b><span>${esc(np.name)}</span></a>
        <a class="btn accent" href="${nx.leg && nx.leg.mode === "subway" ? "#/rota/" + nx.leg.sub : appleTo(np, "walk")}" ${nx.leg && nx.leg.mode === "subway" ? "" : 'target="_blank" rel="noopener"'}>Como chegar</a></div></div>` : ""}
    </div>${tabbar("roteiro")}`;
  }

  /* ---------- SUBWAY ROUTE ---------- */
  function viewRoute(id) {
    const r = T.subway[id]; if (!r) return viewMetro();
    const c = LINE[r.lines[0]] || "#808183";
    const lastStop = r.stops[r.stops.length - 1];
    const owner = T.days.find(d => d.stops.some(s => s.leg && s.leg.sub === id));
    const ride = r.stops.map((st, i) => `<li class="${i === r.stops.length - 1 ? "end" : ""}">${esc(st)}${i === r.stops.length - 1 ? "<span>desça aqui</span>" : ""}</li>`).join("");
    return `<div class="screen">
      <header class="mhead"><a class="topbar" href="${owner ? "#/dia/" + owner.n : "#/metro"}">${I("back")}${owner ? `Dia ${owner.n}` : "Metrô"}</a><h1>${esc(r.title)}</h1></header>
      <section class="route">
        <div class="top"><div style="display:flex;gap:4px">${r.lines.map(l => bullet(l, true)).join("")}</div><div><b>${r.lines.length > 1 ? "Linha " + r.lines.join(" ou ") : "Linha " + r.lines[0]}</b><span>Sentido ${esc(r.dir)}</span></div></div>
        <div class="facts"><div>Paradas<b>${r.stops.length}</b></div><div>Tempo<b>~${r.mins} min</b></div><div>Desce em<b>${esc(lastStop.replace(/ \(.*\)/, "").replace(/–.*/, ""))}</b></div></div>
      </section>
      ${r.note ? `<div class="alert">${I("warn")}<span>${esc(r.note)}</span></div>` : ""}
      <ol class="steps" style="--line-c:${c}">
        <li class="step"><div class="k">${I("walk")}</div><div><h3>Vá até a estação ${esc(r.from)}</h3><p>${esc(r.walkIn)}</p></div></li>
        <li class="step"><div class="k">${I("tap")}</div><div><h3>Passe na catraca com o celular</h3><p>Aproximem o iPhone (Apple Pay) do leitor <strong>OMNY</strong>. Cada um com o seu aparelho.</p></div></li>
        <li class="step"><div class="k">${I("sign")}</div><div><h3>Plataforma "${esc(r.dir)}"</h3><p>Confiram a placa antes de descer a escada. O letreiro do trem tem que mostrar <strong>${esc(r.sign)}</strong>.</p></div></li>
        <li class="step" style="--line-c:${c}"><div class="k">${bullet(r.lines[0])}</div><div><h3>Fiquem ${r.stops.length} ${r.stops.length === 1 ? "parada" : "paradas"} no trem</h3><ul class="ride">${ride}</ul></div></li>
        <li class="step"><div class="k">${I("exit")}</div><div><h3>Saiam em ${esc(lastStop.replace(/ \(.*\)/, ""))}</h3><p>${esc(r.exit.replace(/^[^:]{2,40}:\s*/, ""))}</p></div></li>
      </ol>
      <div class="mfoot"><a class="btn pri" href="${appleFromTo(r.from_ll, r.to_ll, "transit")}" target="_blank" rel="noopener">${I("ext")}Abrir no Apple Maps</a></div>
    </div>${tabbar("metro")}`;
  }

  /* ---------- METRO LIST ---------- */
  function viewMetro() {
    const blocks = T.days.map(d => {
      const legs = d.stops.filter(s => s.leg && s.leg.mode === "subway");
      if (!legs.length) return "";
      return `<div class="sect">Dia ${d.n} · ${esc(d.title)}</div><div class="list" style="margin-top:0">${legs.map(s => { const r = T.subway[s.leg.sub];
        return `<a class="row" href="#/rota/${s.leg.sub}"><div class="th" style="background:none;width:auto;gap:3px;display:flex">${r.lines.map(l => bullet(l, true)).join("")}</div><div class="tx"><div class="n">${esc(r.title)}</div><div class="s"><span class="tm">${esc(s.t)}</span>· ${r.stops.length} paradas · ~${r.mins} min</div></div>${I("chev")}</a>`; }).join("")}</div>`;
    }).join("");
    const g = T.tips.find(x => x.group === "Metrô");
    return `<div class="screen"><header class="head"><small>Todos os trajetos da viagem</small><h1>Metrô</h1></header>
      <div class="tipg">${g.items.map(([t, d]) => `<div class="it"><div class="ic">${I("train")}</div><div><b>${esc(t)}</b><p>${esc(d)}</p></div></div>`).join("")}</div>
      ${blocks}</div>${tabbar("metro")}`;
  }

  /* ---------- TICKETS ---------- */
  const STATUS = { comprado: "Comprado", comprar: "Falta comprar", decidir: "A decidir", local: "Pagar no local" };
  function ticketState(t) { const m = store.get("tk", {}); return m[t.id] || t.status; }
  function ticketRow(t, inline) {
    const s = ticketState(t); const p = place(t.place);
    const done = s === "comprado" || s === "feito";
    const right = done ? `<span class="ok">${I("check")}Comprado</span>${t.status !== "comprado" ? `<button class="mark" data-tk="${t.id}" data-to="${t.status}">Desfazer</button>` : ""}`
      : `${t.url ? `<a class="buy" href="${t.url}" target="_blank" rel="noopener">Comprar ${I("ext")}</a>` : `<span class="tag">${STATUS[s]}</span>`}<button class="mark" data-tk="${t.id}" data-to="feito">Marcar comprado</button>`;
    return `<div class="tk"${inline ? ' style="border-top:1px solid var(--line);margin-top:14px"' : ""}>
      ${inline ? "" : `<a class="th" href="#/lugar/${t.place}" ${bg(p.img)}>${p.img ? "" : esc(p.name[0])}</a>`}
      <div class="tx"><div class="n">${esc(t.name)}</div><div class="s">${esc(t.when)}${t.price ? " · " + esc(t.price) : ""}${t.site ? " · " + esc(t.site) : ""}</div>${s === "decidir" && !done ? '<div class="s" style="color:var(--warn);font-weight:700">A decidir</div>' : ""}</div>
      <div class="r">${right}</div></div>`;
  }
  function viewTickets() {
    const all = T.tickets; const st = t => ticketState(t);
    const done = all.filter(t => ["comprado", "feito"].includes(st(t)));
    const todo = all.filter(t => !done.includes(t));
    const pct = Math.round(done.length / all.length * 100);
    return `<div class="screen"><header class="head"><small>Comprem antes de ir · links oficiais</small><h1>Ingressos</h1></header>
      <div class="prog">${done.length} de ${all.length} resolvidos</div><div class="bar"><i style="transform:scaleX(${pct / 100})"></i></div>
      ${todo.length ? `<div class="sect">Pendentes</div><div class="list" style="margin-top:0;border-top:0">${todo.map(t => ticketRow(t)).join("")}</div>` : ""}
      ${done.length ? `<div class="sect">Resolvidos</div><div class="list" style="margin-top:0;border-top:0">${done.map(t => ticketRow(t)).join("")}</div>` : ""}
      <p class="credits">A marcação fica salva só neste celular. Preços e horários podem mudar: confiram no site oficial antes de comprar.</p>
    </div>${tabbar("ingressos")}`;
  }

  /* ---------- TIPS ---------- */
  function viewTips() {
    const icon = { "Metrô": "train", "Dinheiro": "money", "Comer": "food", "Saúde e segurança": "heart", "Clima": "sun" };
    const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
    return `<div class="screen"><header class="head"><small>Pra ter sempre à mão</small><h1>Dicas</h1></header>
      ${standalone ? "" : `<div class="install">${I("share")}<div><b>Instale na tela de início</b>No Safari, toque em Compartilhar e depois em "Adicionar à Tela de Início". Abra uma vez com internet e o app passa a funcionar offline.</div></div>`}
      ${T.tips.map(g => `<div class="sect">${esc(g.group)}</div><div class="tipg">${g.items.map(([t, d]) => `<div class="it"><div class="ic">${I(icon[g.group] || "tip")}</div><div><b>${esc(t)}</b><p>${esc(d)}</p></div></div>`).join("")}</div>`).join("")}
      <details class="credits"><summary>Créditos das fotos</summary><ul>${Object.entries(C).map(([k, c]) => `<li>${esc(place(Object.keys(T.places).find(id => T.places[id].img === k || (T.places[id].gallery || []).includes(k)))?.name || k)}: ${esc(c.a)}, ${esc(c.l)}${c.u ? `, <a href="${c.u}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ""}</li>`).join("")}</ul></details>
    </div>${tabbar("dicas")}`;
  }

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, "").split("/");
    let html;
    switch (h[0]) {
      case "dia": html = viewDay(h[1]); break;
      case "lugar": html = viewPlace(h[1], h[2], h[3], h[4]); break;
      case "rota": html = viewRoute(h[1]); break;
      case "metro": html = viewMetro(); break;
      case "ingressos": html = viewTickets(); break;
      case "dicas": html = viewTips(); break;
      default: html = viewDay();
    }
    $app.innerHTML = html;
    window.scrollTo(0, 0);
    document.title = "NY 2026";
  }
  $app.addEventListener("click", e => {
    const tb = e.target.closest("[data-tab]");
    if (tb) { const h = location.hash.replace(/^#\/?/, "").split("/"); h[4] = tb.dataset.tab; history.replaceState(null, "", "#/" + h.slice(0, 5).map(x => x ?? "").join("/")); const y = scrollY; route(); scrollTo(0, y); return; }
    const mk = e.target.closest("[data-tk]");
    if (mk) { const m = store.get("tk", {}); m[mk.dataset.tk] = mk.dataset.to; store.set("tk", m); const y = scrollY; route(); scrollTo(0, y); }
  });
  addEventListener("hashchange", route);
  const off = () => { let b = document.querySelector(".offline"); if (!navigator.onLine) { if (!b) { b = document.createElement("div"); b.className = "offline"; b.textContent = "Sem internet · roteiro salvo no celular"; document.body.appendChild(b); } } else if (b) b.remove(); };
  addEventListener("online", off); addEventListener("offline", off);
  route(); off();
  setInterval(() => { if (/^#\/?(dia|$)/.test(location.hash) || !location.hash) { const y = scrollY; route(); scrollTo(0, y); } }, 60000);
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
