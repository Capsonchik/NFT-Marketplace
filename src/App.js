import './App.css'
import { Route, Routes } from 'react-router-dom'
import { TemplatePage } from './TemplatePage'
import { MainPage } from './pages/main/main-page'
import { NotFoundPage } from './pages/notFound/not-found-page'
import { ProfilePage } from './pages/profile/profile-page'
import { Signin } from './pages/singnin/signin'
import { Signup } from './pages/signup/signup'
import { EditProfile } from './pages/editProfile/edit-profile';

import {Users} from './state/users.js'
import {Cards} from './state/cards.js'

function App() {
  return (
      <Routes>
          <Route path='/' element={<TemplatePage />}>
            <Route index element={<MainPage users={Users} cards={Cards} />} />
            <Route path='/profile' element={<ProfilePage users={Users} cards={Cards} />} />
            <Route path='/profile/edit' element={<EditProfile users={Users}/>} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
