import React, { Component } from 'react'
import './footer.css'

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <ul className="footer-list">
        <li><h3>Contributors:</h3></li>
          <li><a href="https://github.com/hoode1212" target="_blank">Eric Hood</a></li>
          <li><a href="https://github.com/ledwards614" target="_blank">Lindsey Edwards</a></li>
          <li><a href="https://github.com/dmf2990" target="_blank">Drew Frankin</a></li>
          <li><a href="https://github.com/rewkie" target="_blank">Chad Collins</a></li>
          <li><a href="https://github.com/nay9" target="_blank">Rene G.</a></li>
          <li><a href="https://github.com/tulasipinjala" target="_blank">Tulasi Pinjala</a></li>
        </ul>
        <h5>Pickup  	&copy;2019</h5>
      </footer>
    )
  }
}

export default Footer
