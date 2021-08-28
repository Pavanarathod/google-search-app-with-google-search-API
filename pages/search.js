import Header from "next/head";
import { useRouter } from "next/router";
import React from "react";
import HeaderSearch from "../components/HeaderSearch";
import response from "../components/responce";
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <header>
      <Header>
        <title>Google - {router.query.term} </title>
      </Header>
      <HeaderSearch defaultVaue={router.query.term} />
      <main className="p-5 sm:p-0 md:ml-24 lg:ml-36 sm:max-w-xl mb-3">
        <p className="text-sm text-gray-600">
          About {results?.searchInformation.formattedTotalResults} in{" "}
          {results?.searchInformation.formattedSearchTime} seconds
        </p>

        <SearchResults results={results} />
      </main>
    </header>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const startIndex = context.query.start || "0";
  const dummy = false;
  const results = dummy
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.USER_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results,
    },
  };
};
