import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/itemListContainer'
import { useGetProductBycategory } from '../hooks/useProducts';

export const Category = () => {
  const {id} = useParams();
  const {productsData} = useGetProductBycategory(id)

  return (
   <ItemListContainer productsData={productsData}/> 
  )
}
