import React,{useEffect,useState} from 'react';
import LeftSideBar from '../commons/leftSideBar';
// import Comments from './comments';
import PaginationBlog from './pagination';
import Replay from './replay';

import StarRating from "./starRating";
import {useSelector,useDispatch} from 'react-redux';
import Pagination from "react-js-pagination";
import  Button from 'components/commons/button';
const BlogSingle = () => {
  const blogresult =useSelector(state=>state.blog);
     
  const value=blogresult?.data;
 
 const blogData=value?.message

  let array=[];
  const content=blogData;
  if(content){
    content.map((e)=>{
     
        array.push(e);
     
    })
  }
  const PerPage = 1;
  const [activePage, setCurrentPage] = useState(1);
  const indexOfLast = activePage * PerPage;
  const indexOfFirst = indexOfLast - PerPage;
  const current = array.slice(indexOfFirst, indexOfLast);
  const renderTodos = current.map((dat,i) => {
    return<> <div className="single-blog-post" key={i}>
      <h3 className="mb-5">{dat.blog_title}</h3>
      <div className="post-meta mt-5">
        <ul className="mt-5">
          <li><i className="fa fa-user"></i> {dat.user}</li>
          <li><i className="fa fa-clock-o"></i>{dat.time}</li>
          <li><i className="fa fa-calendar"></i>{dat.date}</li>
        </ul>
        <StarRating />
      </div>
      
        <img src={dat.image} alt="image"/>
      
      <p>{dat.blog_content}</p>
      <Button buttonLabel={'Read More'} className={'btn btn-primary'}/>
    </div>
    <div className="rating-area">
    <ul className="ratings">
      <StarRating/>
      <li className="color">(6 votes)</li>
    </ul>
    <ul className="tag">
      <li>TAG:</li>
      <li><a className="color" href="">Pink <span>/</span></a></li>
      <li><a className="color" href="">T-Shirt <span>/</span></a></li>
      <li><a className="color" href="">Girls</a></li>
    </ul>
  </div>
  <div className="response-area">
  <h4> COMMENTS</h4>
  </div>
  <div className="media commnets" key={i}>
						<a className="pull-left" href="#">
							<img className="blog-comment-image" src={dat.image} alt="image"/>
						</a>
						<div className="media-body">
							<h4 className="media-heading">{dat.user}</h4>
                            <p>{dat.comment}</p>
							<div className="blog-socials">
								<ul>
									<li><a href=""><i className="fa fa-facebook"></i></a></li>
									<li><a href=""><i className="fa fa-twitter"></i></a></li>
									<li><a href=""><i className="fa fa-dribbble"></i></a></li>
									<li><a href=""><i className="fa fa-google-plus"></i></a></li>
								</ul>
								<a className="btn btn-primary" href="">Other Posts</a>
							</div>
						</div>
                    </div>
		    <div className="">
	        <h4> RESPONSES</h4>
			{dat.responses.map((itm,i)=>(<>
			    <ul className="media-list" key={i}>
							<li className="media">
								
								<a className="pull-left" href="#">
									<img className="response-image" src={itm.image} alt=""/>
								</a>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>{itm.user}</li>
										<li><i className="fa fa-clock-o"></i>{itm.time}</li>
										<li><i className="fa fa-calendar"></i>{itm.date}</li>
									</ul>
                                   <p>{itm.comment}</p>
									<a className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</a>
								</div>
							</li>
                           
                    </ul>
             
			</>))}
			</div>	
 </>});
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber)
  };
    return (<>
     <section>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-3">
            <LeftSideBar />
          </div>
          <div className="col-sm-9 padding-right">
            <div className="blog-post-area">
              <h2 className="title text-center">Latest From our Blog</h2>
             
              {renderTodos}
             
            </div>
            
         
          <Pagination
                activePage={activePage}
                itemsCountPerPage={PerPage}
                totalItemsCount={array.length}
                pageRangeDisplayed={PerPage}
                onChange={handlePageChange}
              />
          <Replay/>
          </div>
        </div>
      </div>
    </section> 
    </>);
  
  }
export default BlogSingle;
