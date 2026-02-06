const ShortsSection = () => {
  return (
    <section>
      <h2 style={{ margin: "16px" }}>Shorts</h2>

      <div style={{
        display: "flex",
        gap: "12px",
        overflowX: "auto",
        padding: "16px"
      }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{
            width: "160px",
            height: "280px",
            background: "#000",
            borderRadius: "12px"
          }} />
        ))}
      </div>
    </section>
  );
};

export default ShortsSection;
