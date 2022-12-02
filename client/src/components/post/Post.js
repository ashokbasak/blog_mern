import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (
    <div className="">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        alt=""
      />
      <div className="postInfo">
        {/* <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div> */}
        
         <span className="postTitle">
         
          <Link to="" className="link">
            Lorem ipsum dolor sit amet
           {/* {post.title} */}
          </Link>
        </span> 
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}




// import "./post.css";
// import { Link } from "react-router-dom";


// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
//   MDBCardFooter,
//   MDBCardImage,
// } from "mdb-react-ui-kit";

// function Post({post}) {
//   return (
//     <MDBRow className="cards">
//       <MDBCol sm="4">
//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
//             position="top"
//             alt="..."
//           />
//           <MDBCardBody>
//             <MDBCardTitle>{post.title}</MDBCardTitle>
//             <MDBCardText className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sit provident magni aspernatur nisi aliquam vel deleniti consequatur praesentium quos hic dolorum magnam velit iste mollitia ipsum dolores eum et?</MDBCardText>
//             {/* <MDBCardFooter>{new Date(p.createdAt).toDateString()}</MDBCardFooter> */}
//             <Link to="/single-post">
//               <MDBBtn href="#">Read More</MDBBtn>
//             </Link>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol sm="4">
//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
//             position="top"
//             alt="..."
//           />
//           <MDBCardBody>
//             <MDBCardTitle></MDBCardTitle>
//             <MDBCardText className="postDesc">
//            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium natus, minima ad explicabo officia quam corporis quibusdam, animi iusto ullam aliquid quo accusamus sequi tempore eum facilis? Facere, alias officiis!
//             </MDBCardText>
//             <MDBCardFooter>2 days ago</MDBCardFooter>
//             <MDBBtn href="#">Read More</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol sm="4">
//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
//             position="top"
//             alt="..."
//           />
//           <MDBCardBody>
//             <MDBCardTitle>this is the title</MDBCardTitle>
//             <MDBCardText className="postDesc">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat nobis, tenetur alias, molestiae ullam, deserunt facilis aperiam ut ab odio temporibus nisi delectus totam eum ipsum autem? Unde, eius!
//             </MDBCardText>
//             <MDBCardFooter>2 days ago</MDBCardFooter>
//             <MDBBtn href="#">Read More</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   );
// }

// export default Post;
