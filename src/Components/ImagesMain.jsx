import { Link } from "react-router-dom"

export const ImagesMain = () => {
return ( <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-8 text-white">
      Nutrientes y Frutas
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* <!-- Div para Proteínas --> */}
      <div
        className="bg-cover bg-center h-72 p-4 rounded-lg shadow-lg grid-item flex items-center justify-center"
        style={{backgroundImage: "url('https://images.pexels.com/photos/6107729/pexels-photo-6107729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
      >
        <Link
          to="/NutriFoods/proteinas"
          className="text-3xl font-bold text-white hover:underline block mb-4"
          >Proteínas</Link>
      </div>

      {/* <!-- Div para Carbohidratos --> */}
      <div
        className="bg-cover bg-center h-72 p-4 rounded-lg shadow-lg grid-item flex items-center justify-center"
        style={{backgroundImage: "url('https://images.pexels.com/photos/1079020/pexels-photo-1079020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
      >
        <Link
          to="/NutriFoods/carbohidratos"
          className="text-3xl font-bold text-white hover:underline block mb-4"
          >Carbohidratos</Link
        >
      </div>

      {/* <!-- Div para Grasas --> */}
      <div
        className="bg-cover bg-center h-72 p-4 rounded-lg shadow-lg grid-item flex items-center justify-center"
        style={{backgroundImage: "url('https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
      >
        <Link
          to="/NutriFoods/grasas"
          className="text-3xl font-bold text-white hover:underline block mb-4"
          >Grasas</Link
        >
      </div>

      {/* <!-- Div para Frutas --> */}
      <div
        className="bg-cover bg-center h-72 p-4 rounded-lg shadow-lg grid-item flex items-center justify-center"
        style={{backgroundImage: "url('https://images.pexels.com/photos/1178610/pexels-photo-1178610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
      >
        <Link
          to="/NutriFoods/frutas"
          className="text-3xl font-bold text-white hover:underline block mb-4"
          >Frutas</Link
        >
      </div>
    </div>
  </div>
)
}
