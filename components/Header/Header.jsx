import { Fragment } from "react";
import classes from "./Header.module.css";

function Header(props) {
    return (
        <Fragment>
            <nav className={classes.header}>
                <h1>{props.data.toUpperCase()}</h1>
            </nav>
        </Fragment>
    );
}

export default Header;
