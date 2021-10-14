import testimonialsData from "../../data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="menu-page">
      <h2>Testimonials</h2>
      <div>
        {testimonialsData.map((t) => {
          return (
            <>
              <h3>{t.displayName}</h3>
              <p>{t.title}</p>
              <p>{t.body}</p>
            </>
          );
        })}
      </div>
    </section>
  );
}
