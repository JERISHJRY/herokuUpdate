import React from 'react';
import { useForm } from "react-hook-form";
import *as rejex from "components/commons/commonRegex";
const GetInTouch=()=>{
	const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data,'dataaaa');
      };
return(
    <>
	<form onSubmit={handleSubmit(onSubmit)}>
      	
	   
	    	<div class="contact-form">
	    		<h2 class="title text-center">Get In Touch</h2>
                <form>
				    <div class="form-group col-md-6">
				        <input name="name" class="form-control" 
						required
						placeholder="name"
					    ref={register({required: true,
					  })}/>
				    </div>
				    <div class="form-group col-md-6">
						<input name="email" class="form-control"
						  placeholder="email"ref={register(rejex.emailPatternRejexPattern)}/>
				    </div>
				    <div class="form-group col-md-12">
				        <input name="subject" class="form-control"placeholder="Subject"
						required
						placeholder="name"
					    ref={register({required: true,
					  })}/>
				    </div>
				    <div class="form-group col-md-12">
				        <textarea name="message" class="form-control" rows="8" placeholder="Message"
						ref={register({required: true,
						})}></textarea>
				    </div>                        
				    <div class="form-group col-md-12">
				        <input type="submit" class="btn btn-primary pull-right" value="Submit"/>
				    </div>
				</form>
	    				
	    	</div>
	   
	
	</form>
    </>
)
}
export default GetInTouch;
