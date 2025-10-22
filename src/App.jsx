import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DongRyeongBio from "./pages/Bio/DongRyeongBio/DongRyeongBio";
import GwangHyeokBio from "./pages/Bio/GwangHyeokBio/GwangHyeokBio";
import MinJungBio from "./pages/Bio/MinJungBio/MinJungBio";
import YeJinBio from "./pages/Bio/YeJinBio/DongRyeongBio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio/dongryeong" element={<DongRyeongBio />} />
      <Route path="/bio/gwanghyeok" element={<GwangHyeokBio />} />
      <Route path="/bio/minjung" element={<MinJungBio />} />
      <Route path="/bio/yejin" element={<YeJinBio />} />
    </Routes>
  );
}

export default App;
