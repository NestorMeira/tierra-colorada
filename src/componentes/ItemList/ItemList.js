
import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({dataProducts})=> {

    return(
    <>
     {dataProducts.map( (product2) => {    
                return (
                    <>
                        <ItemProduct key="prod" data={product2}/>
                    </>
                )
            })}


    </>
    )

}


export default ItemList 