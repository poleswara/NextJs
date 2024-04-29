import classes from "./header.module.css";
import AppIcon from "../../assets/fast-food.svg";
import Image from "next/image";
export default function Header() {
  return (
    <div className={classes.hed}>
      <Image className={classes.img} src={AppIcon} alt="Food App" property />
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className={classes.link}
      >
        <ul>
          <li>
            <a href="#">Offers</a>
          </li>
        </ul>
        <ul>
          {" "}
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
        <ul>
          {" "}
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
        <ul>
          {" "}
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
