import { Fragment, useState } from "react";
import classes from "./Search.module.css";

function Search(props) {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }
    const filteredCountries =
        search.length === 0
            ? props.countries
            : props.countries.filter((country) =>
                  country.name.common
                      .toLowerCase()
                      .includes(search.toLowerCase())
              );
    return (
        <section className={classes.body}>
            <input
                className={classes.input}
                type="text"
                name="country"
                id="country"
                placeholder="SEARCH FOR COUNTRIES"
                value={search}
                onChange={handleChange}
            />
            {filteredCountries}
        </section>
    );
}

export default Search;
