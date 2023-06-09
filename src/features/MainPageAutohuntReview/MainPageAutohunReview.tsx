import { useMainPageAutohuntReview } from "./useMainPageAuthontReview";
import { GridCardMain } from "Components/CarComponents/GridCardMain";
import { CarSkeleton } from "Components/CarComponents/Skeleton";

import "./mainPageAutohuntReviews.scss";

export const MainPageAutohuntReview = () => {
  const { cars, status } = useMainPageAutohuntReview();

  if (status === "loading") {
    return <CarSkeleton length={3} className="flex" />;
  }

  return (
    <ul className="autohunt_car_list">
      {cars.map((c) => (
        <GridCardMain
          {...c}
          key={c.id}
          carDetails="article/autohunt"
          carReview="article/reviews"
        />
      ))}
    </ul>
  );
};
