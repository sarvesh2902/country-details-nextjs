import { Fragment } from "react";
import CountryList from "../components/CountryList/CountryList";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import axios from "axios";
import Head from "next/head";

export default function Home(props) {
    return (
        <Fragment>
            <Head>
                <title>Countries</title>
                <meta
                    name="description"
                    content="View all countries and their details"
                />
            </Head>
            <Header data="COUNTRY DETAILS" />
            {/* <Search countries={props.countries} /> */}
            <CountryList countries={props.countries} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,cca3"
    );
    const countries = response.data;
    countries.sort();

    return {
        props: {
            countries,
        },
    };
}
