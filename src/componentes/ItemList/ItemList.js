import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({dataProducts})=> {
  console.log("info del contexto ",useContext(CartContext))
    return(
    <>
     {dataProducts.map( (product2) => {    
                return (
                    <>
                        <ItemProduct key={product2.id} data={product2}/>
                    </>
                )
            })}


    </>
    )

}


export default ItemList 