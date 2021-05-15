import React, {Component} from "react";
import "./index.css";

export default class ProductList extends Component {
    constructor() {
        super();
    }

    state = {
        products: []
    }

    componentDidMount(){
        let newProdList = this.loadData()
        this.setState({products: newProdList});
    }

    loadData = () => {
        let itemIds = this.props.cart.items.map(i => i.id );
        let newProdList = this.props.products.map(product => {
            let pState = {...product};
            if(itemIds.includes(product.id)){
                pState.presentInCart = true;
            }else{
                pState.presentInCart = false;
            }
            return pState;
        });
        return newProdList;
    }

    componentDidUpdate(prevProps){
        let oldCart = JSON.stringify(prevProps.cart);
        let newCart = JSON.stringify(this.props.cart);
        if(oldCart !== newCart){
            let newProdList = this.loadData();
            this.setState({products: newProdList});
        }
    }

    render() {
        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {this.state.products.map((product, i) => {
                    return (
                        <section className="w-30"
                                 data-testid={'product-item-' + i}
                                 key={product.id}>
                            <div className="card ma-16">
                                <img alt="Your Cart" src={product.image}
                                     className="d-inline-block align-top product-image"/>
                                <div className="card-text pa-4">
                                    { product.presentInCart ? console.log('Its present') : console.log('Not present') }
                                    <h5 className="ma-0 text-center">{product.name}</h5>
                                    <p className="ma-0 mt-8 text-center">${product.price}</p>
                                </div>
                                <div className="card-actions justify-content-center pa-4">
                                    {
                                        product.presentInCart ? 
                                        (<div className="layout-row justify-content-between align-items-center">
                                            <button className="x-small icon-only outlined"
                                                    data-testid="btn-quantity-subtract"
                                                    onClick={() => this.props.onDecrease(product.id)}>
                                                <i className="material-icons">remove</i>
                                            </button>
                                            {true ? console.log(JSON.stringify(this.props.cart.items)) : console.log('something wrong')}
                                            <input type="number"
                                                dataTip={'smbdfb'}
                                                disabled
                                                value={
                                                    this.props.cart.items.length > 0 
                                                    ? 
                                                    (this.props.cart.items.filter(i => i.id == product.id).length > 0 ? this.props.cart.items.filter(i => i.id == product.id)[0].quantity : 0) 
                                                    : 0
                                                }
                                                className="cart-quantity" data-testid="cart-quantity"/>

                                            <button className="x-small icon-only outlined"
                                                    data-testid="btn-quantity-add"
                                                    onClick={() => this.props.onIncrease(product.id)}>
                                                <i className="material-icons">add</i>
                                            </button>
                                        </div>) : 
                                        (
                                            <button 
                                                className="x-small outlined" 
                                                data-testid="btn-item-add"
                                                onClick={() => this.props.onAdd({id: product.id, item: product.name, quantity: 1})}
                                            >
                                                Add To Cart
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </section>
                    )
                })}

            </div>

        );
    }
}

export const UpdateMode = {
    ADD: 1,
    SUBTRACT: 0
}
