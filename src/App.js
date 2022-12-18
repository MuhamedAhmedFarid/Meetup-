import {BrowserRouter , Route, Routes  } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetup";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<AllMeetupPage/>}/>
        <Route path="/NewMeetupPage" element={<NewMeetupPage/>}/>
        <Route path="/FavoritesPage" element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
