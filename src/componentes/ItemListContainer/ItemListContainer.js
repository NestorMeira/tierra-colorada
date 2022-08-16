
import ItemList from '../ItemList/ItemList';
import products2 from '../utils/remerasMock2';
import React ,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({section})=>{

const {categoryName} = useParams()

const [listProducts, setListProducts]= useState([])

const filterCategory = products2.filter((products2) => products2.category === categoryName)


const getProducts= 
new Promise( (resolve,reject) =>{
    setTimeout( () =>{
        if (categoryName){
     resolve(filterCategory)
    }else{
        resolve(products2)
    }

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
        <>
        
        <div className="lista-productos">
            <h2>{section}</h2> 
       <ItemList dataProducts={listProducts} filter={categoryName}/>
        </div>

        </>
    );

}

    export default ItemListContainer