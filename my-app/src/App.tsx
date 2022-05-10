import { getUsers } from "../src/features/users/usersSlice";
import { useAppDispatch } from "./app/hooks";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  const dispatch = useAppDispatch(); //Этот хук возвращает ссылку на dispatch-функцию из хранилища Redux

  dispatch(getUsers());

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={"/roox-test"} element={<Wrapper />}>
            <Route index element={<UsersContainer />} />
            <Route path=":id" element={<ProfileContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
