import axios from "axios";
import {  createContext, useEffect, useState } from "react";


export const ProductContext=createContext();

export function ProductProvider({children}){
    const [products,setProducts]=useState(null);
  const [selectedCategory,setSelectedCategory]=useState(null);
    useEffect(()=>  {
        axios
        .get(`https://fakestoreapi.com/products/${selectedCategory? "/category/"+selectedCategory:''}`)
        .then((res)=>setProducts(res.data));
    },[selectedCategory]  );
     

     return(

        <ProductContext.Provider value={{products,setSelectedCategory}}>
            {children}
        </ProductContext.Provider>
     );

    }
