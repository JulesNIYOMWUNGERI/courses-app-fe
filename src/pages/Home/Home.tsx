import "./Home.css";

const cards = [
  {
    title: "Course management",
    image:
      "https://media.istockphoto.com/id/1011792694/photo/elevated-view-of-a-busy-open-plan-office.jpg?s=612x612&w=0&k=20&c=f-bXShoO_CyU0f1uSIDMk1CXj2IgCRqkG3KKOgBua9o=",
  },
  {
    title: "Course overview",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Administration",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPDfLiVh__Rhp4b1j9FTiKur67pK7ECEyzA&s",
  },
];

const Home = () => {
  return (
    <main className="card-grid">
      {cards.map((card, index) => (
        <div key={index} className="card" style={{ backgroundImage: `url(${card.image})` }}>
          <div className="overlay">
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </main>
  )
}

export default Home