import React,{useEffect} from 'react';
import { useForm } from "react-hook-form";
import *as rejex from "components/commons/commonRegex";

const Replay=()=>{
	const { register, handleSubmit, errors } = useForm();
	useEffect(() => {
		onSubmit();
		
	}, [])
	const onSubmit = data => {
		console.log(data,'dataaaasss');
	  };
return(
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="replay-box">
						<div className="row">
							<div className="col-sm-4">
								<h2>Leave a replay</h2>
								
									<div className="blank-arrow">
										<label>Your Name</label>
									</div>
									<span>*</span>
                                    
									<input name="Name"
                                     required
                                     placeholder="write your name..."
                                 
                                  ref={register({required: true,
                                    minLength: 3,
                                    maxLength: 30,})}/>
									
									 
                                    <div className="blank-arrow">
										<label>Email Address</label>
									</div>
									<span>*</span>
									<input name='email' placeholder="your email address..."ref={register(rejex.emailPatternRejexPattern)}/>
									<div className="blank-arrow">
										<label>your City</label>
									</div>
									<input name="city" placeholder="current city..."  ref={register({required: true,
                                })}/>
								
							</div>
							<div className="col-sm-8">
								<div className="text-area">
									<div className="blank-arrow">
										<label>Your Comment</label>
									</div>
									<span>*</span>
									<textarea name="message" rows="11" ref={register({required: true,
                                })}></textarea>
									<input className="btn btn-primary" type="submit" href="" value='post comment' />
								</div>
							</div>
						</div>
				    </div>
    </form>
    </>
)
}
export default Replay;
