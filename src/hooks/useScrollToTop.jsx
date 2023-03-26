import { useEffect } from "react";

function useScrollToTop(dependency) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependency]);
}

export default useScrollToTop;
