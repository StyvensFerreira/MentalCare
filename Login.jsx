import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">MentaCare</h1>
      <input
        type="text"
        placeholder="Nombre"
        className="w-full max-w-sm mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full max-w-sm mb-4 p-2 border rounded"
      />
      <button
        className="w-full max-w-sm p-2 bg-black text-white rounded mb-2"
        onClick={() => navigate("/chat")}
      >
        Iniciar sesión
      </button>
      <button className="w-full max-w-sm p-2 text-blue-600 underline">
        Registrarse
      </button>
    </div>
  );
}