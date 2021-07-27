import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import { getCommentData } from "./api/getCommentData";
/*
! data fetching done
* 스크롤 맨 밑에 다다랐을 때, 다음 페이지 넘버를 갖게되는 hook
* 피그마 디자인 퍼블리싱
*/

function App() {
  const [page, setPage] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const intersectRef = useRef(null);
  useEffect(async () => {
    const data = await getCommentData(page);
    setCommentList([...commentList, ...data]);
    console.log(page);
  }, [page]);

  const handleObserver = useCallback(async (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log("is intersect");
      setPage((prev) => prev + 1);
    }
  }, []);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (intersectRef.current) observer.observe(intersectRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);
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
          intersect
        </div>
      </div>
    </>
  );
}

export default App;
