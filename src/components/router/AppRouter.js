import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../layout/home/Home";
import { About } from "../layout/about/About";
import { SuccessStories } from "../layout/success-stories/SuccessStories";

export const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="success-stories" element={<SuccessStories />} />
      </Routes>
    </BrowserRouter>
  );
};
