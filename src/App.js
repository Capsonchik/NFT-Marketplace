import './App.css';
import {Route, Routes} from "react-router-dom";
import {TemplatePage} from "./TemplatePage";
import {MainPage} from "./pages/main/main-page"
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';

function App() {
  return (
      <Routes>
          <Route path='/' element={<TemplatePage />}>
            <Route path='/' element={<MainPage/>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
