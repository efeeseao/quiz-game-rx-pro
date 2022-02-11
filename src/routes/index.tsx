import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Game, NotFound } from 'templates'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default AppRoutes
