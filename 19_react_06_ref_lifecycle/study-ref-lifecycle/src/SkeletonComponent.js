import React from "react";
import SkeletonElement from "./SkeletonElement";
const SkeletonComponent = () => {
  return (
    <>
      <div className="PostItem">
        <div>
          <SkeletonElement />
          <SkeletonElement />
        </div>
        <SkeletonElement />
      </div>
    </>
  );
};

// {
//   /* <div className="PostItem">
//       <div>
//         <span className="id">No.{post.id}</span>
//         <span className="title">- {post.title}</span>
//       </div>
//       <p className="body">{post.body}</p>
//     </div> */
// }
export default SkeletonComponent;
