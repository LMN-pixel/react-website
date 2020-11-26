import React from 'react';
import notify from '../Components/Notification';
import axios from 'axios';

const ProductContext = React.createContext();



class ProductProvider extends React.Component {
    state = {
        products: [],
        detailProduct:0,
        categoryPage: 'Shop',
        cart: [],
        wishlist:[],
        orders: [],
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
        try {
            let res = await axios.get('/products/');
            tempProducts = res.data;

                this.setState( () => {
                    return {
                        products:tempProducts,
                    }
                });
           
        }  catch(err) {
                console.log(err);
            }
        /*storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState( () => {
            return {
                products:tempProducts,
                filters:tempProducts
            }
        }); */
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id );
            return product;
    };

    changeCategory = async (e) => {
        const categoryTitle = e.target.innerText;
        console.log(categoryTitle);
         this.setState(() => {
            return {
                categoryPage: categoryTitle
            }
        }, () => {this.categoryFilter()}
         )};

    categoryFilter = async () => {
       
        let categ = this.state.categoryPage;
       let res = await axios.get('/products');
        let tempProducts = res.data;
       console.log(res.data);
       
       this.setState(()=>{
           return {
               products:tempProducts.filter(prod => prod.category[0] === categ[0])
           }
       })
    };
        /*let tempProducts = [...this.state.products];
       
        let filteredProducts = tempProducts.filter(prod => prod.category == this.state.categoryPage);
        this.setState(() => {
            return {
                products: [...filteredProducts]
            }
        });
        };*/
        /*let tempProducts = axios.get('http://localhost:3000/storeProducts/')
        .then(res => {
            this.setState( {tempProducts : res.data })
            this.setState( () => {
                return { filterList : tempProducts }
            });

        })*/
 

    handleDetail = (id) => {
       const product = this.getItem(id);
       this.setState(() => {
           return { detailProduct: product }
       });
    };

    addToCart = (id) => {
        //post request to user.cart to add to their cart array
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
        //axios put request to add to wishlist,
        //then get the new wishlisst list and replace the array
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

        document.querySelector('body').style.background = 'rgba(0,0,0,0.6)';
        this.setState(() => {
           return { modalOpen: true }
        }) 
        };
 
    


    closeModal = () => {

        document.querySelector('body').style.background = 'none';
        this.setState(() => {
            return { 
                modalOpen: false
          }})
            
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
        //delete request to user(id).cart(id)
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
        //axios delete request to user(id).wishlist(id)
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
        //axios delete request to user.cart to clear the cart
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
        //delete request to user(id).wishlist
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
    addToOrders= (id) => {
        //only after selecting payment
        //post request for user.orders,(to orders array) 
        //post request to orders(for admin use) with user details.(cart,carttotals,country,address,number,name, email)
        //if payment is mpesa, popup for whatever info is required
        //if on delivery, show order complete, you will receive confirmation of your order soon
        let tempProducts = [...this.state.orders];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
 

        this.setState(() => {
            return {
                
                orders: [...this.state.orders, product]
            };
        });
    };
    
     handleCheck = (e) => {

             let filtered = e.target.value;
             console.log(filtered);
             this.checkFilterColor(filtered);
        
     };

     checkFilterColor = async(filtered) => {
        
         let TempProducts = [...this.state.products];

         TempProducts = TempProducts.filter(prod => prod.color === filtered);        
        this.setState(() => {
            return {
             products: [...TempProducts] 
            }
                
         })

     };
     handleCheckPrice = (e) => {
         

        let filtered = e.target.value;
        console.log(filtered);
        this.checkFilterPrice(filtered);
   
};
    
     checkFilterPrice = async (filtered) => {
         let res = await axios.get('/products');
         let TempProducts = res.data;

         this.setState(() => {
             return {
                 products: TempProducts.filter(item => 
                    item.price <= filtered
                    )
             }
         });
     };

     handleCheckSize = (e) => {
         

        let filtered = e.target.value;
        console.log(filtered);
        this.checkFilterSize(filtered);
   
};
    
     checkFilterSize = async (filtered) => {
         let res = await axios.get('/products');
         let TempProducts = res.data;

         this.setState(() => {
             return {
                 products: TempProducts.filter(item => 
                    item.size === filtered
                    )
             }
         });
     };

     handleClearFilters = () => {
         
         this.setProducts();
     }

     searchHandler = async (e) => {
         let search = e.target.value;
         let res = await axios.get('/products');
         let TempProducts = res.data;

         TempProducts = TempProducts.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase()));

         this.setState(()=> {
            
             if (search='' ){
                 return {
                     products: res.data
                 } 
                 
             } else {
                 return {
                     products: TempProducts
                 }
             }
         })
     }




   

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
                handleCheckSize: this.handleCheckSize,
                checkFilterSize: this.checkFilterSize,
                handleClearFilters: this.handleClearFilters,
                searchHandler: this.searchHandler,
                addToOrders: this.addToOrders,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}