import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./page/Auth/login";
import SignUp from "./page/Auth/register";
import { TodoIndex } from "./page/todo/todo_index";
import TopBar from "./component/topbar";
import { Layout } from "./page/layout/layout_index";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
     
        <Route >
          {/* <Route index element={<Home />} /> */}
           <Route path="/" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<Layout/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

