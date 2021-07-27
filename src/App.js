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
