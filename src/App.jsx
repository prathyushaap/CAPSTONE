import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './component/LandingPage';
import Display from './component/Display';
import LoginPage from './component/LoginPage';
import SignUpForm from './component/SignUp';
import DepartmentProjects from './component/DepartmentProjects';
import ProjectDetails from './component/ProjectDetails';
import UploadProject from './component/UploadProjects';
import StudentCard from './component/Profile';
import EditProfileForm from './component/EditStudentProfile';
import TeacherLayout from './pages/teacher/TeacherLayout';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import AddProject from './pages/teacher/AddProject';
import ManageProject from './pages/teacher/ManageProject';
import TeacherProfile from './pages/teacher/TeacherProfile';
import Draft from './pages/teacher/Draft';
import Hero from './component/Hero';
import Footer from './component/Footer';
import TeacherProfileEdit from './pages/teacher/TeacherProfileEdit';
import Header from './component/Header';
import AboutUs from './component/AboutUs';
import AllProjects from './component/AllProjects';
import AllDepartments from './component/AllDepartments';
import FeaturedProjects from './component/FeaturedProjects';
import ContactUs from './component/ContactUs';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <>
    <SearchProvider>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/header" element={<Header/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/allprojects" element={<AllProjects/>} />
       <Route path="/alldepartments" element={<AllDepartments/>} />
      






      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/featured-projects" element={<FeaturedProjects />} />
      <Route path="/home" element={<Display />} />

      <Route
        path="/departmentprojects/:departmentName"
        element={<DepartmentProjects />}
      />

      <Route path="/projectdetails/:id" element={<ProjectDetails />} />
      <Route path="/uploadproject" element={<UploadProject />} />
      <Route path="/profile" element={<StudentCard />} />
      <Route path="/editprofile" element={<EditProfileForm />} />

      <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherDashboard />} />
        <Route path="add-project" element={<AddProject />} />
        <Route path="add-project/:id" element={<AddProject />} />
        <Route path="manage-project" element={<ManageProject />} />
        <Route path="drafts" element={<Draft />} />
        <Route path="teacher-profile" element={<TeacherProfile />} />
                <Route path="teacher-profile-edit" element={<TeacherProfileEdit />} />

      </Route>
    </Routes>
    </SearchProvider>
    <Footer/>
    </>
  );
}

export default App;
