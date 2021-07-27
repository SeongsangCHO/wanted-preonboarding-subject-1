import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { getCommentData } from "./api/getCommentData";
/*
! data fetching done
* 스크롤 맨 밑에 다다랐을 때, 다음 페이지 넘버를 갖게되는 hook
* 피그마 디자인 퍼블리싱
*/

function App() {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const intersectRef = useRef(null);
  useEffect(async () => {
    const data = await getCommentData(page);
    setCommentList([...commentList, ...data]);
    console.log(intersectRef.current);
  }, [page]);

  const handleObserver = () => {
    console.log("hi");
  };
  const options = {};
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
  });
  return (
    <>
      <div id="container">
        <ul>
          {commentList.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <div>
                    <h4>Comment Id</h4>
                    <span>{item.id}</span>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <span>{item.email}</span>
                  </div>
                  <div>
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
