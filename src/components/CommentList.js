import React from "react";
import PropTypes from "prop-types";

const CommentItem = (props) => {
  const { item } = props;
  return (
    <li className="comment-wrapper">
      <div>
        <div className="comment-info-wrapper inline">
          <h4>Comment Id</h4>
          <span>{item.id}</span>
        </div>
        <div className="comment-info-wrapper inline">
          <h4>Email</h4>
          <span>{item.email}</span>
        </div>
        <div className="comment-info-wrapper">
          <h4> Comment</h4>
          <p>{item.body}</p>
        </div>
      </div>
    </li>
  );
};

const CommentList = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((item) => {
        return <CommentItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

CommentList.propTypes = {
  data: PropTypes.array.isRequired,
};

CommentItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CommentList;
