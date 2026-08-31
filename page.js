 "use client";

import { useMemo, useState } from "react";

const categories = [
  { id: "movies", icon: "🎬", title: "Movies", text: "अपनी और authorized movies देखें" },
  { id: "music", icon: "🎵", title: "Music Videos", text: "नए music videos" },
  { id: "web-series", icon: "📺", title: "Web Series", text: "Episodes और series" },
  { id: "serials", icon: "📽️", title: "Serials", text: "Authorized serial content" },
  { id: "albums", icon: "💿", title: "Video Albums", text: "Popular video albums" },
  { id: "mp3", icon: "🎧", title: "MP3 Songs", text: "Authorized audio downloads" },
  { id: "viral", icon: "🔥", title: "Viral Videos", text: "Trending entertainment videos" },
  { id: "trending", icon: "⭐", title: "Trending", text: "इस समय लोकप्रिय content" }
];

const demoContent = [
  { title: "Welcome to Lakshya World", category: "movies", type: "Featured" },
  { title: "New Music Release", category: "music", type: "Music" },
  { title: "Episode 01", category: "web-series", type: "Web Series" },
  { title: "Popular Entertainment", category: "viral", type: "Viral" },
  { title: "Latest MP3 Collection", category: "mp3", type: "Audio" },
  { title: "Trending Video", category: "trending", type: "Trending" }
];

export default function Home() {
  const [active, setActive] = useState("home");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    return demoContent.filter(x =>
      (active === "home" || x.category === active) &&
      x.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [active, query]);

  return (
    <main>
      <header className="header">
        <button className="brand" onClick={() => setActive("home")}>
          <span className="brandMark">LW</span>
          <span>LAKSHYA <b>WORLD</b></span>
        </button>
        <nav>
          <button className={active==="home" ? "active":""} onClick={()=>setActive("home")}>Home</button>
          <button onClick={()=>document.getElementById("categories").scrollIntoView({behavior:"smooth"})}>Categories</button>
          <button onClick={()=>setActive("trending")}>Trending</button>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">MOVIES • MUSIC • ENTERTAINMENT</p>
          <h1>Welcome to <span>Lakshya World</span></h1>
          <p className="sub">अपने original और properly authorized entertainment content को एक जगह व्यवस्थित करें।</p>
          <div className="search">
            <span>🔍</span>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Movie, music या video खोजें..." />
          </div>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="sectionHead">
          <div><p className="eyebrow">EXPLORE</p><h2>All Categories</h2></div>
        </div>
        <div className="grid">
          {categories.map(c => (
            <button key={c.id} className={"category "+(active===c.id?"selected":"")} onClick={()=>setActive(c.id)}>
              <span className="icon">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="section contentSection">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">LIBRARY</p>
            <h2>{active === "home" ? "Featured Content" : categories.find(c=>c.id===active)?.title}</h2>
          </div>
          {active !== "home" && <button className="back" onClick={()=>setActive("home")}>← All Content</button>}
        </div>

        <div className="contentGrid">
          {shown.map((item, i) => (
            <article className="card" key={i}>
              <div className="thumb"><span>{categories.find(c=>c.id===item.category)?.icon || "▶️"}</span></div>
              <div className="cardBody">
                <small>{item.type}</small>
                <h3>{item.title}</h3>
                <div className="actions">
                  <button className="watch">▶ Watch</button>
                  <button className="download" onClick={()=>alert("Download link केवल उस content के लिए जोड़ें जिसके अधिकार आपके पास हों।")}>⇩ Download</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {!shown.length && <p className="empty">कोई content नहीं मिला।</p>}
      </section>

      <section className="notice">
        <h2>Creator Friendly Platform</h2>
        <p>यह starter website है। इसमें अपने videos, thumbnails और वास्तविक download links जोड़ सकते हैं। केवल अपना या licensed/authorized content ही उपलब्ध कराएँ।</p>
      </section>

      <footer>
        <div className="footerBrand">LAKSHYA <b>WORLD</b></div>
        <p>© {new Date().getFullYear()} Lakshya World. All rights reserved.</p>
        <div className="links"><a href="#categories">Categories</a><a href="#">Privacy</a><a href="#">Copyright</a><a href="#">Contact</a></div>
      </footer>
    </main>
  );
}