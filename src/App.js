import './App.css';
import {Route, Routes} from "react-router-dom";
import {AppMain} from "./pages/appMain/app-main";

function App() {
  return (
      <Routes>
          <Route path='/' element={<AppMain />}>
              {/*<Route path='/' element={<MainPage />}>*/}
              {/*    <Route path='/allitems' />*/}
              {/*    <Route path='/art' />*/}
              {/*    <Route path='/game'/>*/}
              {/*    <Route path='/photography'/>*/}
              {/*    <Route path='/music'/>*/}
              {/*    <Route path='/video'/>*/}
              {/*</Route>*/}
              {/*<Route path='/signin' element={<Signin />}/>*/}
              {/*<Route path='/signup' element={<Signup />}/>*/}
              {/*/!* <Route path='/profile' element={<ProfilePage />}/> *!/*/}
              {/*<Route path='/profile' element={<ProfilePage />}>*/}
              {/*    <Route path='/profile/' element={<CollectionCardOnSale />}/>*/}
              {/*    <Route path='/profile/collectibles' element={<CollectionCardOnSale />}/>*/}
              {/*    <Route path='/profile/created' element={<CollectionCardOnSale />}/>*/}
              {/*    <Route path='/profile/following' element={<CollectionCardOnSale />}/>*/}
              {/*    <Route path='/profile/followers' element={<CollectionCardOnSale />}/>*/}
              {/*</Route>*/}
              {/*<Route path='/profile/edit' element={<EditProfile />}/>*/}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
