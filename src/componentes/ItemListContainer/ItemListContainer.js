
import ItemList from '../ItemList/ItemList';
import React ,{ useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';
import { useParams } from 'react-router-dom';
import products2 from '../utils/remerasMock2';


const ItemListContainer = ()=>{

  const { categoryId } =useParams();
  const [listProducts, setListProducts] = useState([])

  const filterCategory = products2.filter((product) => product.category == categoryId)

const getProduct= 
new Promise( (resolve,reject) =>{
    setTimeout( () =>{
        if (categoryId){
     resolve(filterCategory)
    }else{
        resolve(products2)
    }

    }, 2000)
   
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







  const getProducts = async () => {
      const productCollection = collection(db, 'productos')
      const productSnapshot = await getDocs(productCollection)
      const productList = productSnapshot.docs.map( (doc) => {
          let product = doc.data()
          product.id = doc.id
          return product
      })
      return productList
  }



  useEffect(() => {
      getProducts()
      .then((res) => {
          setListProducts(res)
      })
    },[])



    return(
        <>
        
        <div className="lista-productos">
            <ItemList dataProducts={listProducts}/>
        </div>

        </>
    );

}

    export default ItemListContainer



    



