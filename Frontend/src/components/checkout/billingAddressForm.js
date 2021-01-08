import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as rejex from "components/commons/commonRegex";
import { toast } from "react-toastify";
import Map from "./leaflet";
import { useSelector } from "react-redux"

const BillingAddressForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const address = useSelector((state) => state.address);
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [ZipCode, setZip] = useState();
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();

  
  useEffect(() => {
    if(Object.keys(address).length){
      console.log(address,"address");
      setCountry(address.CountryCode);
      setState(address.Region);
      setZip(address.Postal);
      setCity(address.City);
      setDistrict(address.Subregion);
    }
  }, [address]);

  

  const onSubmit = (data) => {
    console.log(data, "onsubmit");    
      toast("continue_shopping", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });   
  };
  return (
    <div id="formDiv">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-sm-5 clearfix">
          <div className="bill-to">
            <p>Bill To</p>
            <div className="form-one">
              <form>
                <input
                  type="text"
                  name="cm"
                  placeholder="Company Name"
                  ref={register({
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                />
                <input
                  name="email"
                  type="text"
                  placeholder="Email*"
                  ref={register(rejex.emailPatternRejexPattern)}
                />
                {errors.email && <span>Email badly formated</span>}
                <input type="text" name="title" placeholder="Title" />
                <input
                  type="text"
                  name="fn"
                  placeholder="First Name *"
                  ref={register({
                    required: true,
                    maxLength: 20,
                  })}
                />
                <input
                  type="text"
                  name="mn"
                  placeholder="Middle Name"
                  ref={register({
                    minLength: 3,
                    maxLength: 20,
                  })}
                />
                <input
                  type="text"
                  name="ln"
                  placeholder="Last Name *"
                  ref={register({
                    required: true,
                    maxLength: 20,
                  })}
                />
                <input
                  type="text"
                  value ={city}
                  name="city"
                  placeholder = "City"
                  onChange={e=>(setCity(e.target.value))}
                  ref={register({
                    required: true,
                  })}
                />
                <input
                  type="text"
                  value ={district}
                  name="district"
                  placeholder = "District"
                  onChange={e=>(setDistrict(e.target.value))}
                  ref={register({
                    required: true,
                  })}
                />
              </form>
            </div>
            <div className="form-two">
              <form>
                <input
                  type="text"
                  value ={ZipCode}
                  name="Zip"
                  placeholder = "Zip code"
                  onChange={e=>(setZip(e.target.value))}
                  ref={register({
                    required: true,
                  })}
                />
                <input
                  type="text"
                  value ={country}
                  name="Country"
                  placeholder = "Country"
                  onChange={e=>(setCountry(e.target.value))}
                  ref={register({
                    required: true,
                  })}
                />
                <input
                  type="text"
                  value ={state}
                  name="State"
                  placeholder = "State"
                  onChange={e=>(setState(e.target.value))}
                  ref={register({
                    required: true,
                  })}
                />                
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="cpass"
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone *"
                  ref={register({
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                    
                  })}
                />
                {errors.email && <span>Enter valid Phone number</span>}

                <input
                  name="mobile"
                  type="text"
                  placeholder="Mobile Phone"
                  ref={register({
                    minLength: 3,
                    maxLength: 20,
                    
                  })}
                />
                <input name="fax" type="text" placeholder="Fax" />
                <input
                  type="submit"
                  value="Continue"
                  className="billingContinue"
                  style={{ border: "none", padding: "10px" }}
                />
              </form>
            </div>
          </div>
        </div>    
      </form>
      <Map />  
    </div>
  );
};
export default BillingAddressForm;
