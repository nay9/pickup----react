import React from 'react'



export default ({ updateCurrentLocation }) => (
    <div>
        <button className="user__name btn" onClick={() => updateCurrentLocation('user')}>User</button>
        <button className="driver__page btn" onClick={() => updateCurrentLocation('driver')}>Driver</button>
        <button className="about__pickup btn">About</button>
</div>  )  