import React from "react";
import {Title} from 'components/commons/titleChange';

const Contact = () => {
  return (
    <>
    <Title title={'Contact'} />
      <div id="contact-page" class="container">
        <div class="bg">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="title text-center">
                Contact <strong>Us</strong>
              </h2>
              <div id="gmap" class="contact-map"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
