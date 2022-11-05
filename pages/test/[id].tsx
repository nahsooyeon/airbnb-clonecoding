import { useRouter } from "next/router";
import React, { useState } from "react";

const TestId = () => {
  const router = useRouter();
  const { id } = router.query;
  if (id) {
    return <div>{id}</div>;
  } else {
    return <div>No ID</div>;
  }
};

export default TestId;
