import style from "./css/innerContainer.module.css";

export default function InnerContainer({ children }) {
  console.log("inner container children");
  console.log(children);
  return <div className={style.innerContatiner}>{children}</div>;
}
