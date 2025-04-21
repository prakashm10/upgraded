document.addEventListener("DOMContentLoaded", loadStudents);

function loadStudents() {
  fetch("get_students.php")
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("studentBody");
      tbody.innerHTML = "";
      data.forEach(student => {
        tbody.innerHTML += `
          <tr>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td><button onclick="deleteStudent(${student.id})">Delete</button></td>
          </tr>
        `;
      });
    });
}

function addStudent() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("roll", roll);

  fetch("add_student.php", {
    method: "POST",
    body: formData
  })
    .then(res => res.text())
    .then(() => {
      document.getElementById("name").value = "";
      document.getElementById("roll").value = "";
      loadStudents();
    });
}

function deleteStudent(id) {
  const formData = new FormData();
  formData.append("id", id);

  fetch("delete_student.php", {
    method: "POST",
    body: formData
  })
    .then(res => res.text())
    .then(() => {
      loadStudents();
    });
}
