import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "@/components/shared/navbar";
import Auth from "./pages/auth";
import NoteFound from "./pages/note-found";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </>
  );
};

export default App;
