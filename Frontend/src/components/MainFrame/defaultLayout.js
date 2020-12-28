import React from 'react';
import Header from 'components/header/index';
import Footer from 'components/footer/index';

export default function Layout(props) {
    //commponents from props
    const component =props.renderingComponent;
    

    return (
        <>
            <Header/>
            <div className='mainRenderComponent' key='{component}'>
                {component}
            </div>
            <Footer />
        </>
    )
}
