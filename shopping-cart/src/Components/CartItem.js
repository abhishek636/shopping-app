function CartItem(props){
    return(
       <>
            <div className="flex middel">
              
                <img alt={props.title} src={'/static/products/'+ props.sku + '_2.jpg'} ></img>
               
                <div>
                    <p className="title">{props.title}</p>
                    <p>{props.availableSizes[1]} | {props.style}</p>
                    <p>Quantity: {props.quantity}</p>
                </div>
                <div>
                    <p className="p-absolute" onClick={()=>props.deleteItem(props.id)}>X</p>
                    <p className="price">{`${props.currencyFormat + props.price}`}</p>
                    <div className="btn">
                        <button onClick={()=>props.incrementQuantity(props.id)}>+</button>
                        
                        <button onClick={() => props.decrementQuantity(props.id)}>-</button>
                        
                    </div>
                </div>
            </div>
       </>
    )
}


export default CartItem