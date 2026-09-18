function studentCard({student,onEdit,onDelete}){
    return (
        <div className="studentCard">
         <h3>{student.fullName}</h3>
        
        <p><strong>student ID:</strong>{student.id}</p>
        <p><strong>Age:</strong>{student.age}</p>
        <p><strong>Course:</strong>{student.course}</p>
        <p><strong>Email:</strong>{student.email}</p>
         
         <div className="card-buttons">
          <button onclick={()=> onEdit(student)}>Edit</button>
          <button onclick={()=> onDelete(student.id)}>Delete</button>
         </div>
        </div>
    );
}


export default studentCard;