import NavItem from "../NavItem";
import navigation from "./navigation";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center py-6 sticky top-0 bg-base-100 z-50">
      <div>
        <ul className="flex items-center gap-6">
          {navigation.map((item, index) => {
            return (
              <li key={`nav_${index}`}>
                <NavItem {...item}>{item.label}</NavItem>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
