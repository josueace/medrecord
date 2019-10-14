import React from "react";
import { Link } from "react-router-dom";
const countryModuleStyle = {
  scroll: "overflow",
  textAlign: 'left"'
};
class Country extends React.Component {
	
  render() {
 let flag=`https://www.countryflags.io/${this.props.country.cca2}/flat/64.png`	
  
 return (
      <div style={countryModuleStyle}>
        <Link
          className="list-group-item list-group-item-action"
          to={`/country/${this.props.country.cca3}`}
        >
          <img src={flag}/> {this.props.country.name.common}
        </Link>
      </div>
    );
  }
}
export default Country;
