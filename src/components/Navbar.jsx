import { Link } from "react-router-dom";


const links = [
  {
    title: "Home",
    link: "/",
  },
  //   add the other link as well
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <ul style={{textDecoration:"none",listStyle:"none"}}>
      {links.map((el,index) => (
        <Link to={el.link} key={index}>
          <li>{el.title}</li>
        </Link>
      ))}
    </ul>
  );
};
