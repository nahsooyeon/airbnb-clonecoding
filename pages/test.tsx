import React, { useState } from "react";
import { useRouter } from "next/router";
import { datadogLogs } from "@datadog/browser-logs";

const Test = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");

  const handleClick = (e) => {
    datadogLogs.logger.info("Button clicked", {
      name: "input value",
      value: id,
    });
    console.log(id);
    router.push(`/test/${id}`);
  };
  return (
    <div>
      Test Page
      <input
        placeholder="Insert ID"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Redirect to ID Page
      </button>
    </div>
  );
};

export default Test;
