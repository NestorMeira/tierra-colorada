import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({dataProducts})=> {

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