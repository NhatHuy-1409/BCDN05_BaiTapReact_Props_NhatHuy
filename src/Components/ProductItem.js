import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        let { shoe, setStateModal } = this.props;
        return (
            <div className="card" style={{height:"100%"}}>
                <img src={shoe.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{shoe.name}</h5>
                    <p className="card-text">{shoe.price} $</p>
                    <button onClick={() => {
                        let newshoe = shoe;
                        setStateModal(newshoe);
                    }} data-toggle="modal" data-target="#staticBackdrop" href="#" className="btn btn-dark">Xem chi tiết</button>
                </div>
            </div>

        )
    }
}
