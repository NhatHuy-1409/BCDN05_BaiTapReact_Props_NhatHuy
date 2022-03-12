import React, { Component } from 'react'

export default class Cart extends Component {
    renderCart = () => {
        let { arrCart , deleteShoe,changeQuantity } = this.props;
        return arrCart.map((shoe, index) => {
            return (
                <tr key={index}>
                    <td scope="col">{shoe.id}</td>
                    <td scope="col">
                        <img src={shoe.image} alt="" style={{ width: '100px' }} />
                    </td>
                    <td scope="col">{shoe.name}</td>
                    <td scope="col">
                        <button className='btn btn-info' onClick={()=>{changeQuantity(shoe.id,1)}}>+</button>
                        <span> {shoe.soLuong} </span>
                        <button className='btn btn-success' onClick={()=>{changeQuantity(shoe.id,-1)}}>-</button>
                        </td>
                    <td scope="col">{shoe.price} $</td>
                    <td scope="col">{shoe.soLuong * shoe.price} $</td>
                    <td scope="col">
                        <button className='btn btn-danger' onClick={()=>{
                            deleteShoe(shoe.id)
                        }}>Xóa</button>
                    </td>
                </tr>
            )
        })

    }
    render() {
        return (
            <div>
                {/* Button trigger modal
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalCart">
                    Launch demo modal
                </button> */}
                {/* Modal */}
                <div className="modal fade" id="modalCart" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Your cart</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Mã SP</th>
                                            <th scope="col">Hình</th>
                                            <th scope="col">Tên</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Thành tiền</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCart()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
