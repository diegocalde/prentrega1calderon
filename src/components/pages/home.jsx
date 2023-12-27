 import {useEffect} from "react";
 import ItemListContainer from "./components/src/hooks/useProducts";
import {useGetProducts} from "../hooks/useProducts";
 
 export const home = ()=> {
useEffect(()=>{
    document.title = "Mi tienda - Home";
})
    const {productsData}= useGetProducts(15);
    return(
        <ItemListContainer  productsData={productsData}/>
    )
}