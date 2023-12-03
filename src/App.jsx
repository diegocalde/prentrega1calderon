import NavBarComponent from './components/navbarcomponent/NavBarComponent';
import ItemListComponent from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidgetComponent/CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';



 

const App =()=> {
 return (
<div style={{width:'100VW',height:'100vh'}}>
    <NavBarComponent/>
    <ItemListComponent greeting="hola bienvenido a mi tienda!"/>
    <CartWidget/>
</div>
 );
}

export default App
