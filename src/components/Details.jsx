import Day from "./Day";
import "@/styles/Details.css";

function Details({ city }) {
  const nextDays = city.days.slice(1);

  return (
    <section className="details">
      <div className="days">
        {nextDays.map((day, index) => (
          <Day key={day.id} day={day} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Details;
