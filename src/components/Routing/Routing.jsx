import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import Header from '../Header'
import Footer from '../Footer/Footer'

//Pages
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Hosting from '../../pages/Hosting/Hosting'
import Error from '../../pages/Error/Error'

/** 
 * 
 * Manage the route of the application
 * 
*/

function Routing() {
  return (
    <Router>
      {/* Always show the Header */}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* Show the details hosting page using the hostingId to fetch the data on Hosting Component with useParams */}
        <Route path="hosting/:hostingId" element={<Hosting />} />
        {/* Catch all other route and show the error page */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Always show the Footer */}
      <Footer />
    </Router>
  )
}

export default Routing
