export function Hero() {
  return (
    <section className="elva-hero">
      <video
        className="elva-hero__video"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="elva-hero__overlay" />
      <div className="elva-hero__content">
        <p className="elva-hero__text">اكتشفي القطع التي تعبّر عنك</p>
      </div>
    </section>
  );
}
