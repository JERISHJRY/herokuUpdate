import React, { useState} from "react";
import Pagination from "react-js-pagination";
import StarRating from "./starRating";
import {useSelector} from 'react-redux';
import  Button from 'components/commons/button';
const PaginationBlog = (props) => {
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
     
  const PerPage = props.count;
  const [activePage, setCurrentPage] = useState(1);
  const indexOfLast = activePage * PerPage;
  const indexOfFirst = indexOfLast - PerPage;
  const current = array.slice(indexOfFirst, indexOfLast);
  const renderTodos = current.map((dat,i) => {
    return <div className="single-blog-post" key={i}>
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


  });
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber)
  };
  return (<>
              {renderTodos}
              <Pagination
                activePage={activePage}
                itemsCountPerPage={PerPage}
                totalItemsCount={array.length}
                pageRangeDisplayed={PerPage}
                onChange={handlePageChange}
              />
  </>);

}
export default PaginationBlog;
