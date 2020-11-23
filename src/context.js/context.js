import React from 'react';
import {storeProducts, detailProduct} from '../data';
import notify from '../Components/Notification';
import axios from 'axios';
import API from '../baseapi';

const ProductContext = React.createContext();
//Provider
//Consumer


class ProductProvider extends React.Component {
    state = {
        products: [],
        filters: [],
        detailProduct:detailProduct,
        categoryPage: 'Shop',
        cart: [],
        wishlist:[],
        modalOpen:false,
        currency: 'Ksh',
        cartSubTotal: 0,
        cartShipping: 200,
        cartTotal: 0

    };

    componentDidMount() {
        this.setProducts(); 
        
    }

    setProducts = async () => {
        let tempProducts = [];
       /* try {
            let res = await axios.get('http://localhost:3000/storeProducts/');
            tempProducts = res.data;

                this.setState( () => {
                    return {products:tempProducts}
                });
           
        }  catch(err) {
                console.log(err);
            }*/
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState( () => {
            return {
                products:tempProducts,
                filters:tempProducts
            }
        });
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id );
            return product;
    };

    changeCategory = (e) => {
        const categoryTitle = e.target.innerText;
        this.setState(() => {
            return {
                categoryPage: categoryTitle
            }
        });
        this.categoryFilter();
    };

    categoryFilter = () => {
        let tempProducts = [...this.state.products];
        tempProducts = tempProducts.filter(item => 
            item.category.includes(this.state.categoryPage)
        );
        this.setState(() => {
            return {
               
                filters: [...tempProducts]

            }
        });
        /*let tempProducts = axios.get('http://localhost:3000/storeProducts/')
        .then(res => {
            this.setState( {tempProducts : res.data })
            this.setState( () => {
                return { filterList : tempProducts }
            });

        })*/
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

    openModal = () => {
        this.setState(() => {
           return { modalOpen: true }},() =>{
               document.addEventListener('click', this.closeModal);
           })
           
            
        };
        
    
    
    
   /* openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct:product,
                modalOpen : true }
        })
    }*/

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }}, () =>{
                document.removeEventListener('click', this.closeModal);
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

    shipping = (e) => {
        const shippingCost = e.target.value;
        this.setState(() => {
            return {
                cartShipping: shippingCost
            }
        })
    }
    
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => {return subTotal += item.total});
        //const tempShipping = 300;
        //const shipping = tempShipping;
        const shipping = this.state.cartShipping;
        const total = subTotal + shipping;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartShipping: shipping,
                cartTotal: total
            }
        })

    };
    unCheck = () => {
        document.getElementById('check').checked = false;
    };

    changeCurrency = (e) => {
        const tempCurrency = e.target.value;
        this.setState(() => {
            return {
                currency: tempCurrency
            }
        });
       
    };

    /*changeCost = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];

        let defaultProductPrice = product.price;
        let changingProductPrice = defaultProductPrice;
        let tempProductPrice = changingProductPrice;
       switch(this.state.currency) {

        case 'Tzs':
            tempProductPrice=changingProductPrice;
            let TzPrice = tempProductPrice * 22;
            product.price = TzPrice;
            break;

        case 'Ugx':
            tempProductPrice=changingProductPrice;
            let UgPrice = tempProductPrice * 34;
            product.price = UgPrice;
            break;
        
        default:
            
            break;
       }

    } */
    

     handleCheck = (e) => {
         

             let filtered = e.target.value;
             console.log(filtered);
             this.checkFilterColor(filtered);
        
     };

     checkFilterColor = (filtered) => {
         let TempProducts = [...this.state.products];

        
        this.setState(() => {
            return {
             filters: TempProducts.filter(item => 
                item.color.includes(filtered)) 
            }
                
         })

     };
     handleCheckPrice = (e) => {
         

        let filtered = e.target.value;
        console.log(filtered);
        this.checkFilterPrice(filtered);
   
};
    
     checkFilterPrice = (filtered) => {
         let TempProducts = [...this.state.products];

         this.setState(() => {
             return {
                 filters: TempProducts.filter(item => 
                    item.price < filtered
                    )
             }
         });
     };




   

    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                changeCategory: this.changeCategory,
                categoryFilter: this.categoryFilter,
                addToCart: this.addToCart,
                addToWishlist: this.addToWishlist,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                clearWishlist: this.clearWishlist,
                removeItemWishlist: this.removeItemWishlist,
                unCheck: this.unCheck,
                shipping: this.shipping,
                changeCurrency: this.changeCurrency,
                handleCheck: this.handleCheck,
                handleCheckPrice: this.handleCheckPrice,
                checkFilterColor: this.checkFilterColor,
                checkFilterPrice: this.checkFilterPrice,
                changeCostTzs: this.changeCostTzs
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}