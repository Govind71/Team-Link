import Features from "./Components/Features";
import Footer from "./Components/Footer";
import UserRoles from "./Components/UserRoles";

function App() {
  return (
    <>
      <Features />
      <Footer />
      <UserRoles />
    </>
  );
}

export default App;


// // import './App.css'
// // import Home from './Home'

// // function App()
// // {
// //     const id ={
// //    Name: "Govind Solunke",
// //    Technology: "Web Development using React",
// //    Batch: "B4",
// //    Blood_Group: "O positive"
// //   }
// //   return (
// //     <>
// //     {/* <Home title="Props Components"/> */}
// //     <Home idInfo={id}/>
// //     </>
// //   )
// // }

// // export default App


// // import ProductCard from "./components/ProductCard";
// // import MovieCard from "./components/MovieCard";
// // import MenuItem from "./components/MenuItem";

// import "./App.css";
// import Features from "./Components/Features";
// function App() {
//   return (
//     <>
//       <h1>Product Catalog</h1>

//       <div className="container">
//         <ProductCard
//           name="Laptop"
//           price="55000"
//           category="Electronics"
//           stock="In Stock"
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuKLeRjpLpwAeNQGMWFT4eiRofaTZxOIOK5nhwJ9Jvg&s=10"
//         />

//         <ProductCard
//           name="Headphones"
//           price="2000"
//           category="Electronics"
//           stock="In Stock"
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5rsM8IafJhK5_DSlOHcKyDxpYh0atYpn5E1X8O8UxA&s=10"
//         />

//         <ProductCard
//           name="Shoes"
//           price="3000"
//           category="Fashion"
//           stock="Out of Stock"
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86AnrwYidcO3u2-68vdAcAIy0VcY4DuV-IEgvenvyeA&s=10"
//         />

//         <ProductCard
//           name="Watch"
//           price="4500"
//           category="Accessories"
//           stock="In Stock"
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0PjTFlxACEO0muKHjlpvpN1p12wEX_V00mLVWkz1PQ&s=10"
// />

//         <ProductCard
//           name="Phone"
//           price="25000"
//           category="Electronics"
//           stock="In Stock"
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVHZE1nbn3WhXOhlgmaXPJejCzsSoYdsDa__ryD2vLw&s=10"
//         />
//       </div>

//       <h1>Movie Recommendation</h1>

//       <div className="container">
//         <MovieCard
//           name="3 Idiots"
//           rating="9.2"
//           year="2009"
//           poster="https://picsum.photos/200?6"
//         />

//         <MovieCard
//           name="KGF"
//           rating="8.8"
//           year="2018"
//           poster="https://picsum.photos/200?7"
//         />

//         <MovieCard
//           name="Pushpa"
//           rating="8.4"
//           year="2021"
//           poster="https://picsum.photos/200?8"
//         />

//         <MovieCard
//           name="RRR"
//           rating="9.0"
//           year="2022"
//           poster="https://picsum.photos/200?9"
//         />
//       </div>

//       <h1>Restaurant Menu</h1>

//       <div className="container">
//         <MenuItem
//           dish="Paneer Butter Masala"
//           price="250"
//           category="Veg"
//           rating="4.8"
//           image="https://picsum.photos/200?10"
//         />

//         <MenuItem
//           dish="Chicken Biryani"
//           price="300"
//           category="Non-Veg"
//           rating="4.9"
//           image="https://picsum.photos/200?11"
//         />

//         <MenuItem
//           dish="Pizza"
//           price="400"
//           category="Veg"
//           rating="4.7"
//           image="https://picsum.photos/200?12"
//         />

//         <MenuItem
//           dish="Burger"
//           price="180"
//           category="Veg"
//           rating="4.5"
//           image="https://picsum.photos/200?13"
//         />

//         <MenuItem
//           dish="Fried Rice"
//           price="220"
//           category="Veg"
//           rating="4.6"
//           image="https://picsum.photos/200?14"
//         />

//         <MenuItem
//           dish="Chicken Curry"
//           price="320"
//           category="Non-Veg"
//           rating="4.9"
//           image="https://picsum.photos/200?15"
//         />
//       </div>
//     </>
//   );
// }

// export default App;