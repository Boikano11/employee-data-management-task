"use strict";
const employee1 = {
    student: ["Tsholofetso", "Pooe"],
    age: 32,
    department: "IT",
    skills: "HTML5, CSS3, JavaScript",
    isActive: true
};
const employee2 = {
    student: ["Karabo", "Radebe"],
    age: 30,
    department: "Marketing",
    skills: "Photoshop, InDesign, Business Management",
    isActive: false
};
const logEmployee = (employee) => {
    console.log(`
    --- Employee Details ---
    Name: ${employee.student[0]} ${employee.student[1]}
    Age: ${employee.age}
    Department: ${employee.department}
    Skills: ${employee.skills}
    Active: ${employee.isActive}
    ------------------------
    `);
};
logEmployee(employee1);
logEmployee(employee2);
