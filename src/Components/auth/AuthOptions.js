import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {UserConsumer, UserProvider } from '../../context.js/UserContext';



export default function AuthOptions() {

    const history = useHistory();

    return (
        <UserProvider>
            <UserConsumer>
                {user => (
                    <>
            {//userData.user 
           // true ? (
             //   <p>user.firstName</p>
              //  ) : (
                <p>Sign In</p>
          //  )
            }
                </>
                )}
            </UserConsumer>
        </UserProvider>
        
    );
}