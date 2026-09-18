import { useState } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
function App() {
 const [students, setStudents] =useState([
 {
  id:1,
  fullName:"Bonheur",
  age:20,
  course:"software Development",
  email:"bob@gmail.com"
 },
 {
  id: 1,
  fullName:"Gedeon",
  age:20,
  course:"software Development",
  email:"gedeon@gmail.com"
 },{
  id: 2,
  fullName:"king",
  age:20,
  course:"software Development",
  email:"king@gmail.com"
 },{
  id: 3,
  fullName:"kamuzinzi",
  age:20,
  course:"software Development",
  email:"zinzi@gmail.com"
 },
 ]);

 const [searchTerm, setSearchTerm] = useState("");

 const [selectedCourse, setSelectedCourse] = useState("All courses");

 const [editingStudent, setEditingStudent] = useState(null);

 function handleAddstudent(student){
  const newStudent = {
    id:Date.now(),
    ...student 
  };
  setStudents([...students,newStudent]);
 }
 function handleDeleteStudent(id){
  setStudents(
     students.filter((student) => student.id !==id)
  );
 }

  function handleEditStudent(student) {
  setEditingStudent(student);
}


 function handleUpdateStudent(id, updatedStudent) {
  setStudents(
    students.map((student) =>
      student.id === id
        ? { ...student, ...updatedStudent }
        : student
    )
  );

  setEditingStudent(null);
}
 const filteredStudents =students.filter((student) => {
  const matchesName = student.fullName
  .toLowerCase()
  .includes(searchTerm.toLowerCase());

   const matchesCourse =

   selectedCourse ==="All courses" ||
   student.course === selectedCourse

   return matchesName && matchesCourse;
 });
  return (
    <div>
      <Header/>
      <main>
        <div className="statistics">
          <h2>Total students: {students.length}</h2>
        </div>

        <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        />

        <StudentForm 
        
        onAddStudent={handleAddstudent}
        onUpdateStudent={handleUpdateStudent}
        editingStudent={editingStudent}
        
        />

        <StudentList   
        students={filteredStudents}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent} 
        />
      
      </main>
    </div>
  );
}

export default App;