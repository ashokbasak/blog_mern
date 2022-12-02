import Post from "../post/Post";
import "./header.css";

function Header() {
  return (
    <>
    {/* <div className="header">
        <div className="header-left">
          <h1 className="header-name">BLOGGY</h1>
          <h4 className="header-subname">Welcome To The World Of Interesting Blogs</h4>
          <p className="header-desc">Your website is the most important component of your marketing strategy. It serves as the hub of all of your online activity. It is where you will make money, or lose money. We design websites that help you generate the most conversions. We do this by delivering an attractive design, responsive theme, and user-friendly website.</p>
        </div>
        <div className="header-right">
          <img  className="header-image" src="https://assets-global.website-files.com/5db0d55a083f4bf9f19d2e4e/5f30d006dcebe9b8f9e789de_QOuaNRUnSaGJ6TMcFtCC_bigstock--186287221.jpeg" alt="homeImage" srcset="" />
          </div>
      </div> */}
    <div className="header">
      <div className="header-titles">
        <span className="header-title">BLOGGY</span>
        <span className="header-subtitle">
          Welcome To The World Of Interesting Bolgs
        </span>
      </div>

      <img
        className="header-img"
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        srcset=""
      />
     
    </div>
     {/* <Post /> */}
     </>
  );
}

export default Header;
