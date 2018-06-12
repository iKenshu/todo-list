import React from 'react'
import './css/home-layout.css'


function HomeLayout(props) {
    return(
        <div className='Home-Layout'>
            { props.children }
        </div>
    )
}

export default HomeLayout