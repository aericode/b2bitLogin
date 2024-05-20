import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "flex",
  margin: "auto",
  borderColor: "#02274F"
};

export function Spinner() {

  return (
      <ClipLoader
        loading={true}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
      />
  );
}