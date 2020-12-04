import React from 'react';
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const LoadingSpinner = () => {
    return(
        <div className="mt-48 mb-48">
        <MoonLoader
          css={override}
          size={90}
          color={"#fff"}
        />
        </div>
    );
}

export default LoadingSpinner;