import React from "react";

function Food({ name, picture }) {
  return( 
  <div>
   <h1>I love {name}</h1>
   <img src= { picture }  />
   </div> )
}
// 동적 데이터가 있는 컴포넌트

const foodILike =[
  {
  name: "kimchi",
  image: "http://www.11st.co.kr/connect/Gateway.tmall?method=Xsite&prdNo=2003400266&tid=1001366138"
},
{
  name: "mango",
  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffb%2FCarabao_mangoes_%2528Philippines%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCarabao_(mango)&tbnid=AGpPMB8I0xGCQM&vet=12ahUKEwi5zJ_3tcjsAhUQCpQKHStjA_sQMygDegUIARDqAQ..i&docid=nChwq7hvtTHg3M&w=2172&h=1988&q=mango&ved=2ahUKEwi5zJ_3tcjsAhUQCpQKHStjA_sQMygDegUIARDqAQ"
}
]
function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>))}
    </div>
  )

  // return (
  //   <div>
  //     <h1>hello</h1>
  //     <Food
  //       fav="kimchi"
  //       something={true}
  //       papapapa={["hello", 1, 2, 3, 4, 5, true]}
  //     />
  //     <Food eunsu="eunsueunsu" fav="eunsu"></Food>
  //     <Food eunsu="eunsueunsu" fav="jieun"></Food>
  //     <Food eunsu="eunsueunsu" fav="aaaa"></Food>
  //     <Food eunsu="eunsueunsu" fav="oooo"></Food>

  //   </div>
  // )
}

export default App;
