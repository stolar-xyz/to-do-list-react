import React from "react";
import Input from "../Input";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameters, useReplaceQueryParameters } from "../queryParameters";
import { Wrapper } from "./styled";

const Search = () => {
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameters = useReplaceQueryParameters();

    const onInputChange = ({ target }) => {
        replaceQueryParameters({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filter tasks"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default Search;