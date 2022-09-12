import ItemDetail from '../ItemDetail/ItemDetail';
import React ,{ useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = ()=>{


const {id} = useParams()
const [productData, setProductData]= useState({})

useEffect( () =>{
  getProduct()
  .then((res) => {
    setProductData(res)
  })
},[id]);



const getProduct = async () => {
  const docRef = doc(db, "productos", id)
  const docSnapshot = await getDoc(docRef)
  let product = docSnapshot.data()
  product.id = docSnapshot.id
  return product

}


    return(
      <div> 
      
  {productData? <ItemDetail data={productData}></ItemDetail>
   : <p>cargando... </p>   }       
      </div>

    )
}

export default ItemDetailContainer