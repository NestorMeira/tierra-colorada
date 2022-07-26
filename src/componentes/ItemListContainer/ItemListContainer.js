import ItemProduct from '../ItemProduct/ItemProduct';

const ItemListContainer = ({section})=>{
    return(
        <div className="lista-productos">
            <h2>{section}</h2> 
        <ItemProduct titulo="remera1" precio={2500} image={'remera1.png'} className="remera1"/>
        <ItemProduct titulo="remera1" precio={2500} image={'remera3.png'} className="remera3"/>
        <ItemProduct titulo="remera2" precio={2700} image={'remera2.png'} className="remera2"/>
           </div>
   
    );

}

    export default ItemListContainer