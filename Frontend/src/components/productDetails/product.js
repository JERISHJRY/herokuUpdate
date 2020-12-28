import React,{useCallback,useEffect,useState} from 'react';
import CartButton from 'components/commons/addToCartButton';
import newimage from 'assets/pics/images/product-details/new.jpg';
import shareimage from 'assets/pics/images/product-details/share.png';
import ratingimage from 'assets/pics/images/product-details/rating.png';
import ima from 'assets/footerimage/iframe1.png';
import 'react-medium-image-zoom/dist/styles.css';
import Cropper from 'cropperjs';
import "cropperjs/dist/cropper.min.css";
import {GlassMagnifier} from "react-image-magnifiers";

const Product=(props)=> {
    const [quantity,setQuantity] = useState(1);
    const [imageDestination,setImageDestination]= useState('')
    const imageElement  =React.createRef();
    const onmouse=()=>{

        const cropper = new Cropper(imageElement.current, {
            zoomable: false,
            scalable: false,
            aspectRatio:1,
            autoCropArea:.38,
            guides:false,
            dragMode:"crop",
            background:false,
            modal:false,
            highlight:false,
            crop: () => {
                
                const canvas = cropper.getCroppedCanvas();
                setImageDestination(canvas.toDataURL("image/png"));
                document.getElementById("imageDiv").style.display="block";
                document.getElementById("proDiv").style.display="none"; 
            },
            cropend:()=> {
                cropper.reset();
                outmouse();
            }
        });
    }
    const outmouse=()=>{
    
        document.getElementById("proDiv").style.display="block";
        document.getElementById("imageDiv").style.display="none";
       
    }
  
    const {data}=props;    
    return(
        <>
           
                { 
                    data.map((element,i)=>(
                        <>
                            <div className="product-details" key={element.web_id}>

                                <div className="col-sm-5" >
                                     <div className="view-product" >
                                        <div class="img-container" >
                                            <img ref={imageElement}  onMouseOver={onmouse} src={element.image} alt="Source" crossOrigin />
                                        </div>
                                    </div>
                                    <SimilarProducts {...props}/>
                                </div>
                                <div className="col-sm-7">
                                    <div className="img-preview " id='imageDiv'>
                                        <img src={imageDestination}  alt="Destination" />
                                    </div>
                                    <div className="product-information" id="proDiv">
                                        <img src={newimage} className="newarrival" alt="" />
                                        <h2>{element.image_name}</h2>
                                        <p>Web ID: {element.web_id}</p>
                                        <img src={ratingimage} alt="" />
                                        <span>
                                            <span>US {element.price}</span>
                                            <label>Quantity:</label>
                                            <input type="number" min='1' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                                            <CartButton item={element} count={quantity}/>
                                        </span>
                                        <p><b>Availability:</b> In Stock</p>
                                        <p><b>Condition:</b> New</p>
                                        <p><b>Brand:</b> E-SHOPPER</p>
                                        <a href=""><img src={shareimage} className="share img-responsive"  alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
        </>
    )
}

const SimilarProducts=(props)=> {
    const photo=props.data[0].sub_images
    const photo1=photo.image1;
    const photo2=photo.image2;
    const photo3=photo.image3;
    const photo4=photo.image4;
    return(
        <>
               
            <div id="similar-product" className="carousel slide" data-ride="carousel">        
                <div className="carousel-inner">
                    <div className="item active">
                        <a href=""><GlassMagnifier zoom={'70%'} square={true} magnifierSize={'50%'}imageSrc={photo1} /></a>
                    </div>
                    <div className="item">
                        <a href=""><GlassMagnifier zoom={'70%'} square={true} magnifierSize={'50%'}imageSrc={photo2} /></a>
                    </div>
                    <div className="item">
                        <a href=""><GlassMagnifier zoom={'70%'} square={true} magnifierSize={'50%'}imageSrc={photo3} /></a>  
                    </div>
                    <div className="item">
                        <a href=""><GlassMagnifier zoom={'70%'} square={true} magnifierSize={'50%'}imageSrc={photo4} /></a>  
                    </div>     
                </div>
                <a className="left item-control" href="#similar-product" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                </a>
                <a className="right item-control" href="#similar-product" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>
        
        </>


        
    )
}

export default Product;