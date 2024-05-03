import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNav from "./components/PageNav";
import Homepage from "./pages/Homepage";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import Dynamic from "./components/Dynamic";
import Main from "./components/Main";

export default function App() {
  return (
    <BrowserRouter>
      <PageNav />

      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="pageA"
          element={
            <Main>
              <PageA />
            </Main>
          }
        />
        <Route
          path="pageB"
          element={
            <Main>
              <PageB />
            </Main>
          }
        />
        <Route
          path="dynamic"
          element={
            <Main>
              <Dynamic />
            </Main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
