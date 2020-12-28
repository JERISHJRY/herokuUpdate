import React  from 'react';
import Layout from 'components/commons/layout';
import image1 from 'assets/pics/images/home/iframe1.png';
import image2 from 'assets/footerimage/iframe2.png';
import image3 from 'assets/footerimage/iframe3.png';
import image4 from 'assets/footerimage/iframe4.png';
import mapimage from 'assets/footerimage/map.png';
// import im from 'assets/pics/images/home/gallery1.jpg';

const data =[
    {
        image:[image1,image2,image3,image4],
        name:'Circle of Hand',
        date:'24 DEC 2014'
    }
]
const Topfooter=()=> {
    return (
        <div className='footer-top'>
           <Layout Component={<Footercontantat />}/>
        </div>
    )
}
const Footercontantat=()=> {
    return(
        <>
            <div className="col-sm-2">
                <div className="companyinfo">
                    <h2><span>e</span>-shopper</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                </div>
            </div>
            <div className='col-sm-7'>
                {
                    data.map(element=>(	
                        element.image.map((image,i)=>(
                            <div key={i} className="col-sm-3">
                                <div className="video-gallery text-center">
                                    <a href="#">
                                        <div className="iframe-img">
                                            <img src={image} alt="" />
                                        </div>
                                        <div className="overlay-icon">
                                            <i className="fa fa-play-circle-o"></i>
                                        </div>
                                    </a>
                                    <p>{element.name}</p>
                                    <h2>{element.date}</h2>
                                </div>
                            </div>
                        ))   
                    ))
                }
            </div>
            <div className="col-sm-3">
                <div className="address">
                    <img src={mapimage} alt="" />
                    <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                </div>
            </div>
        </>
    )
}

export default Topfooter;