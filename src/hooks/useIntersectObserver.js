import React, { useState, useEffect } from "react";

const useIntersectObserver = (intersectRef, optionsObject) => {
  // IntersectObserver의 option들을 지정하지 않는 경우를 대비해 root, margin을 default로 지정 [재사용성을 고려]
  const { root = null, rootMargin = "0px", threshold } = optionsObject;

  const [isIntersect, setIsIntersect] = useState(false);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsIntersect(true);
    } else {
      setIsIntersect(false);
    }
  };
  const options = {
    root: root,
    rootMargin: rootMargin,
    threshold: threshold,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (intersectRef.current) observer.observe(intersectRef.current);
    return () => observer.disconnect();
  }, []);
  return {
    isIntersect,
  };
};

export default useIntersectObserver;
