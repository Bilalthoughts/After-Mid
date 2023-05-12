import logo from './logo.svg';
import './App.css';
import SignUp from './pages/auth/signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  ErrorPage  from './pages/error-page';
import  Feed  from './pages/feed';
import SignIn from './pages/auth/signin';
import HomeContainer from './pages/home';
import ProfilePage from './pages/profilePage';
import DarkComponent from './components/darkmode';
import UserForm from './pages/form';
import HireMeCard from './components/HireMeCard';
import HireMeForm from './components/HireMeForm';
import HireFormPage from './pages/hireForm';
import HireMePage from './pages/hireMePage';
import NotificationPage from './pages/notificationPage';
import QnAPage from './pages/QnAPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "/",
        element: <HomeContainer />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },

      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "UserForm",
        element: <UserForm />,
      },
      {
        path: "Hire me",
        element: <HireMePage />,
      },
      {
        path: "Notification page",
        element: <NotificationPage />,
      },
      {
        path: "HireMe Form",
        element: <HireFormPage />,
        // element: <HireFormPage />,
      },
      {
        path: "profilepage",
        element: <ProfilePage />,
      },
      {
        path: "QnAPage",
        element: <QnAPage />,
      },
      {
        path: "ask question",
        element: <QnAPage />,
      },
      
    ],
  },

]);


function App() {
  
  
  
  return (
    <>
    
     <RouterProvider router={router} />
 
   </>
  );
}

export default App;
