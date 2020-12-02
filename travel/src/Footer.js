import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col mr-auto">
            <p>
              Insolita Travels | Sicily DMC & Travel Agency (Licence nr.
              2226/S2-Tur)
            </p>
            <p>Viale della Gioventù, 26 A -95014 Giarre (Catania)</p>
            <p>
              <img src="http://51.77.82.133:86/images/insolita.png"></img>
            </p>
            <p className="button">
              <input type="button" onClick="show_alert()" value="Download" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
