import sample1 from "../assets/sample.jpg"

export default function AthleteModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h3>Aldo Fonseca</h3>
        <img src={sample1} alt="" />
        <p><strong>Gym:</strong> The Warrior Factory - Hamilton</p>
        <p><strong>Division:</strong> Amateur Males</p>
        <p><strong>Competitions:</strong> NNL 2023 Finals, UNAA Regionals, Canadian Ninja League Qualifiers</p>
        <p><strong>Favourite Food:</strong> Sushi 🍣</p>
      </div>
    </div>
  );
}
