export const GridItem = ({ nombre, imageUrl, informacionNutricional,calorias }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-2">{nombre}</h2>
      <img src={imageUrl} alt={nombre} className="w-full h-auto mb-2 rounded-lg" />
      <div className="text-sm">
        <p className="mb-1 font-medium text-lg">Información nutricional: <span className="text-sm">100gr</span></p>
        <ul>
            <li  className="list-disc ml-4"> <span className="font-medium">Calorias:</span> {calorias}</li>
            <li  className="list-disc ml-4"> <span className="font-medium">Carbohidratos:</span>{informacionNutricional.carbohidratos}</li>
            <li  className="list-disc ml-4"> <span className="font-medium">Proteinas:</span>{informacionNutricional.proteinas}</li>
            <li className="list-disc ml-4"> <span className="font-medium">Grasas:</span>{informacionNutricional.grasas}</li>
        </ul>
      </div>
    </div>
  );
};