// Default dataset: students array - Updated for Year
const defaultStudents = [
  {
    "reg": "25129043",
    "name": "SANJAI S M",
    "dept": "B.Sc Computer Technology",
    "year": "First year",
    "email": "25129043@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25129002",
    "name": "Anunandana M",
    "dept": "B.Sc Computer Technology",
    "year": "First year",
    "email": "25129002@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25129064",
    "name": "Vinodhini S",
    "dept": "B.Sc Computer Technology",
    "year": "First year",
    "email": "25129064@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25129008",
    "name": "Dhakshana",
    "dept": "B.Sc Computer Technology",
    "year": "First year",
    "email": "25129008@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25129016",
    "name": "GOWTHAM S",
    "dept": "B.Sc Computer Technology",
    "year": "First year",
    "email": "25129016@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25129028",
    "name": "Narenshaswath",
    "dept": "B.Sc Computer Technology",
    "year": "First year",
    "email": "25129028@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24129050",
    "name": "Shalini C R",
    "dept": "B.Sc Computer Technology",
    "year": "2nd",
    "email": "24129050@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24129043",
    "name": "Sadashini V",
    "dept": "B.Sc Computer Technology",
    "year": "2nd",
    "email": "24129043@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24129021",
    "name": "Joyslin L",
    "dept": "B.Sc Computer Technology",
    "year": "2nd",
    "email": "24129021@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24129048",
    "name": "Sasmita V A",
    "dept": "B.Sc Computer Technology",
    "year": "2nd",
    "email": "24129048@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24129051",
    "name": "Sharan R",
    "dept": "B.Sc Computer Technology",
    "year": "2nd",
    "email": "24129051@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24129020",
    "name": "Jeevika P",
    "dept": "B.Sc Computer Technology",
    "year": "2nd",
    "email": "24129020@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25128035",
    "name": "Maris S",
    "dept": "B.Sc CS (AI & DS)",
    "year": "First year",
    "email": "25128035@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25128011",
    "name": "Arun prabhu D",
    "dept": "B.Sc CS (AI & DS)",
    "year": "First year",
    "email": "25128011@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24128028",
    "name": "Kiruthika K",
    "dept": "B.Sc CS (AI & DS)",
    "year": "2nd",
    "email": "24128028@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24128044",
    "name": "Ramya M",
    "dept": "B.Sc CS (AI & DS)",
    "year": "2nd",
    "email": "24128044@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24128047",
    "name": "Ritu",
    "dept": "B.Sc CS (AI & DS)",
    "year": "2nd",
    "email": "24128047@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24128051",
    "name": "Sakthi R",
    "dept": "B.Sc CS (AI & DS)",
    "year": "2nd",
    "email": "24128051@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24128046",
    "name": "Rishivarman G",
    "dept": "B.Sc CS (AI & DS)",
    "year": "2nd",
    "email": "24128046@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24128065",
    "name": "Vedhavarshini N",
    "dept": "B.Sc CS (AI & DS)",
    "year": "2nd",
    "email": "24128065@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25130044",
    "name": "Rithika",
    "dept": "B.Sc CS with Cyber Security",
    "year": "First year",
    "email": "25130044@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25130021",
    "name": "S. Gopika",
    "dept": "B.Sc CS with Cyber Security",
    "year": "First year",
    "email": "25130021@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25130042",
    "name": "Priyadharshini V",
    "dept": "B.Sc CS with Cyber Security",
    "year": "First year",
    "email": "25130042@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25140047",
    "name": "Sabari Vasan",
    "dept": "B.Sc CS with Cyber Security",
    "year": "First year",
    "email": "25140047@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25130054",
    "name": "Sreya",
    "dept": "B.Sc CS with Cyber Security",
    "year": "First year",
    "email": "25130054@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25130061",
    "name": "Theo Antony A",
    "dept": "B.Sc CS with Cyber Security",
    "year": "First year",
    "email": "25130061@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25130043",
    "name": "Renuka S",
    "dept": "B.Sc CS with Cyber Security",
    "year": "First year",
    "email": "25130043@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24106075",
    "name": "S. Chithra",
    "dept": "B.Sc CS",
    "year": "2nd",
    "email": "24106075@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24106087",
    "name": "Jeya Parvathi B",
    "dept": "B.Sc CS",
    "year": "2nd",
    "email": "24106087@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24106085",
    "name": "Ishwarya S",
    "dept": "B.Sc CS",
    "year": "2nd",
    "email": "24106085@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25107121",
    "name": "Savitha M",
    "dept": "B.Sc Information Technology",
    "year": "First year",
    "email": "25107121@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25107080",
    "name": "Harini",
    "dept": "B.Sc Information Technology",
    "year": "First year",
    "email": "25107080@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25104131",
    "name": "Yashika J",
    "dept": "B.Com CA",
    "year": "First year",
    "email": "25104131@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25105123",
    "name": "Subalaksmi S",
    "dept": "BCA",
    "year": "First year",
    "email": "25105123@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25105073",
    "name": "S. Bala Akash Raj",
    "dept": "BCA",
    "year": "First year",
    "email": "25105073@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25105132",
    "name": "Yazhini G",
    "dept": "BCA",
    "year": "First year",
    "email": "25105132@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25105079",
    "name": "Fanny Crosby S",
    "dept": "BCA",
    "year": "First year",
    "email": "25105079@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25105074",
    "name": "Balaji",
    "dept": "BCA",
    "year": "First year",
    "email": "25105074@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105087",
    "name": "Hari Prashandh",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105087@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105069",
    "name": "V. Ajithkumar",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105069@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105097",
    "name": "Mithun Chakravarthy R",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105097@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105086",
    "name": "Harikaran S",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105086@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105110",
    "name": "Rasika N",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105110@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105111",
    "name": "Raviprabha T",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105111@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105122",
    "name": "Stephin Prasath",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105122@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105120",
    "name": "Sriram",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105120@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105068",
    "name": "Abishek",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105068@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105070",
    "name": "Akilan G",
    "dept": "BCA",
    "year": "2nd",
    "email": "24105070@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "24105112",
    "name": "Reena.M",
    "dept": "BCA",
    "year": "Second year",
    "email": "24105112@srcas.ac.in",
    "shift": "Second Shift"
  },
  {
    "reg": "25130058",
    "name": "sundarji.s",
    "dept": " Bsc Cs with cyber security",
    "year": "Frist year",
    "email": " 251300588077@srcas.ac.in ",
    "shift": "Second Shift"
  },

  {
    "reg": "25130066",
    "name": "Yakshitha.P.V",
    "dept": " Bsc Cs with cyber security",
    "year": "Frist year",
    "email": " 251300664525@srcas.ac.in ",
    "shift": "Second Shift"
  },

  {
    "reg": "25130019",
    "name": "Dinesh Karthick.R",
    "dept": " Bsc Cs with cyber security",
    "year": "Frist year",
    "email": " :251300193225@srcas.ac.in ",
    "shift": "Second Shift"
  }

];

// Load students from localStorage or use default
// Load students: Start with defaultStudents to ensure hardcoded updates apply
let students = [...defaultStudents];

// Merge any custom-added students from localStorage
const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
storedStudents.forEach(stored => {
  if (!students.some(s => s.reg.toUpperCase() === stored.reg.toUpperCase())) {
    students.push(stored);
  }
});

// Attendance state
const attendance = new Map();

// API Helper
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:'
  ? 'http://localhost:3000/api'
  : '/api';

// DOM Elements
let regInput, messageEl, tbody, addMessageEl;

// Initialize on load
window.addEventListener('load', () => {
  regInput = document.getElementById("regNumber");
  messageEl = document.getElementById("message");
  tbody = document.getElementById("attendanceBody");
  addMessageEl = document.getElementById("addMessage");

  loadAttendance();
  renderTable();
  syncStudents(); // Fetch latest students from DB

  // Initialize Theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('system');
  }

  if (regInput) {
    regInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") markPresent();
    });
  }
});

function saveStudents() {
  localStorage.setItem('students', JSON.stringify(students));
}

function loadAttendance() {
  const saved = localStorage.getItem('attendance');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      attendance.clear();
      parsed.forEach(([key, value]) => {
        attendance.set(key, value);
      });
    } catch (e) {
      console.error("Failed to load attendance", e);
    }
  }
}

function saveAttendance() {
  localStorage.setItem('attendance', JSON.stringify(Array.from(attendance)));
}

async function syncStudents() {
  try {
    const response = await fetch(`${API_BASE}/students`);
    if (!response.ok) throw new Error('Failed to fetch students');

    const dbStudents = await response.json();
    let updated = false;

    dbStudents.forEach(dbStudent => {
      // Check if student exists locally
      const exists = students.some(s => s.reg.toUpperCase() === dbStudent.reg.toUpperCase());

      if (!exists) {
        students.push(dbStudent);
        updated = true;
      }
    });

    if (updated) {
      saveStudents();
      console.log('Synced students from MongoDB');
    }
  } catch (error) {
    console.error('Sync error:', error);
  }
}

function showMessage(text, type, target = 'main') {
  const el = target === 'add' ? addMessageEl : messageEl;
  if (!el) return;
  el.textContent = text;
  el.style.display = "block";
  el.className = `message ${type}`;

  // Auto-hide after 3 seconds
  setTimeout(() => {
    el.style.display = 'none';
  }, 3000);
}

function renderTable() {
  if (!tbody) return;
  tbody.innerHTML = "";
  if (attendance.size === 0) {
    const row = document.createElement("tr");
    row.className = "empty-row";
    row.innerHTML =
      '<td colspan="8" class="empty-state">No students to display. Enter a registration number above.</td>';
    tbody.appendChild(row);
    return;
  }

  attendance.forEach((data, reg) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${reg}</td>
      <td>${data.name}</td>
      <td>${data.year || ""}</td>
      <td>${data.dept || ""}</td>
      <td>${data.shift || ""}</td>
      <td>${data.email || ""}</td>
      <td>
        <span class="status-pill">${data.status}</span>
      </td>
      <td>
        <button class="action-btn" onclick="deleteRow('${reg}')">
          Delete
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

async function markPresent() {
  const reg = regInput.value.trim().toUpperCase();
  if (!reg) {
    showMessage("Please enter a registration number.", "error");
    return;
  }

  const student = students.find((s) => s.reg.toUpperCase() === reg);
  if (!student) {
    showMessage("No student found for that registration number.", "error");
    return;
  }

  // 1. Update Local State & UI
  attendance.set(reg, { ...student, status: "Present" });
  saveAttendance();
  renderTable();

  // 2. Send to Backend (Excel)
  try {
    const response = await fetch(`${API_BASE}/mark`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reg: student.reg,
        name: student.name,
        dept: student.dept,
        shift: student.shift,
        status: "Present"
      })
    });

    const result = await response.json();
    if (result.success) {
      showMessage(`${student.name} marked present and saved to Database.`, "success");
    } else {
      showMessage(`${student.name} marked present (Local only). Database save failed.`, "warning");
    }
  } catch (error) {
    console.error("Server error:", error);
    showMessage(`${student.name} marked present (Local only). Server not running?`, "warning");
  }

  regInput.value = "";
}

async function deleteRow(reg) {
  const record = attendance.get(reg);
  if (!record) return;

  const ok = confirm(
    `Are you sure you want to delete attendance record for ${record.name} (${reg})?`
  );
  if (!ok) return;

  // 1. Delete from Local
  attendance.delete(reg);
  saveAttendance();
  renderTable();

  // 2. Delete from Excel (Backend)
  try {
    const response = await fetch(`${API_BASE}/delete`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reg })
    });
    const result = await response.json();
    if (result.success) {
      showMessage(`Deleted ${record.name} from Local & Database.`, "success");
    } else {
      showMessage(`Deleted from Local. Database delete failed: ${result.error}`, "warning");
    }
  } catch (error) {
    console.error("Delete error:", error);
    showMessage("Deleted from Local. Server not reachable.", "warning");
  }
}

// Theme Switcher Logic
function setTheme(theme) {
  const html = document.documentElement;
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    html.setAttribute('data-theme', systemTheme);
    localStorage.removeItem('theme');
  } else {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

// Modal Functions
function openAddStudentModal() {
  document.getElementById('addStudentModal').style.display = 'flex';
}

function closeAddStudentModal() {
  document.getElementById('addStudentModal').style.display = 'none';
  // Clear inputs
  document.getElementById('newName').value = '';
  document.getElementById('newDept').value = '';
  document.getElementById('newShift').value = 'Morning';
  document.getElementById('newClass').value = 'First Year';
  document.getElementById('newReg').value = '';
  document.getElementById('newEmail').value = '';

  document.getElementById('addMessage').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById('addStudentModal');
  if (event.target == modal) {
    closeAddStudentModal();
  }
}

async function submitNewStudent() {
  const name = document.getElementById('newName').value;
  const dept = document.getElementById('newDept').value;
  const shift = document.getElementById('newShift').value;
  const studentClass = document.getElementById('newClass').value;
  const reg = document.getElementById('newReg').value;
  const email = document.getElementById('newEmail').value;


  await addStudent(name, dept, shift, studentClass, reg, email, "");
}

async function addStudent(name, dept, shift, studentClass, reg, email, year) {
  if (!name || !dept || !shift || !reg) {
    showMessage("Please fill in at least Reg, Name, Dept, and Shift.", "error", 'add');
    return;
  }

  // Check if reg already exists
  if (students.some(s => s.reg.toUpperCase() === reg.toUpperCase())) {
    showMessage("Student with this Registration Number already exists.", "error", 'add');
    return;
  }

  const newStudent = { reg, name, dept, shift, class: studentClass, email: email || '', year: year || '' };
  students.push(newStudent);
  saveStudents();

  // Auto-mark as present
  attendance.set(reg, { ...newStudent, status: "Present" });
  saveAttendance();
  renderTable();

  // Send to Backend (Excel)
  try {
    const response = await fetch(`${API_BASE}/mark`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reg: newStudent.reg,
        name: newStudent.name,
        dept: newStudent.dept,
        shift: newStudent.shift,
        class: newStudent.class,
        year: newStudent.year,
        status: "Present"
      })
    });

    const result = await response.json();
    if (result.success) {
      showMessage("Student added, marked present, and saved to Database!", "success", 'add');
      setTimeout(closeAddStudentModal, 1500); // Close modal after success
    } else {
      showMessage("Student added & marked present (Local). Database save failed.", "warning", 'add');
    }
  } catch (error) {
    console.error("Server error:", error);
    showMessage("Student added & marked present (Local). Server not running?", "warning", 'add');
  }
}

function downloadPDF() {
  if (attendance.size === 0) {
    showMessage("No attendance records to download.", "error");
    return;
  }

  const originalCard = document.getElementById("attendanceCard");
  const clone = originalCard.cloneNode(true);

  const headers = clone.querySelectorAll("th:last-child");
  headers.forEach(h => h.remove());
  const cells = clone.querySelectorAll("td:last-child");
  cells.forEach(td => td.remove());

  const opt = {
    margin: 10,
    filename: 'attendance-today.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(clone).save();
}

function downloadExcel() {
  if (attendance.size === 0) {
    showMessage("No attendance records to export.", "error");
    return;
  }

  // Convert attendance Map to array of objects
  const data = Array.from(attendance.values()).map(s => ({
    "Reg Number": s.reg,
    "Name": s.name,
    "Email": s.email,
    "Department": s.dept,
    "Shift": s.shift,
    "Year": s.year,
    "Status": s.status
  }));

  // Convert to CSV
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(fieldName => JSON.stringify(row[fieldName] || '')).join(','))
  ].join('\n');

  // Create download link
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "attendance_data.csv");
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
