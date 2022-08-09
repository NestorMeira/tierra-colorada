
import ItemList from '../ItemList/ItemList';
import products2 from '../utils/remerasMock2';
import { useEffect, useState } from 'react';



const ItemListContainer = ({section})=>{


const [listProducts, setListProducts]= useState([])




const getProducts= new Promise( (resolve,reject) =>{
    setTimeout( () =>{
     resolve(products2)

    }, 2000)
   
})
    

useEffect( () =>{

    getProducts
.then( (res) =>{
    
    setListProducts(res)
})
.catch( (error)=>{
    console.log("la llamada fallo")
} )
.finally( () =>{

})
},[])



    return(
        <div className="lista-productos">
            <h2>{section}</h2> 
       <ItemList dataProducts={listProducts}/>
        </div>
   
    );

}

    export default ItemListContainer