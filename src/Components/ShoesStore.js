import React, { Component } from 'react'
import Cart from './Cart'
import Modal from './Modal'
import ProductList from './ProductList'

export default class ShoesStore extends Component {

    arrShoes = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ]

    state = {
        productDetail: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        cart: []
    }
    setStateModal = (newProduct) => {
        this.setState({ productDetail: newProduct })
    }
    changeProduct = (maSP, number) => {
        let newShoe;
        if (maSP === 1 && number === -1) {
            newShoe = this.arrShoes.find((sp) => {
                return sp.id === this.arrShoes.length;
            })
        } else if (maSP === this.arrShoes.length && number === 1) {
            newShoe = this.arrShoes.find((sp) => {
                return sp.id === 1;
            })
        } else {
            newShoe = this.arrShoes.find((sp) => {
                return sp.id === maSP + number;
            })
        }
        this.setState({ productDetail: newShoe })
    }
    addCart = (shoe, id) => {
        //Dùng push nó sẽ đẩy thẳng vào mảng CŨ luôn và return lại độ dài mảng đó
        // this.state.cart.push(shoe)
        // this.setState({
        //     cart:this.state.cart 
        // })
        // console.log(this.state.cart);
        let { cart } = this.state;
        let newCart = []

        let shoeFind = cart.find((shoe) => shoe.id === id);
        if (shoeFind) {
            //TÌm thấy ???
            shoeFind.soLuong += 1;
            newCart = [...cart]
        } else {
            //ko thấy
            let newObjShoe = { ...shoe, soLuong: 1 }
            newCart = [...cart, newObjShoe]
        }
        this.setState({ cart: newCart })

    }
    deleteShoe = (id) => {
        let { cart } = this.state;
        let newCart = cart.filter((shoe) => shoe.id !== id)
        this.setState({ cart: newCart })

    }
    changeQuantity = (id, soLuong) => {
        let { cart } = this.state;
        let shoeFind = cart.find((shoe) => shoe.id === id);
        if (shoeFind) {
            shoeFind.soLuong += soLuong;
            if (shoeFind.soLuong === 0) {
                this.deleteShoe(id);
                return
            }
        }
        this.setState({ cart: cart })
    }
    sumCart = () => {
        let { cart } = this.state;
        let sum = cart.reduce((tong,shoe) => { 
            return tong += shoe.soLuong
         },0);
        // cart.map((shoe) => {
        //     return sum += shoe.soLuong
        // })
        return sum;
    }
    render() {
        return (
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h2 className='text-center my-4'>SHOES SHOP</h2>
                    <div className='d-flex ' data-toggle="modal" data-target="#modalCart" style={{ cursor: "pointer" }}>
                        <h2>Cart  <i className="fa fa-shopping-cart"></i></h2>
                        <div style={{ fontSize: "20px" }} className="cart-value ">{this.sumCart()}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <ul className="list-group">
                            <li className="list-group-item">Home</li>
                            <li className="list-group-item">Products</li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <ProductList productsData={this.arrShoes} setStateModal={this.setStateModal} addCart={this.addCart} />
                    </div>
                </div>
                <Modal changeProduct={this.changeProduct} content={this.state.productDetail} addCart={this.addCart}/>
                <Cart arrCart={this.state.cart} deleteShoe={this.deleteShoe} changeQuantity={this.changeQuantity} />
            </div>
        )
    }
}
