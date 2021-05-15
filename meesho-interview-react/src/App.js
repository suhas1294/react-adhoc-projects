import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        }
    }

    addToCartHandler = (newItem) => {
        let updatedCart = {};
        let updatedItemList = [...this.state.cart.items, newItem];
        updatedCart.items = updatedItemList;
        this.setState({ cart: updatedCart });
    }
    
    increaseQtyHandler = (productId) => {
        let currentItems = [...this.state.cart.items];
        let itemToBeUpdated = currentItems.filter(item => item.id === +productId)[0];
        itemToBeUpdated.quantity = itemToBeUpdated.quantity + 1;
        let nonChangedItems = currentItems.filter(item => item.id !== +productId)
        
        let pIndex = currentItems.findIndex(i => i.id ===productId);
        nonChangedItems.splice(pIndex,0, itemToBeUpdated);
        this.setState({ cart: { items: nonChangedItems } });
    }
    
    decreaseQtyHandler = (productId) => {
        let currentItems = [...this.state.cart.items];
        let itemToBeUpdated = currentItems.filter(item => item.id === +productId)[0];
        let nonChangedItems = currentItems.filter(item => item.id !== +productId)
        let pIndex = currentItems.findIndex(i => i.id ===productId);
        if (itemToBeUpdated.quantity === 1) {
            console.log("deleting the item from cart as current qty is 1");
        } else {
            itemToBeUpdated.quantity = itemToBeUpdated.quantity - 1;
            nonChangedItems.splice(pIndex,0, itemToBeUpdated)
        }
        let updatedCart = {items: nonChangedItems};
        this.setState({ cart: updatedCart });
    }


    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList 
                        products={this.state.products} 
                        cart={this.state.cart}
                        onAdd={this.addToCartHandler}
                        onIncrease={this.increaseQtyHandler}
                        onDecrease={this.decreaseQtyHandler}
                    />
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
