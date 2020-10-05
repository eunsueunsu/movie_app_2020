import React from "react";

function Food({ fav }) {
  return <h1>I love {fav}</h1>;
}
// 동적 데이터가 있는 컴포넌트
function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food
        fav="kimchi"
        something={true}
        papapapa={["hello", 1, 2, 3, 4, 5, true]}
      />
      <Food eunsu="eunsueunsu" fav="eunsu"></Food>
    </div>
  );
}

export default App;
