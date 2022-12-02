import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/register", {
        username,
        email,
        password,
        cpassword,
      });
      res.data && window.location.replace("/signin");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className="label">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="label">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Confirm password..."
          onChange={(e) => setCPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/signin">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}

// import "./signup.css";
// import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import React, { useState } from "react";

// export default function SignUp() {
//   const history = useNavigate();
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     work: "",
//     password: "",
//     cpassword: "",
//   });

//   let name, value;
//   const handleChange = (e) => {
//     name = e.target.name;
//     value = e.target.value;

//     setUser({ ...user, [name]: value });
//   };

//   const handleClick = async (e,index) => {
//     e.preventDefault();
//     const { username, email, phone, work, password, cpassword } = user;

//     const res = await fetch("/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       }),
//     });
//     const data = await res.json();
//     if (res.status === 400 || !data) {
//       window.alert("Invalid Registration");
//     } else {
//       window.alert("Regisration successful");
//       // window.location.replace("/");
//     }

//     return (
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Control
//           key={index}
//             type="text"
//             placeholder="Name"
//             name="username"
//             value={user.username}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Control
//            key={index}
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Control
//            key={index}
//             type="text"
//             placeholder="Phone"
//             name="phone"
//             value={user.phone}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Control
//            key={index}
//             type="text"
//             placeholder="Profession"
//             name="work"
//             value={user.work}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Control
//            key={index}
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Control
//            key={index}
//             type="password"
//             placeholder="Confirm Password"
//             name="cpassword"
//             value={user.cpassword}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" onClick={handleClick}  key={index}>
//           Submit
//         </Button>
//       </Form>
//     );
//   };
// }
// //     <div className="container">
// //       <Grid>
// //         <Paper elevation={10} style={paperStyle}>
// //           <Grid align="center">
// //             <Avatar style={avatarStyle}>
// //               <LockOutlinedIcon />
// //             </Avatar>
// //             <h2>Sign Up</h2>
// //           </Grid>
// //           <FormControl action="" method="POST" fullWidth={true}>
// //             <TextField

// //               variant="standard"
// //               margin="normal"
// //               placeholder="Name"
// //               name="name"
// //               value={user.username}
// //               onChange={handleChange}
// //               fullWidth
// //               required
// //             />
// //             <TextField
// //               variant="standard"
// //               margin="normal"
// //               placeholder="Email"
// //               name="email"
// //               value={user.email}
// //               onChange={handleChange}
// //               fullWidth
// //               required
// //             />
// //             <TextField
// //               variant="standard"
// //               margin="normal"
// //               placeholder="Phone Number"
// //               name="phone"
// //               value={user.phone}
// //               onChange={handleChange}
// //               fullWidth
// //               required
// //             />
// //             <TextField
// //               variant="standard"
// //               margin="normal"
// //               placeholder="Profession"
// //               name="work"
// //               value={user.work}
// //               onChange={handleChange}
// //               fullWidth
// //               required
// //             />
// //             <TextField
// //               variant="standard"
// //               margin="normal"
// //               placeholder="Password"
// //               type="password"
// //               name="password"
// //               value={user.password}
// //               onChange={handleChange}
// //               fullWidth
// //               required
// //             />
// //             <TextField
// //               variant="standard"
// //               margin="normal"
// //               id="margin-normal"
// //               placeholder="Confirm Password"
// //               type="password"
// //               name="cpassword"
// //               value={user.cpassword}
// //               onChange={handleChange}
// //               fullWidth
// //               required
// //             />

// //             <Button
// //               type="submit"
// //               color="primary"
// //               variant="contained"
// //               onClick={handleClick}
// //               style={btnstyle}
// //               fullWidth
// //             >
// //               Sign Up
// //             </Button>
// //           </FormControl>
// //         </Paper>
// //       </Grid>
// //     </div>
// //   );
// // }
