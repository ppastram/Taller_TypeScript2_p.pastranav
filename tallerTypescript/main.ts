import { Course } from './course.js';
import { dataCourses } from './dataCourses.js';
import { Student } from './student.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

let student = new Student("Pablo Pastrana Vega", 201822920, 1032508421, 21, "Carrera 10 #88-45", "3163235264");
const studentTbody: HTMLElement = document.getElementById('student')!;

btnfilterByName.onclick = () => applyFilterByName();

renderCoursesInTable(dataCourses);
renderStudent(student);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void 
{
  console.log('Desplegando cursos');
  courses.forEach((course) => 
  {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function renderStudent(student: Student): void 
{
	console.log('desplegando estudiante');
	let tableContent: string = '';
  for (let i in student) 
  {
		tableContent += `<tr> 
			<td> ${i} </td>
			<td> ${Object.getOwnPropertyDescriptor(student, i)?.value} </td>
		</tr>`;
	}
	studentTbody.innerHTML = tableContent;
}

function applyFilterByName() 
{ 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) 
{
  return nameKey === '' ? dataCourses : courses.filter( c => c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number 
{
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() 
{
  while (coursesTbody.hasChildNodes()) 
  {
    if (coursesTbody.firstChild != null) 
    {
      coursesTbody.removeChild(coursesTbody.firstChild);
    }
  }
}