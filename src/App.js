import './App.css';
import {Route, Routes} from "react-router-dom";
import {TemplatePage} from "./TemplatePage";
import {MainPage} from "./pages/main/main-page"
import { NotFoundPage } from './pages/notFound/not-found-page';

function App({users, cards}) {
  return (
      <Routes>
          <Route path='/' element={<TemplatePage />}>
            <Route path='/' element={<MainPage users={users} cards={cards} />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
