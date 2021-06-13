import './App.css'

import Home from '../src/pages/Home'
import RoomPage from './pages/RoomPage'
import SingleRoom from '../src/pages/SingleRoom'
import Error from '../src/pages/Error'

import { Route, Switch } from 'react-router-dom'

import Navbar from '../src/components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={RoomPage} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}
// Route ko co path se always match
// rooms/slug sẽ chi ra thong tin room muon tim
//khi muôn hiện room chỉ hien room,khi muon hien Home chỉ hien home,chỉ hien single-room khi muon
//phải có :/slug ko duoc de /slug
export default App
