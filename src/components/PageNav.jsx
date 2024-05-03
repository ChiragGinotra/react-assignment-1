import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setPage } from "../features/pageSlice";

export default function PageNav() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center items-center">
        <NavLink to="/">
          <IoHome className="text-4xl text-center font-bold mb-5" />
        </NavLink>
      </div>

      <nav className=" border-b border-stone-200 bg-stone-300 px-4 py-3 uppercase sm:px-6">
        <ul className="flex items-center justify-between">
          <li className="text-xl font-bold">
            <NavLink to="/pageA" onClick={() => dispatch(setPage(0))}>
              Page A
            </NavLink>
          </li>

          <li className="text-xl font-bold">
            <NavLink to="/pageB" onClick={() => dispatch(setPage(1))}>
              Page B
            </NavLink>
          </li>

          <li className="text-xl font-bold">
            <NavLink to="/dynamic" onClick={() => dispatch(setPage(2))}>
              Dynamic
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
