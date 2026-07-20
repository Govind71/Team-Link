// import React from "react";
// import { Card, Container } from "react-bootstrap";
// import logo from "./assets/Images/download.jpeg";

// const Home = (props) => {
//   return (
//     <Container className="mt-5 d-flex justify-content-center">
//       <Card style={{ width: "18rem", padding: "15px" }}>
        
//         <Card.Img
//           variant="top"
//           src={logo}
//           style={{
//             width: "100px",
//             height: "100px",
//             borderRadius: "50%",
//             margin: "auto",
//           }}
//         />

//         <Card.Body>
//           <Card.Title className="text-center">
//             Student ID Card
//           </Card.Title>

//           <p><b>Name:</b> {props.idInfo.Name}</p>
//           <p><b>Technology:</b> {props.idInfo.Technology}</p>
//           <p><b>Batch:</b> {props.idInfo.Batch}</p>
//           <p><b>Blood Group:</b> {props.idInfo.Blood_Group}</p>
//         </Card.Body>

//       </Card>
//     </Container>
//   );
// };

// export default Home;
import React from "react";

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
      <p>Category: {props.category}</p>
      <p>Status: {props.stock}</p>
    </div>
  );
}

export default ProductCard;