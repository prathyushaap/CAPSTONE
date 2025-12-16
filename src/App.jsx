// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// import LandingPage from './component/LandingPage';
// import Display from './component/Display';
// import LoginPage from './component/LoginPage';
// import SignUpForm from './component/SignUp';
// import DepartmentProjects from './component/DepartmentProjects';
// import ProjectDetails from './component/ProjectDetails';
// import UploadProject from './component/UploadProjects';
// import StudentCard from './component/Profile';
// import EditProfileForm from './component/EditStudentProfile';
// // Import other pages as needed
// // import Profile from './pages/Profile';

// function App() {
//   return (
    
 
      

//       <Routes>
//         <Route path="/" element={< LoginPage/>} />
//         <Route path="/signup" element={< SignUpForm/>} />
//         <Route path="/home" element={< Display/>} />
//         <Route path="/departmentproject" element={< DepartmentProjects/>} />
//         <Route path="/projectdetails/:id" element={< ProjectDetails/>} />
//         <Route path="/uploadproject" element={<UploadProject/>} />
//         <Route path="/profile" element={<StudentCard/>} />
//         <Route path="/editprofile" element={<EditProfileForm/>} />

     

//         {/* Example additional route */}
//         {/* <Route path="/profile" element={<Profile />} /> */}
//       </Routes>
  
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={<Display />} />

        {/* FIX THIS ROUTE */}
        <Route
  path="/departmentprojects/:departmentName"
  element={<DepartmentProjects />}
/>

        <Route path="/projectdetails/:id" element={<ProjectDetails />} />
        <Route path="/uploadproject" element={<UploadProject />} />
        <Route path="/profile" element={<StudentCard />} />
        <Route path="/editprofile" element={<EditProfileForm />} />

         <Route path="/teacher" element={<TeacherLayout/>}>
            <Route index element={<TeacherDashboard/>} />
            <Route path="add-project" element={<AddProject/>} />
            <Route path="manage-project" element={<ManageProject/>} />
            <Route path="teacher-profile" element={<TeacherProfile/>} />
          </Route>
      </Routes>
    
  );
}

export default App;

