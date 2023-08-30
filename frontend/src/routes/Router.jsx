import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Menu from '../components/Menu';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Posts from '../pages/Posts';
import Error from '../pages/Error';

const AppRoutes = () => {
  return (
    <Router>
      <Menu />

      <Routes>
        <Route
          path="/"
          element={
            <AnimatePresence mode="wait">
              <Home key="home" />
            </AnimatePresence>
          }
        />
        <Route
          path="/signup"
          element={
            <AnimatePresence mode="wait">
              <SignUp key="signup" />
            </AnimatePresence>
          }
        />
        <Route
          path="/posts"
          element={
            <AnimatePresence mode="wait">
              <Posts key="posts" />
            </AnimatePresence>
          }
        />

        <Route key="error" path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
