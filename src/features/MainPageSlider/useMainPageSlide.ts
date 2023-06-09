import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { getMainSlides } from "./mainPageSliderSlice";
import { mainSliders } from "./mainPageSelectors";
import { useAppDispatch } from "store";

export const useMainSlides = () => {
  const dispatch = useAppDispatch();
  const { slides } = useSelector(mainSliders);

  const DELAY = 4500;
  const [index, setIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, DELAY);
    return () => {
      resetTimeout();
    };
  }, [index, slides.length]);

  useEffect(() => {
    if (slides.length === 0) dispatch(getMainSlides());
  }, [dispatch, slides.length]);

  return {
    slides,
    index,
    setIndex,
  };
};
