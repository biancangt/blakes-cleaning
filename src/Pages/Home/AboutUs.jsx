export default function AboutUs() {
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    maxWidth: "1200px",
    width: "100%",
    marginBottom: "3rem",
    textAlign: "left",

    border: "1px solid rgba(0, 0, 0, 0.1)", // borda sutil no container do card
    borderRadius: "12px",                    // bordas arredondadas
    padding: "1.5rem",                       // espaço interno
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)", // sombra leve
    background: "#f9f1e4"
  };

  return (
    <section
      id="aboutUs"
      className="about--section"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* Título único */}
      <h2
        className="about--us-section--heading about--us-title"
        style={{ marginBottom: "3rem" }}
      >
        About Us
      </h2>

      {/* Primeira seção: imagem e texto lado a lado, dentro do "card" com borda */}
      <div className="about--us--section" style={cardStyle}>
        <div
          className="about--section--img"
          style={{ flex: "1", minWidth: "300px", textAlign: "center" }}
        >
          <img
            src="/img/about-us.jpg"
            alt="About Us"
            style={{ width: "100%", height: "auto", maxWidth: "500px", borderRadius: "8px" }}
          />
        </div>
        <div
          className="about--us--section--content--box about--section--box"
          style={{ flex: "1", minWidth: "300px" }}
        >
          <p style={{ marginBottom: "1rem" }}>
            Based in Austin, TX, our company has proudly served the Austin area
            for over 5 years, offering dependable and detail-oriented home
            cleaning services tailored to your lifestyle. We understand how
            valuable your time is, and our goal is to give you back your
            weekends by taking care of the cleaning—so you can focus on what
            truly matters.
          </p>
          <p>
            From recurring cleanings to move-in/move-out services, we bring
            consistency, professionalism, and a personal touch to every home we
            care for. Our trusted team is dedicated to creating clean, calm,
            and welcoming spaces—because we believe a clean home is the
            foundation for a happier, healthier life.
          </p>
        </div>
      </div>

      {/* Segunda seção: imagem e texto lado a lado, dentro do mesmo tipo de "card" */}
      <div className="about--us--section" style={{ ...cardStyle, marginBottom: 0 }}>
        <div
          className="about--section--img"
          style={{ flex: "1", minWidth: "300px", textAlign: "center" }}
        >
          <img
            src="/img/our-mission.png"
            alt="Our Mission"
            style={{ width: "100%", height: "auto", maxWidth: "500px", borderRadius: "8px" }}
          />
        </div>
        <div
          className="about--us--section--content--box about--section--box"
          style={{ flex: "1", minWidth: "300px" }}
        >
          <p style={{ marginBottom: "1rem" }}>
  Our mission is to provide the highest quality cleaning services with integrity and respect for our clients’ homes and time.
</p>
<p style={{ marginBottom: "1rem" }}>
  We strive to innovate and improve continuously, ensuring that every home we touch becomes a sanctuary for families and individuals alike.
</p>
<p style={{ marginBottom: "1rem" }}>
  Making sure your living space is cozy and comfortable — a place where you can truly relax and recharge.
</p>
<p>
  Our goal is to maintain your home as a peaceful refuge, so you and your family can enjoy quality time together without worrying about the chores. We believe a clean home fosters well-being, happiness, and a welcoming atmosphere for everyone.
</p>

        </div>
      </div>
    </section>
  );
}
