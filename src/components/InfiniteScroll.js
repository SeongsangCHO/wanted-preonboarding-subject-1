import React from "react";
import PropTypes from "prop-types";

const InfiniteScroll = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id} className="comment-wrapper">
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
      })}
    </ul>
  );
};

InfiniteScroll.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfiniteScroll;
