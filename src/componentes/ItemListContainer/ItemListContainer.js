
import ItemList from '../ItemList/ItemList';
import React ,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products2 from '../utils/remerasMock2';


const ItemListContainer = ()=>{

  const { categoryId } =useParams();
  const [listProducts, setListProducts] = useState([])

  const filterCategory = products2.filter((product) => product.categoria === categoryId)

const getProduct= 
new Promise( (resolve,reject) =>{
    setTimeout( () =>{
        if (categoryId){
     resolve(filterCategory)
    }else{
        resolve(products2)
    }
    },1000)
})

useEffect( () =>{
    getProduct
.then( (res) =>{
    
    setListProducts(res)
})
.catch( (error)=>{
    console.log("la llamada fallo")
} )
.finally( () =>{
})

},[categoryId])

    return(
        <>
        
        <div className="lista-productos">
            <ItemList dataProducts={listProducts}/>
        </div>

        </>
    );

}

    export default ItemListContainer



    



