import React from "react";

function Food({ name, picture }) {
  return( 
  <div>
   <h1>I like {name}</h1>
   <img src= { picture } />
   </div> )
}
// 동적 데이터가 있는 컴포넌트

const foodILike =[
  {
    id: "1",
  name: "kimchi",
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carabao_mangoes_%28Philippines%29.jpg/220px-Carabao_mangoes_%28Philippines%29.jpg"},
{
  id : "2",
  name: "mango",
  image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta-650x650.jpg"
},
// {
//   eunsu : "eunsu"
// }
]

function renderFood(dish){
  console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image}/>
}
function App() {
  return (
    <div>
      {/* <h1>hello</h1> */}
       {/* dish : just item , normal object of map */}
      {/* {foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>))} */}
      {foodILike.map(renderFood)}
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
