import { Snackbar } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {

    var token = localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={props =>
                token && token !== '' ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { snackbar: true }
                        }}
                    />
                )
            }
        />
    )
};