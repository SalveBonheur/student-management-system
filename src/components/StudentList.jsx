import studentCard from "./StudentCard";

function studentList({students, onEdit, onDelete}){
    return(
     <div className="student-list">
        <h2>students</h2>

       {students.length === 0?(
        <p>No students available</p>
       ):(
        students.map((student)=>(
            <studentCard
            key={student.id}
            student={student}
            onEdit={onEdit}
            onDelete={onDelete}
            />
        ))
       )}
     </div>
    );
}

export default studentList;