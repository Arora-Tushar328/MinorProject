import { MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MyMenuItem(props) {

  return (
    <Link
      to={props.link}
      onClick={() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <MenuItem>
        {props.name}
      </MenuItem>
    </Link>
  );
}
export default MyMenuItem;
