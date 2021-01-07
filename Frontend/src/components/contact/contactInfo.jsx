import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div class="contact-info">
        <h2 class="title text-center">Contact Info</h2>
        <address>
          <p>E-Shopper Inc.</p>
          <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
          <p>Newyork USA</p>
          <p>Mobile: +2346 17 38 93</p>
          <p>Fax: 1-714-252-0026</p>
          <p>Email: info@e-shopper.com</p>
        </address>
        <div class="social-networks">
          <h2 class="title text-center">Social Networking</h2>
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ContactInfo;
