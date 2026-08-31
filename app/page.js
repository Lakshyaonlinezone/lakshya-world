<nav>
      <button
        className={active === "home" ? "active" : ""}
        onClick={() => setActive("home")}
      >
        Home
      </button>

      <button
        onClick={() =>
          document
            .getElementById("categories")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Categories
      </button>

      <button onClick={() => setActive("trending")}>
        Trending
      </button>
    </nav>
  </header>

  <section className="hero">
    <div>
      <p className="eyebrow">
        MOVIES • MUSIC • ENTERTAINMENT
      </p>

      <h1>
        Welcome to <span>Lakshya World</span>
      </h1>

      <p className="sub">
        अपने original और properly authorized entertainment content को एक जगह व्यवस्थित करें।
      </p>

      <div className="search">
        <span>🔍</span>

        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Movie, music या video खोजें..."
        />
      </div>
    </div>
  </section>

  <section id="categories" className="section">
    <div className="sectionHead">
      <div>
        <p className="eyebrow">EXPLORE</p>
        <h2>All Categories</h2>
      </div>
    </div>

    <div className="grid">
      {categories.map(c => (
        <button
          key={c.id}
          className={
            "category " +
            (active === c.id ? "selected" : "")
          }
          onClick={() => setActive(c.id)}
        >
          <span className="icon">{c.icon}</span>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </button>
      ))}
    </div>
  </section>

  {active === "mp3" && (
    <section className="section">
      <div className="sectionHead">
        <div>
          <p className="eyebrow">AUDIO LIBRARY</p>
          <h2>🎧 Bhojpuri MP3 Songs</h2>
        </div>

        <button
          className="back"
          onClick={() => setActive("home")}
        >
          ← Back Home
        </button>
      </div>

      <div className="contentGrid">
        {filteredSongs.map((song, i) => (
          <article className="card" key={i}>
            <div className="songImage">
              <img
                src={song.image}
                alt={song.title}
              />
            </div>

            <div className="cardBody">
              <small>🎵 Bhojpuri MP3</small>

              <h3>{song.title}</h3>

              <p>{song.artist}</p>

              <audio controls style={{ width: "100%" }}>
                <source
                  src={song.audio}
                  type="audio/mpeg"
                />
                आपका browser audio support नहीं करता।
              </audio>

              <div className="actions">
                <a
                  href={song.audio}
                  download
                  className="download"
                >
                  ⇩ Download MP3
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!filteredSongs.length && (
        <p className="empty">
          कोई song नहीं मिला।
        </p>
      )}
    </section>
  )}

  {active !== "mp3" && (
    <section className="section contentSection">
      <div className="sectionHead">
        <div>
          <p className="eyebrow">LIBRARY</p>

          <h2>
            {active === "home"
              ? "Featured Content"
              : categories.find(c => c.id === active)?.title}
          </h2>
        </div>

        {active !== "home" && (
          <button
            className="back"
            onClick={() => setActive("home")}
          >
            ← All Content
          </button>
        )}
      </div>

      <div className="contentGrid">
        {shown.map((item, i) => (
          <article className="card" key={i}>
            <div className="thumb">
              <span>
                {categories.find(
                  c => c.id === item.category
                )?.icon || "▶️"}
              </span>
            </div>

            <div className="cardBody">
              <small>{item.type}</small>

              <h3>{item.title}</h3>

              <div className="actions">
                <button className="watch">
                  ▶ Watch
                </button>

                <button
                  className="download"
                  onClick={() =>
                    alert(
                      "Download link केवल उस content के लिए जोड़ें जिसके अधिकार आपके पास हों।"
                    )
                  }
                >
                  ⇩ Download
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!shown.length && (
        <p className="empty">
          कोई content नहीं मिला।
        </p>
      )}
    </section>
  )}

  <section className="notice">
    <h2>Creator Friendly Platform</h2>

    <p>
      यह starter website है। केवल अपना या properly
      licensed/authorized content ही उपलब्ध कराएँ।
    </p>
  </section>

  <footer>
    <div className="footerBrand">
      LAKSHYA <b>WORLD</b>
    </div>

    <p>
      © {new Date().getFullYear()} Lakshya World.
      All rights reserved.
    </p>

    <div className="links">
      <a href="#categories">Categories</a>
      <a href="#">Privacy</a>
      <a href="#">Copyright</a>
      <a href="#">Contact</a>
    </div>
  </footer>
</main>
);
}
