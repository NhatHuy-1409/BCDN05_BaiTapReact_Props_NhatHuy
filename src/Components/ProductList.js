import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        let { productsData,setStateModal,addCart } = this.props;
        return (
            <div className='row'>
                {productsData.map((product) => {
                    return (
                        <div key={product.id} className="col-4">
                            <ProductItem shoe={product} setStateModal = {setStateModal} addCart = {addCart}/>
                        </div>
                    )
                })}

            </div>
        )
    }
}
