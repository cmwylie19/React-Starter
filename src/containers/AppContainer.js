import React, { Fragment } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { ThemeProvider, AuthProvider } from '../reducers'
import { TopPanel, BottomPanel } from '../components/index'
import { RouterProvider } from '../reducers/RouterReducer'
import { UserForm } from '../components/UserForm'

import { Home } from '../components/Home'

export default function AppContainer() {
    return (
        <RouterProvider>
            <ThemeProvider>
            <AuthProvider>
                <TopPanel />
                <Fragment>
                    <Route component={UserForm} path="/" exact />
                    <Route component={Home} path="/home" exact />
                </Fragment>
                <BottomPanel />
            </AuthProvider>
            </ThemeProvider>
        </RouterProvider>
    );
}