import style from "./css/innerContainer.module.css";

export default function InnerContainer({ children }) {
  return <div className={style.innerContatiner}>{children}</div>;
}
