import React, { Component } from 'react'

export default class Modal extends Component {

    render() {
        let { content, changeProduct, addCart } = this.props;
        return (
            <div>
                <div>

                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Thông tin kỹ thuật</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className='text-center modal-img'>
                                        <i className="fas fa-chevron-left" onClick={() => {
                                            changeProduct(content.id, -1)
                                        }}></i>
                                        <img style={{ width: "300px" }} src={content.image} alt="" />
                                        <i className="fas fa-chevron-right" onClick={() => {
                                            changeProduct(content.id, 1)
                                        }}></i>
                                    </div>
                                    <table className="table table-striped">
                                        <thead>

                                            <tr>
                                                <td>Name</td>
                                                <td>{content.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>{content.price} $</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{content.description}</td>
                                            </tr>
                                            <tr>
                                                <td>Short Description</td>
                                                <td>{content.shortDescription}</td>
                                            </tr>
                                            <tr>
                                                <td>Quantity</td>
                                                <td>{content.quantity}</td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success" data-dismiss="modal" data-toggle="modal" data-target="#modalCart" onClick={
                                        () => { addCart(content, content.id) }

                                    }>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
