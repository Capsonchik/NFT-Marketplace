import './App.css'
import { Route, Routes } from 'react-router-dom'
import { TemplatePage } from './TemplatePage'
import { MainPage } from './pages/main/main-page'
import { NotFoundPage } from './pages/notFound/not-found-page'
import { ProfilePage } from './pages/profile/profile-page'
import { Signin } from './pages/singnin/signin'
import { Signup } from './pages/signup/signup'
import { EditProfile } from './pages/editProfile/edit-profile';
import CardContext from './context'

import {Users} from './state/users.js'
import {Cards} from './state/cards.js'
import {OnSale} from './pages/profile/actionHistory/collectionCard/onSale/on-sale'
import {Collectibles} from './pages/profile/actionHistory/collectionCard/collectibles/collectibles'
import {Likes} from './pages/profile/actionHistory/collectionCard/likes/likes'
import {Created} from './pages/profile/actionHistory/collectionCard/created/created'
import {Following} from './pages/profile/actionHistory/collectionCard/following/following'
import {Followers} from './pages/profile/actionHistory/collectionCard/followers/followers'

function App() {
  return (
    <CardContext.Provider value={Cards}>
      <Routes>
          <Route path='/' element={<TemplatePage />}>
            <Route index element={<MainPage users={Users} cards={Cards} />} />
            <Route path='profile' element={<ProfilePage users={Users} />}>
              <Route path='on-sale' element={<OnSale />} />
              <Route path='collectibles' element={<Collectibles />} />
              <Route path='created' element={<Created />} />
              <Route path='likes' element={<Likes />} />
              <Route path='following' element={<Following />} />
              <Route path='followers' element={<Followers />} />
            </Route>
            <Route path='profile/edit' element={<EditProfile users={Users}/>} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </CardContext.Provider>
  );
}

export default App;
