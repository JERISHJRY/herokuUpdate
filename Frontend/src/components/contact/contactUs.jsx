import React from 'react';
import Contact from './contact';
import ContactInfo from './contactInfo';
import GetInTouch from './getInTouch';

const ContactUs=()=>{
return(
    <>
    <div className="container">
    <Contact/>
    
    <div class="row"> 
    <div class="col-sm-8">
    <GetInTouch/>
    </div>
    <div class="col-sm-4">
    <ContactInfo/>
    </div>
    </div>
    </div>
    </>
)
}
export default ContactUs;
