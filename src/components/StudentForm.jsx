import { useEffect, useState } from "react";

function StudentForm({ onAddStudent, onUpdateStudent, editingStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Put the selected student's data into the form
  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.fullName);
      setAge(editingStudent.age);
      setCourse(editingStudent.course);
      setEmail(editingStudent.email);
      setError("");
    }
  }, [editingStudent]);

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "" || age === "" || course === "" || email === "") {
      setError("Please fill in all fields.");
      return;
    }

    const studentData = {
      fullName: name,
      age: age,
      course: course,
      email: email
    };

    if (editingStudent) {
      onUpdateStudent(editingStudent.id, studentData);
    } else {
      onAddStudent(studentData);
    }

    clearForm();
  }

  function clearForm() {
    setName("");
    setAge("");
    setCourse("");
    setEmail("");
    setError("");
  }

  return (
    <div className="student-form">
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />

        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        >
          <option value="">Select Course</option>
          <option value="Software Development">
            Software Development
          </option>
          <option value="Computer Science">
            Computer Science
          </option>
          <option value="Information Technology">
            Information Technology
          </option>
          <option value="Networking">
            Networking
          </option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>

        {editingStudent && (
          <button type="button" onClick={clearForm}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default StudentForm;