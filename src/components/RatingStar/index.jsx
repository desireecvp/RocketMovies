import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { RatingStarWrapper } from "./styles";

export function RatingStar({ rating }) {
  return (
    <RatingStarWrapper>
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStarOutline />
    </RatingStarWrapper>
  );
}
