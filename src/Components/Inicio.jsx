import { ImagesMain } from "./ImagesMain";

export default function Inicio() {
  return (
    <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Información Nutricional de Alimentos</h1>
    <p className="text-lg text-gray-600 mb-6">
      Bienvenido a nuestra página dedicada a proporcionar información
      nutricional detallada sobre varios alimentos. Nuestro objetivo es ayudarte
      a comprender mejor los beneficios nutricionales y las características de
      los alimentos que consumes diariamente.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Busca la información nutricional de una amplia variedad de alimentos y descubre detalles importantes
        sobre su contenido calórico.
      
      Aquí encontrarás detalles sobre proteínas, carbohidratos, grasas y otros
      nutrientes esenciales presentes en alimentos como frutas, verduras,
      cereales, productos lácteos, carnes y más.
    </p>
    
    <ImagesMain/>
</div>
  )
}
