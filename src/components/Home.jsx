import { BrowserRouter, Routes, Route } from "react-router-dom";
import Affiliate from "./Affiliate/Affiliate";
import Privacy from "./Privacy/Privacy";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="affiliate" element={<Affiliate />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
