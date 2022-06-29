import { Fragment } from "react";
import Header from "../components/Header/Header";
import CountryInfo from "../components/CountryInfo/CountryInfo";
import axios from "axios";
import Head from "next/head";

export default function CountryDetails(props) {
    try {
        const data = props.countryData[0];
        return (
            <Fragment>
                <Head>
                    <title>{data.name.common}</title>
                    <meta
                        name="description"
                        content={`View details for ${data.name.common}`}
                    />
                </Head>
                <Header data={data.name.common} />
                <CountryInfo data={data} />
            </Fragment>
        );
    } catch (e) {
        return (
            <Fragment>
                <Head>
                    <title>{data.name.common}</title>
                    <meta
                        name="description"
                        content={`View details for ${data.name.common}`}
                    />
                </Head>
                <Header />
                <div>Error 404! Please try again!</div>
            </Fragment>
        );
    }
}

export async function getStaticPaths() {
    const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=cca3"
    );
    const countries = response.data;

    return {
        fallback: "blocking",
        paths: countries.map((country) => ({
            params: {
                countryCode: country.cca3,
            },
        })),
    };
}

export async function getStaticProps(context) {
    const countryCode = context.params.countryCode;

    const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${countryCode}`
    );
    const countryData = response.data;

    return {
        props: {
            countryData,
        },
    };
}
