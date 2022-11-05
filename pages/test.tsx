import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
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
          router.push(`/test/${id}`);
        }}
      />
      <button>Redirect to ID Page</button>
    </div>
  );
};

export default Test;
