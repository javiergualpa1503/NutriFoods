import { GridContainer } from './GridContainer';
import { GridItem } from './GridItem';
import { getFoodByType } from '../../helpers/getFoodByType';


const Food = ({tipo}) => {

  const products = getFoodByType(tipo)
    return (
    <> 
    <div className="container mx-auto p-4 h-screen">
      <h1 className="text-3xl font-bold mb-4">Productos Nutricionales</h1>
      <GridContainer>
        {products.map((product, index) => (
          <GridItem
            key={index}
            imageUrl={product.image}
            nombre={product.nombre}
            informacionNutricional={product.informacionNutricional}
            calorias={product.calorias}
          />
        ))}
      </GridContainer>
    </div>
    </>
    );
}

export default Food;