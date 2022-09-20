import React from 'react'; 
import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from './Layout/Footer/Footer';
import Header from "./Layout/Header/Header";


export const HomeTemplate = (props) => { //prop = path exact component
    const { Component, ...restProps } = props;

    return <Route {...restProps} render= {(propsRoute) => {
        //props.location, props.history, props.match
        console.log("restProps", restProps);

        return <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <Footer />
               
        </Fragment>
    }} />
}

