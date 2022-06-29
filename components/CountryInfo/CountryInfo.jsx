import { Fragment } from "react";
import Image from "next/image";
import classes from "./CountryInfo.module.css";

function CountryInfo(props) {
    try {
        const capital = props.data.capital[0];
        const currencyName =
            props.data.currencies[Object.keys(props.data.currencies)[0]].name;
        const currencySymbol =
            props.data.currencies[Object.keys(props.data.currencies)[0]].symbol;
        const languages = Object.values(props.data.languages).map((lang) => {
            return `${lang} `;
        });
        return (
            <section className={classes.body}>
                <div className={classes.flagImg}>
                    <Image
                        src={props.data.flags.png}
                        alt="flag-image"
                        width="320px"
                        height="213px"
                    />
                </div>
                <p>
                    <b>Official Name -</b> {props.data.name.official}
                </p>
                <p>
                    <b>Capital -</b> {capital}
                </p>
                <p>
                    <b>Area -</b> {props.data.area}
                </p>
                <p>
                    <b>Continent -</b> {props.data.continents}
                </p>
                <p>
                    <b>Currency Name -</b> {currencyName}
                </p>
                <p>
                    <b>Currency Symbol -</b> {currencySymbol}
                </p>
                <p>
                    <b>Flag -</b> {props.data.flag}
                </p>
                <p>
                    <b>Languages -</b> {languages}
                </p>
                <p>
                    <b>Population -</b> {props.data.population}
                </p>
            </section>
        );
    } catch (e) {
        const capital = "NA";
        const currencyName = "NA";
        const currencySymbol = "NA";
        const languages = "NA";
        return (
            <section className={classes.body}>
                <div className={classes.flagImg}>
                    <Image
                        src={props.data.flags.png}
                        alt="flag-image"
                        width="320px"
                        height="213px"
                    />
                </div>
                <p>
                    <b>Official Name -</b> {props.data.name.official}
                </p>
                <p>
                    <b>Capital -</b> {capital}
                </p>
                <p>
                    <b>Area -</b> {props.data.area}
                </p>
                <p>
                    <b>Continent -</b> {props.data.continents}
                </p>
                <p>
                    <b>Currency Name -</b> {currencyName}
                </p>
                <p>
                    <b>Currency Symbol -</b> {currencySymbol}
                </p>
                <p>
                    <b>Flag -</b> {props.data.flag}
                </p>
                <p>
                    <b>Languages -</b> {languages}
                </p>
                <p>
                    <b>Population -</b> {props.data.population}
                </p>
            </section>
        );
    }
}

export default CountryInfo;
