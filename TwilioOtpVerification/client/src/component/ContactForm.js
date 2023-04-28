import React, { Component } from "react";
import "./ContactForm.css";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { FaUserAlt, FaFlag, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// const style = {
//   width: "100%",
//   height: "100%",
// };
class ContactForm extends Component {
  render() {
    return (
      <div className="ContactForm">
        <div className="heading31">
          <p>CONTACT US</p>
        </div>
        <div className="formContainer">
          <div className="formLeft">
            <Map
              className="map"
              initialCenter={{
                lat: 19.00496,
                lng: 72.88515,
              }}
              google={this.props.google}
              zoom={13}
            />
          </div>
          <div className="formRight">
            <div className="toptext">
              <p>Kindly fill in the form to download brochure!</p>
            </div>
            <div className="form">
              <form action="">
                <div class="input-container">
                  <i class="fa fa-user icon">
                    <FaUserAlt />
                  </i>
                  <input
                    class="input-field"
                    type="text"
                    placeholder="Username"
                    name="usrnm"
                  />
                </div>

                <div class="input-container">
                  <i class="fa fa-envelope icon">
                    <MdEmail />
                  </i>
                  <input
                    class="input-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                </div>

                <div class="input-container">
                  <i class="fa fa-key icon">
                    <FaFlag />
                  </i>
                  <select class="form-control valid" name="country_code">
                    <option value="in">India (+91)</option>
                  </select>
                </div>

                <div class="input-container">
                  <i class="fa fa-key icon">
                    <FaPhoneAlt />
                  </i>
                  <input
                    class="input-field"
                    type="tel"
                    placeholder="Phone No."
                    name="tel"
                  />
                </div>

                <button type="submit" class="btn">
                  Register
                </button>
              </form>
            </div>
            <div className="terms">
              <p>
                I agree that by clicking on "Send", I am explicitly soliciting a
                call & Message from "Ajmera Greenfinity" or its associates on my
                mobile number to assist me
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0nI53p35nzrp7c_buPfiCBGcFYM1KLqE",
})(ContactForm);
// export default ContactForm;
