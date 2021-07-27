import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import { getCommentData } from "./api/getCommentData";
import useIntersectObserver from "./hooks/useIntersectObserver";
/*
! data fetching done
! 스크롤 맨 밑에 다다랐을 때, 다음 페이지 넘버를 갖게되는 hook
! 피그마 디자인 퍼블리싱
*/

function App() {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const intersectRef = useRef(null);
  const { isIntersect } = useIntersectObserver(intersectRef);

  useEffect(async () => {
    if (isIntersect) {
      const data = await getCommentData(page);
      setCommentList([...commentList, ...data]);
      setPage((prev) => prev + 1);
    }
  }, [isIntersect]);
  return (
    <>
      <div className="container">
        <ul>
          {commentList.map((item) => {
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
                    <h4>Comment</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div id="intersectElement" ref={intersectRef}>
          Loading...
        </div>
      </div>
    </>
  );
}

export default App;
