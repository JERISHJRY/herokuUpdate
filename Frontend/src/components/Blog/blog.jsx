import React from "react";
import LeftSideBar from '../commons/leftSideBar';
import PaginationBlog from "./pagination";
const BlogList = () => {
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
              <PaginationBlog count={3}/>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>);

}
export default BlogList;
