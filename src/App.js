import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Profile, ToDo, Gallery, Posts } from "./pages";
import { NotFound } from "./components";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/:id/posts" element={<Posts />} />
      <Route path="/profile/:id/gallery" element={<Gallery />} />
      <Route path="/profile/:id/todo" element={<ToDo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
