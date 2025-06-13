import { useNavigate } from "react-router-dom";

export default function MoodCheck() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">¿Cómo te sientes?</h2>
      <div className="flex space-x-4 mb-6">
        {["Muy bien", "Bien", "Normal", "Mal"].map((mood) => (
          <button
            key={mood}
            className="p-4 rounded-full bg-white border shadow"
            onClick={() => navigate("/summary")}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}