import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Menu from '../components/Menu';
import ProtectedPage from '../components/ProtectedPage';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import { AuthProvider } from '../contexts/Auth';
import Comments from '../pages/Comments';

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
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
                <ProtectedPage>
                  <Posts key="posts" />
                </ProtectedPage>
              </AnimatePresence>
            }
          />
          <Route
            path="/posts/comments/:id"
            element={
              <AnimatePresence mode="wait">
                <ProtectedPage>
                  <Comments key="comments" />
                </ProtectedPage>
              </AnimatePresence>
            }
          />

          <Route key="error" path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
