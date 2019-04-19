import React from 'react'
import './subheader.css'


export default ({ updateCurrentLocation }) => (
    <div className="subheader__links">

        <button className="subheader__links_btn" onClick={() => updateCurrentLocation('user')}><i className="fas fa-users"></i> User</button>
        <button className="subheader__links_btn" onClick={() => updateCurrentLocation('driver')}><i className="fas fa-truck-pickup"></i> Driver</button>

    </div>
)  