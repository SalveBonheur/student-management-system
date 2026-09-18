# Student Management System

## Introduction

This project is a simple Student Management System developed using React.js. The main purpose of the system is to make it easier to add, view, edit, delete, and search for student information.

I developed this project to practice the main concepts of React.js, especially components, props, state, events, arrays, objects, and displaying data dynamically.

## Project Description

The Student Management System allows a user to manage student records from one page.

Each student record contains:

* Student ID
* Full Name
* Age
* Course
* Email

The system starts with some sample student records. New students can also be added through the form.

## Main Features

### 1. Add Student

The user can enter a student's:

* Full name
* Age
* Course
* Email

After submitting the form, the student is added to the list without refreshing the page.

The form is also cleared after adding the student.

### 2. Display Students

All student records are displayed using reusable React components.

Each student has a separate student card showing their information and buttons for editing or deleting the record.

### 3. Edit Student

The Edit button allows the user to select an existing student.

The student's information is then placed back into the form, where it can be changed and updated.

### 4. Delete Student

The Delete button removes a student from the list.

The list is updated immediately after the student is deleted.

### 5. Search Students

The search field allows the user to search for a student by name.

The displayed list changes according to the text entered in the search field.

### 6. Filter by Course

Students can also be filtered according to their course.

The available courses are:

* All Courses
* Software Development
* Computer Science
* Information Technology
* Networking

### 7. Student Count

The system displays the total number of students currently available.

The number changes automatically when students are added or deleted.

### 8. Form Validation

The system checks that all required fields have been filled before adding or updating a student.

If a required field is empty, an error message is displayed.

### 9. No Students Message

When there are no students to display, the system shows a message indicating that there are no students available.

## Technologies Used

The project was built using:

* React.js
* Vite
* JavaScript
* HTML
* CSS

## React Concepts Used

This project helped me practice several important React concepts.

### Components

The application is divided into different reusable components:

```text
Header
StudentForm
StudentList
StudentCard
SearchBar
```

This makes the project easier to understand and maintain.

### Props

Props are used to pass information and functions from one component to another.

For example, student information is passed from the student list to the student card.

### useState

The `useState` Hook is used to store and update information such as:

* Student records
* Search text
* Selected course
* Student being edited
* Form values

### Events

The application uses React events such as:

* `onClick`
* `onChange`
* `onSubmit`

These events allow the application to respond to user actions.

### Arrays and Objects

Student information is stored as objects inside an array.

For example, a student object contains properties such as:

```text
id
fullName
age
course
email
```

### map()

The `map()` method is used to display multiple students by creating a student card for each student.

### filter()

The `filter()` method is used for searching students and filtering students according to their course.

### Conditional Rendering

Conditional rendering is used to display different content depending on the application state.

For example, the form changes between:

```text
Add Student
```

and:

```text
Edit Student
```

It is also used to show the "No students available" message when the student list is empty.

## Project Structure

The important files in the project are organized as follows:

```text
student-management-system/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── StudentForm.jsx
│   │   ├── StudentList.jsx
│   │   ├── StudentCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## How the Application Works

When the application starts, React loads the main `App` component.

The `App` component keeps the student information in its state and passes the necessary data and functions to the other components.

The `StudentForm` is responsible for adding and editing students.

The `StudentList` receives the students and displays them.

The `StudentCard` displays the information of one student and provides the Edit and Delete buttons.

The `SearchBar` handles searching and course filtering.

This separation makes each component responsible for a specific part of the application.

## How to Run the Project

First, make sure Node.js is installed on the computer.

Open the project folder in the terminal and run:

```bash
npm install
```

After the installation is complete, start the development server:

```bash
npm run dev
```

Vite will provide a local address that can be opened in a web browser.

## Purpose of the Project

The main purpose of this project is to demonstrate my understanding of React.js and how different React concepts can be combined to create an interactive application.

Through this project, I practiced creating components, managing state, handling forms, passing props, working with arrays and objects, and updating the user interface without refreshing the page.

## Conclusion

The Student Management System is a practical React.js application for managing basic student records.

Although it is a simple project, it demonstrates the main React concepts I have learned and gives me a foundation for developing larger applications in the future.
