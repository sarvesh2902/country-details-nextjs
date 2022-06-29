import Link from "next/link";
import classes from "./CountryList.module.css";

function CountryList(props) {
    const allCountries = props.countries.map((country) => (
        <li className={classes.links} key={country.cca3}>
            <Link href={`/${country.cca3}`} style={{ textDecoration: "none" }}>
                {country.name.common}
            </Link>
        </li>
    ));

    return <ul className={classes.body}>{allCountries}</ul>;
}

export default CountryList;
