import React from 'react';
import SideBar from './Accountsidemenu';
import OrderList from './OrderList';


export default class UserOrders extends React.Component {

    render() {

        return(
            <React.Fragment>
                <div className='container-fluid row mt-5'>
                    <div className='col-2 d-none d-md-block'>

                        <SideBar />
                    </div>
                    
                    <div className='col'>

                        <OrderList />
                    </div>
                </div>
            </React.Fragment>

        );
    }
}