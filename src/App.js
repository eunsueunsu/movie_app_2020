import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movies";

// #3.1
class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json/sort-by=rating");
    this.setState({ movies, isLoading: false })     // movies : movies
    console.log(movies)
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });

    }, 6000);
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
            <div class="movies">
              { movies.map(movie => (
                <Movie key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
      </section>
    )
  }
  //3.2 
  //life cycle
  //1. mounting  : being born
  // counstructor (JS)
  //2. updating
  //3. unmounting : component die

  // state = {
  //   count: 0
  // }
  // render() {
  //   console.log("i'm rendering")
  //   return <div>
  //     <h1>The number is :  {this.state.count}</h1>
  //     <button onClick={this.add}>add</button>
  //     {/*this.add() : 즉시 실행 , this.add  : 클릭했을때만 실행  */}
  //     <button onClick={this.minus}>minus</button>
  //   </div>
  // }

  // add = () => {
  //   console.log("Add");
  //   // this.setState({ count: this.state.count + 1 })
  //   this.setState(current => ({ count: current.count + 1 }))

  // };
  // minus = () => {
  //   console.log("minus");
  //   this.setState(current => ({ count: current.count - 1 }))
  // };
  // componentDidMount() {
  //   console.log("component rendered")
  // }
  // componentDidUpdate() {
  //   console.log(" i just updated ")
  // }
  // componentWillUnmount() {
  //   console.log("good bye world")
  // }


  // 3.1
  // render method 상속받아서 사용
  //function component , class component가 있음
  // react class commponent의 render method를 실행함
  // c c 가 state를 갖고 있음 object , data를 넣을 공간을 가짐 ( 동적 data )
  // 리액트는 render function을 refresh 하지 않음
  //setState 하면 state update하고 render function refresh
  // everytime you call setstate , react is going to  rerender 

}


// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>)
// }


// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };
// // 동적 데이터가 있는 컴포넌트

// const foodILike = [
//   {
//     id: "1",
//     name: "kimchi",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carabao_mangoes_%28Philippines%29.jpg/220px-Carabao_mangoes_%28Philippines%29.jpg",
//     rating: 5
//   },
//   {
//     id: "2",
//     name: "mango",
//     image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta-650x650.jpg",
//     rating: 4.9
//   },
//   // {
//   //   eunsu : "eunsu"
//   // }
// ]

// function renderFood(dish) {
//   console.log(dish);
//   return <Food key={dish.id} name={dish.name} picture={dish.image} />
// }
// function App() {
//   // function compoment로 부름
//   return (
//     <div>
//       {/* <h1>hello</h1> */}
//       {/* dish : just item , normal object of map */}
//       {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
//       {/* {foodILike.map(renderFood)} */}
//     </div>
//   )

//   // return (
//   //   <div>
//   //     <h1>hello</h1>
//   //     <Food
//   //       fav="kimchi"
//   //       something={true}
//   //       papapapa={["hello", 1, 2, 3, 4, 5, true]}
//   //     />
//   //     <Food eunsu="eunsueunsu" fav="eunsu"></Food>
//   //     <Food eunsu="eunsueunsu" fav="jieun"></Food>
//   //     <Food eunsu="eunsueunsu" fav="aaaa"></Food>
//   //     <Food eunsu="eunsueunsu" fav="oooo"></Food>

//   //   </div>
//   // )
// }

export default App;
