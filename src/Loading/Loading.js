import React from "react";
// import { Dna } from "react-loader-spinner";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center mt-6">
      {/* <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      /> */}
      <RingLoader color="#F63E7B" />
    </div>
  );
};

export default Loading;
