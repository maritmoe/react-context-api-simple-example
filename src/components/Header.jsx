import { useContext } from "react";
import { MyContext } from "../App";

export default function Header() {
  const context = useContext(MyContext);

  return <h1>{context.APP_NAME}</h1>;
}
