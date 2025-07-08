
import { MdAccountCircle } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";


export function TopNavbar() {
  return (
    <nav className="flex justify-end">
      <div className="flex cursor-pointer space-x-4 item-center">
        <div className="flex text-2xl cursor-pointer">
           <AiOutlineLogout />
        </div>
        <div className="flex text-2xl cursor-pointer">
          <MdAccountCircle />
        </div>
        <div className="flex text-2xl cursor-pointer">
          <CgMenuGridR />
        </div>
      </div>
    </nav>
  );
}