import ItemList from '../ItemList/ItemList';
import React ,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import products2 from '../utils/Mdf';
import './ItemListContainer.scss'


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


const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };




    return(
        <>

        <div className="lista-productos">
        <button className='top2' onClick={scrollToTop}><KeyboardDoubleArrowUpOutlinedIcon className='topIcon2'/></button> 
            <ItemList dataProducts={listProducts}/>
        </div>

        </>
    );

}

    export default ItemListContainer



    



