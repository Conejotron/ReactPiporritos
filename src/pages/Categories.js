import React from 'react';
import { useParams } from "react-router-dom";
import ItemListContainer from '../componentes/ItemListContainer';

export const Category = () => {
    const { categoryId } = useParams();

    return (
        <div className="row justify-content-right">
        <h3 align="right">Estás en la categoria {categoryId}</h3>
        <ItemListContainer />
        </div>
    )
};



export default Category;