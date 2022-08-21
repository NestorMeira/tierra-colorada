import ItemDetail from '../ItemDetail/ItemDetail';
import products2 from '../utils/remerasMock2';
import React ,{ useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = ()=>{


const {id} = useParams()
const [productData, setProductData]= useState({})

// let coso= true;
// const promesa= (time, task) => {
//   return new Promise(( resolve,reject) =>{
//     setTimeout( ()=>{
//    (coso) ? resolve(task) : reject("Error")
      
//   },time);
//   });
// }

useEffect( () =>{
  getProduct()
  .then((res) => {
    setProductData(res)
  })
 
  // promesa(2000, products2.find( item => item.id === parseInt (id)))
  // .then((res) =>{
  //   setProductData(res)
  // }).catch((err) =>{
  //   console.log(err)
  // });
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
        <h1>Detalle</h1>
  {productData? <ItemDetail data={productData}></ItemDetail>
   : <p>cargando... </p>   }       
      </div>

    )
}

export default ItemDetailContainer