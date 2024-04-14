import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <nav className="bg-gray-800 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-shrink-0 flex justify-between">
              <Link className="text-white text-2xl font-bold" to={'/NutriFoods'}>NutriFoods</Link>
              <div>
           <button className={`md:hidden ${isOpen ? 'hidden' : 'block'}`}onClick={() => setIsOpen(!isOpen)}> 
           <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-8" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336"/></svg>
           </button>
        
            <button className={`text-white md:hidden ${isOpen ? 'block' : 'hidden'}` } onClick={() => setIsOpen(!isOpen)}>
              
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-8 text-white" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/></svg>

            </button>
           </div>
            </div>

          
           
              <div className={`${isOpen? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0`}>
                <NavLink to="/NutriFoods" className={({isActive}) => `text-gray-300 hover:text-white ${isActive ? 'underline text-gray-400' : ''}`}>
                  Inicio
                </NavLink>
                <NavLink to="/NutriFoods/carbohidratos" className={({isActive}) => `text-gray-300 hover:text-white ${isActive ? 'underline text-gray-400' : ''}`}>
                  Carbohidratos
                </NavLink>
                <NavLink to="/NutriFoods/proteinas" className={({isActive}) => `text-gray-300 hover:text-white ${isActive ? 'underline text-gray-400' : ''}`}>
                  Proteinas
                </NavLink>
                <NavLink to="/NutriFoods/grasas" className={({isActive}) => `text-gray-300 hover:text-white ${isActive ? 'underline text-gray-400' : ''}`}>
                  Grasas
                </NavLink>
                <NavLink to="/NutriFoods/frutas" className={({isActive}) => `text-gray-300 hover:text-white ${isActive ? 'underline text-gray-400' : ''}`}>
                  Frutas
                </NavLink>
              </div>
            </div>
      </nav>
    );
};

