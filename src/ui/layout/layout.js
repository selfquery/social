import React from 'react'

import Header from '../../containers/header/header'
import Sidebar from '../../containers/sidebar/sidebar'

const Landing = (props) => {
    return (
        <div className="c-app c-default-layout">
            <Sidebar/>
            <div className="c-wrapper">
                <Header/>
                <div className="c-body">{props.children}</div>
                {/* <TheFooter/> */}
            </div>
        </div>
    )
}

export default Landing
