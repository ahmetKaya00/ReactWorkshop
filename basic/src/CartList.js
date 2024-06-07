import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

export default class CartList extends Component {
  render() {
    return (
      <div>
        <Table>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>
                    <Button color='danger' onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Table>
      </div>
    )
  }
}
