import React, { useState } from "react";
import { useRouter } from "next/router";
import { datadogLogs } from "@datadog/browser-logs";

const Test = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");

  const handleClick = (e) => {
    datadogLogs.logger.info("Button clicked", { name: "test id", id: id });
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
        onClick={(e) => {
          handleClick(e);
        }}
      />
      <button>Redirect to ID Page</button>
    </div>
  );
};

export default Test;
