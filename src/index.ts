type Employee = {
    student: [fisrtName: string, lastName: string],
    age: number,
    department: string,
    skills: string,
    isActive: boolean
}

const employee1: Employee = {
    student: ["Tsholofetso", "Pooe"],
    age: 32,
    department: "IT",
    skills: "HTML5, CSS3, JavaScript",
    isActive: true
}

const employee2: Employee = {
    student: ["Karabo", "Radebe"],
    age: 30,
    department: "Marketing",
    skills: "Photoshop, InDesign, Business Management",
    isActive: false
}

const logEmployee = (employee: Employee): void =>{
    console.log(`
    --- Employee Details ---
    Name: ${employee.student[0]} ${employee.student[1]}
    Age: ${employee.age}
    Department: ${employee.department}
    Skills: ${employee.skills}
    Active: ${employee.isActive}
    ------------------------
    `)
}

logEmployee(employee1)
logEmployee(employee2)