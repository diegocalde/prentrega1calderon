import {useEffect, useState } from "react"
import { getProducts, getProductById, getProductByCategory} from "../services";



export const useGetProductById = (id)=>{
   const [productsData, setProductsData] = useState([]);
   useEffect(()=> {
    getProductById(id).then((response)=>{
       setProductsData(response.data)
    })
    .catch((error)=>{
        console.log(error);
    });
        },[]);

        return { productsData}
}

export const useGetProducts = (limit)=> {
    const [productsData, setProductsData] = useState([]); 
}

export const useGetProductBycategory = (category)=> {
    const [productsData, setProducstData] = useState([]); 

    useEffect(()=> {
        getProductByCategoryetProductByCategory(category).then((response)=>{
            console.log(response)
           setProducstData(response.data.products)
        })
        .catch((error)=>{
            console.log(error);
        });
            },[category]);
    
            return { producstData}
}
