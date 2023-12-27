import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBarComponent from '../components/navbarcomponent/NavBarComponent'; 
import {home} from '../pages/home';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';
import { Category } from '../components/pages/Category';

export const MainRouter = () => {

  return (

    <BrowserRouter>
        <NavBarComponent/>
        <Routes>

            <Route path='/' element = {<home/>} />
            <Route path='/item/:productId' element = {<ItemDetailContainer/>}/>
            <Route path='/category/id' element = {<Category/>}/>
        </Routes>
           


    </BrowserRouter>

  )

}

 