import React, { useState } from "react";
import Link from "next/link";

const App = () => {
  return <div>Index Page</div>;
};

export default App;

/* getServerSideProps 는 서버 측에서 Props를 받아옴, 페이지 요청시마다 실행이 되며
getServerSideProps에서 페이지로 전달해준 데이터를 서버가 렌더링함. (콘솔은 브라우저가 아닌 터미널에 찍힘)  */
