import classes from "./footer.module.css";
export default function Footer() {
  return (
    <div className={classes.hed}>
      <div>
        <div className={classes.footermenu}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={classes.footersocial}>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className={classes.copy}>
        <p>© 2024 FoodApp. All rights reserved.</p>
      </div>
    </div>
  );
}
