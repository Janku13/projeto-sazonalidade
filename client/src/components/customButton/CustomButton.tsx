import { MouseEventHandler } from "react";

type Props = {
  buttonText: string;
  onSubmitHandler?:MouseEventHandler<MouseEvent>
};
export default function CustomButton({buttonText,onSubmitHandler}:Props) {
  return (
    <button className="custom-button" onClick={()=>onSubmitHandler}>{buttonText}</button>
  )
}
