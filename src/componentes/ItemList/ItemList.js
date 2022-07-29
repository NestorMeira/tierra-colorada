import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({dataProducts})=> {
    return(
    <>
        {dataProducts.map((products)=>{
            return <ItemProduct key={products.id} titulo="remera1" precio={2500} image={'remera1.png'} className="remera1" stock={10} data={products}/>
        })}
    </>
    )

}


export default ItemList 