import { useEffect, useRef } from "react";

const useScrollAnimation = (clas: any, clasdel: any) => {
  const target = useRef<any>("");
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        console.log(entry.intersectionRatio);
        if (entry.intersectionRatio > 0) {
          clas.forEach((c: any) => {
            entry.target.classList.add(c);
          });
          if (clasdel)
            clasdel.forEach((c: any) => {
              entry.target.classList.remove(c);
            });
          observer.unobserve(entry.target);
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);
  }, []);
  return target;
};

export default useScrollAnimation;
