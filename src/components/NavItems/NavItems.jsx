import NavItemsCSS from "./NavItems.module.css";

import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";

function NavItems() {
  return (
    <div className={NavItemsCSS.container}>
      <div className={NavItemsCSS.shortlist}>
        <HiOutlineHeart className={NavItemsCSS.heartIcon} />
        <p>Shortlist</p>
      </div>
      <div className={NavItemsCSS.contact}>
        <HiOutlineMail className={NavItemsCSS.mailIcon} />
        <p>Contact</p>
      </div>
    </div>
  );
}

export default NavItems;
