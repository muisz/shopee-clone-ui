import React from 'react';

export default function(props){
    const renderBottomNav = () => {
        return(
            <>
                <div style={{marginTop: '3em'}}></div>
                <div className="bottom-nav">
                    {props.bottomNav}
                </div>
            </>
        );
    }

    return(
        <div className="main-layout">
            {props.children}
            {props.withBottomNav ? renderBottomNav() : null}
        </div>
    )
}