import CartShow from "../CartShow/CartShow";

function CartItem ({cartPro}) {

    return(
        <div className="app">
            {cartPro.map(e =>
               <CartShow
               key={e.id}
               data={e}
               ></CartShow> )}
        </div>
    )
}

export default CartItem