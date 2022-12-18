import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} />
        </div>
        <div>
          <h3 className={classes.content}>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorite</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
