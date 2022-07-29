import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import products from '../utils/productsMock';

const ItemListContainer = ({section})=>{


const [listProducts, setListProducts]= useState([])




const getProducts= new Promise( (resolve,reject) =>{
    setTimeout( () =>{
     resolve(products)

    }, 2000)
   
})
    

useEffect( () =>{

    getProducts
.then( (res) =>{
    // console.log("productos: ",res)
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