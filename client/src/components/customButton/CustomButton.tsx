
import { MouseEvent } from "react";
type Props = {
  buttonText: string;
  onSubmitHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};
export default function CustomButton({buttonText,onSubmitHandler}:Props) {
  return (
    <button className="custom-button center-item show-curser" onClick={(e)=>onSubmitHandler(e)}>{buttonText}</button>
  )
}
