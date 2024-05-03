import { FaChevronLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { prevPage, getPageData } from "../features/pageSlice";

export default function Left() {
  const dispatch = useDispatch();
  const pageData = useSelector(getPageData);
  const pageNo = useSelector((state) => state.page.pageNo);

  return (
    <div onClick={() => dispatch(prevPage())}>
      <NavLink to={pageData[pageNo - 1]}>
        <FaChevronLeft className="text-4xl  font-bold mb-5" />
      </NavLink>
    </div>
  );
}
