import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";
import FormDemo1 from "./FormDemo1";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCard = (product) => {
    let newCart = this.state.cart;

    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + "added to cart!");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + "added to cart!");
  };
  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Row>
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route exach path="/" element={
                    <ProductList
                      addToCard={this.addToCard}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />}/>

                  <Route exach path="/cart" element={<CartList cart={this.state.cart} removeFromCart={this.removeFromCart} />} />
                  <Route exach path="/form1" element={<FormDemo1/>}></Route>
                  <Route path="*" element={<NotFound/>}/>
                  
                 
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
