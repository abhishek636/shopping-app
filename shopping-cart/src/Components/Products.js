import React from 'react';

import OrderBy from './OrderBy';

class Products extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      selectedOrder: "",
    }
  }

  handleOrderBy = (event) => {
    this.setState({ selectedOrder : event.target.value});
  }

  handleOrderProducts = (order, sizes, products) => {
    let sortedProducts = [...products];
    if(sizes.length > 0){
      sortedProducts = sortedProducts.filter((p) => {
        for(const size of sizes){
          if(p.availableSizes.includes(size)){
            return true;
          }
        }
      })
    }

    if(order === 'highest'){
      sortedProducts = sortedProducts.sort((a,b) => b.price - a.price);
    }
    if(order === 'lowest'){
      sortedProducts = sortedProducts.sort((a,b) => a.price - b.price);
    }
    return sortedProducts;
  }
  
  render(){
    let {selectedOrder} = this.state;
    
    
    let products=this.handleOrderProducts(
      selectedOrder, 
      this.props.selectedSizes, 
      this.props.products
    );

    return (
      <div>
        <div>
          <p className='length'>{`${products.length} Product${products.length > 1 ? 's': ''} found.`} {' '}</p>
          <OrderBy selectedOrder={selectedOrder}  handleOrderBy={this.handleOrderBy}/>
        </div>
        <div className='flex wrap'>
          {products.map((product) => {
            return(
              <div 
                className='product-item'
                key={product.id}>
                <div className='p-abs'>{product.isFreeShipping===true ? "Free Shipping" : " "}</div>
                <img
                  src={'/static/products/' + product.sku + '_1.jpg'}
                  alt={product.title}
                />
                <div>
                  <p className='title'>{product.title}</p>
                  <div className='line'></div>
                  <h3 className='price'>
                    {product.currencyFormat + product.price}
                  </h3>
                  <button onClick={()=> this.props.handleAddToCart(product)}>Add To Cart</button>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default Products;

