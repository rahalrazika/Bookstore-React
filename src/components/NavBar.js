import '../style/index.css';
import userImg from '../assets/user-img.png';

const NavBar = () => (
  <nav className="d-flex">
    <div className="d-flex nav-container">
      <div className="nav-links d-flex ">
        <h1>Bookstore CMS</h1>
        <span>Books</span>
        <span className="non-active-class">Categories</span>
      </div>
      {/*  <img alt="user-img" className="user-img" src={userImg} /> */}
      <button type="button"><img alt="user-img" className="user-img" src={userImg} /></button>
    </div>
  </nav>
);
export default NavBar;
