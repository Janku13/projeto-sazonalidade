import { MouseEventHandler, ReactElement } from "react";
import { IconText } from "../utils/data";

 export type IconType = {
  text: IconText;
  icon: ReactElement;
  onClick?:MouseEventHandler<MouseEvent>
};