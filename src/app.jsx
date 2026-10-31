
import Welcom from "./Welcom.jsx";
import CenterInformation from "./center.jsx";
import StudentProfile from "./student.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Welcom />
      <CenterInformation />
      <StudentProfile />
    </div>
  );
};

export default App;
