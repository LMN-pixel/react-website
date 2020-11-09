import React from 'react';
import {storeProducts, detailProduct} from './data';
import notify from './Components/Notification';

const ProductContext = React.createContext();
//Provider
//Consumer


class ProductProvider extends React.Component {
    state = {
        products: [], 
        detailProduct:detailProduct,
        cart: [],
        wishlist:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal: 0,
        cartShipping: 0,
        cartTotal: 0

    };
    componentDidMount() {
        this.setProducts(); 
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState( () => {
            return {products:tempProducts}
        });
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id );
            return product;
    };

    handleDetail = (id) => {
       const product = this.getItem(id);
       this.setState(() => {
           return { detailProduct: product }
       });
    };

    addToCart = (id) => {
        
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            };
        },()=> {
            this.addTotals();
        });
        notify();
    };

    addToWishlist = (id) => {
        
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inWishlist = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                products: tempProducts,
                wishlist: [...this.state.wishlist, product]
            };
        });
       
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct:product,
                modalOpen : true }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        });
    };

    increment = (id) => {
        let tempCart = [...this.state.cart]; 
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart:[...tempCart]
            }
        },() => {this.addTotals()})

        };
    decrement = (id) => {
        let tempCart = [...this.state.cart]; 
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if(product.count === 0){
            this.removeItem(id);
        }
        else {
            product.total = product.count * product.price;

            this.setState(() => {
                return {
                    cart:[...tempCart]
                }
            },() => {this.addTotals()})
        }
        
    };
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart:[...tempCart],
                products: [...tempProducts]

            }
        },() => {
            this.addTotals();
        })


    };

    removeItemWishlist = (id) => {
        let tempwishProducts = [...this.state.products];
        let tempWishlist = [...this.state.wishlist];

        tempWishlist = tempWishlist.filter(item => item.id !== id);

        const index = tempwishProducts.indexOf(this.getItem(id));
        let removedwishProduct = tempwishProducts[index];
        removedwishProduct.inWishlist = false;
        removedwishProduct.count = 0;
        removedwishProduct.total = 0;

        this.setState(() => {
            return {
                wishlist:[...tempWishlist],
                products: [...tempwishProducts]

            }
        })


    };
    clearCart = () => {
        this.setState(() => {
            return {
                cart:[]
            };
        },() => {
            this.setProducts();
            this.addTotals();
        })
    };

    clearWishlist = () => {
        this.setState(() => {
            return {
                wishlist:[]
            };
        },() => {
            this.setProducts();
        })
    };
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => {return subTotal += item.total});
        const tempShipping = 300;
        const shipping = tempShipping;
        const total = subTotal + shipping;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartShipping: shipping,
                cartTotal: total
            }
        })

    };
	 
	




   

    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                addToWishlist: this.addToWishlist,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                clearWishlist: this.clearWishlist,
                removeItemWishlist: this.removeItemWishlist
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}