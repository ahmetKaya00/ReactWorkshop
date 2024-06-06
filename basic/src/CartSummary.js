import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
export default class CartSummary extends Component {
    renderSummary(){
        return (
            <div>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sepet - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
      
                  {
                  this.props.cart.map((cartItem => (
                    <DropdownItem key={cartItem.product.id}>
                    <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                        {cartItem.product.productName}
                    <Badge color="success">{cartItem.quantity}</Badge>
                    </DropdownItem>
                  )))}
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          );
    }
    renderEmtpyCart(){
        return(
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }
  render() {
    return <div>{this.props.cart.length>0?this.renderSummary():this.renderEmtpyCart()}</div>
  }
}
