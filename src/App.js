import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { getCommentData } from "./api/getCommentData";
import useIntersectObserver from "./hooks/useIntersectObserver";
import InfiniteScroll from "./components/InfiniteScroll";
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
    <div className="container">
      <InfiniteScroll data={commentList} />
      <div id="intersectElement" ref={intersectRef}>
        Loading...
      </div>
    </div>
  );
}

export default App;
