export default function Progress({donations, targetAmount}) {

  const totalRaised = donations.reduce((accumulator, current) => accumulator + current.amount, 0);
  return (
    <section className="donation">
    <h2>
      Raised <span className="secondary">${totalRaised}</span> of
      <span className="secondary"> ${targetAmount}</span>
    </h2>
  </section>
  );
}

