import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ItemCategory from '../componentes/ItemCategory.jsx';


export const Category = () => {
    const { categoryId } = useParams();
    

    return (
        <><h3>Estás en la categoria {categoryId}</h3>
          <main className="category-page-container">
            <ItemCategory category={categoryId} />
            <Link to="/products"> Volver atrás </Link>
          </main>
        </>
    )
};

export default Category;