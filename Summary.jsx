export default function Summary() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Resumen</h2>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="font-semibold mb-2">Estado emocional</h3>
        <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-gray-500">[Gráfica simulada]</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Recomendaciones</h3>
        <ul className="list-disc pl-5">
          <li>Descansa 10 minutos</li>
          <li>Realiza respiración profunda</li>
        </ul>
      </div>
    </div>
  );
}