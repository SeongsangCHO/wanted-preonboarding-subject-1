import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { getCommentData } from "./api/getCommentData";
import useIntersectObserver from "./hooks/useIntersectObserver";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const intersectRef = useRef(null);
  const [isLastPage, setIsLastPage] = useState(false);
  const { isIntersect } = useIntersectObserver(intersectRef, {
    rootMargin: "200px",
    threshold: 0.01,
  });

  const loadMoreCommentData = async () => {
    if (isIntersect) {
      const data = await getCommentData(page);

      if (data.length === 0) {
        //요청 페이지 데이터를 모두 load해,  더 이상 가져올 데이터가 없을 때 == 마지막 페이지 임을 알리는 state
        setIsLastPage(true);
      } else {
        setCommentList([...commentList, ...data]);
        setPage((prev) => prev + 1);
      }
    }
  };
  useEffect(() => {
    loadMoreCommentData();
  }, [isIntersect, isLastPage]);
  return (
    <div className="container">
      <InfiniteScroll data={commentList} />
      {!isLastPage && (
        <div id="intersectElement" ref={intersectRef}>
          Loading...
        </div>
      )}
    </div>
  );
}

export default App;
