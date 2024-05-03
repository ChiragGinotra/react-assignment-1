import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, getPageData } from "../features/pageSlice";

export default function Right() {
  const dispatch = useDispatch();
  const pageData = useSelector(getPageData);
  const pageNo = useSelector((state) => state.page.pageNo);

  return (
    <div onClick={() => dispatch(nextPage())}>
      <NavLink to={pageData[pageNo + 1]}>
        <FaChevronRight className="text-4xl text-center font-bold mb-5" />
      </NavLink>
    </div>
  );
}
