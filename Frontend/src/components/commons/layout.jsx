import React from 'react'

export default function Layout(props) {
    const component=props.Component;
    return (
        <div className="container">
            <div className="row">
                {component}
            </div>
        </div>
                    
    )
}
