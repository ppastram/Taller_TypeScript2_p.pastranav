import { dataCourses } from './dataCourses.js';
import { Student } from './student.js';

var student = new Student("Pablo Pastrana Vega", 201822920, 1032508421, 21, "Carrera 10 #88-45", "3163235264");
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
var minimum = document.getElementById('min-value');
var maximum = document.getElementById('max-value');
var studentBody = document.getElementById('student');
var minRange = (document.getElementById('min-range'));
var maxRange = (document.getElementById('max-range'));

btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(dataCourses);
renderStudent(student);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) { return c.name.match(nameKey); });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
function renderStudent(student) {
    var x;
    var tabla = '';
    console.log('desplegando estudiante');
    for (var i in student) 
    {
        tabla = tabla + "<tr>\n\t<td>" + i + "</td>\n\t<td>" + ((x = Object.getOwnPropertyDescriptor(student, i)) === null || x === void 0 ? void 0 : x.value) + "</td>\n\t</tr>";
    }
    studentBody.innerHTML = tabla;
}
function renderRanges(e) 
{
    clearCoursesInTable();
    var cursos;
    if (e.target.id === 'min-range') 
    {
        var min = +e.target.value;
        minimum.innerHTML = '' + min;
        courses = searchCourseByCredits(min, +maximum.value);
    }
    else 
    {
        var max = +e.target.value;
        maximum.innerText = '' + max;
        courses = searchCourseByCredits(+minimum.value, max);
    }
    renderCoursesInTable(courses);
}
minRange.onchange = function (e) { return renderRanges(e); };
maxRange.onchange = function (e) { return renderRanges(e); };
