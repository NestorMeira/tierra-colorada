import CartShow from "../CartShow/CartShow";

function CartItem ({cartPro}) {

    return(
        <div className="App">
            {cartPro.map(e =>
               <CartShow
               key={e.id}
               data={e}
               ></CartShow> )}
        </div>
    )
}

export default CartItem