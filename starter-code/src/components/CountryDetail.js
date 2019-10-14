import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";
const countryDetailStyles = {
  textAlign: "left"
};

class CountryDetail extends React.Component {
  render() {
    
     let oneCountry = countries.find(c=>c.cca3==this.props.match.params.cca3);
     //notice the verticality problem if done like below
     /*
     let oneCountry = {};
    for (let i = 0; i < countries.length; i++) {
      if (this.props.match.params.cca3 == countries[i].cca3) {
        oneCountry = countries[i];
      }
      */
   
    return (
      <div className="col-7" style={countryDetailStyles}>
        <h1>{oneCountry.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{oneCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {oneCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {oneCountry.borders.map(border => {
                    //iterate borders map
                    //find bordercountry by border code
                    let borderCountry = countries.find(c=>c.cca3==border);
      
                    return (
                      <li>
                        <Link to={`/country/${borderCountry.cca3}`}>
                          {borderCountry.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
