import Modal, { changeModalContent } from "./modules/modal.mjs";
import fetchStudentsData from "./modules/data.mjs";

const students = await fetchStudentsData();

const averageMarks = (student) => {
  const marks = Object.values(student).slice(1);
  const total = marks.reduce((a, b) => a + b);
  return Math.round((100 * total) / marks.length) / 100;
};

const tableRowCell = (textContent) => $("<td></td>").text(textContent);
const tableHeadCell = (textContent) => $("<th></th>").text(textContent);

const tableHead = $("<thead></thead>").append(
  $("<tr></tr>").append(
    ["Name", "English", "Maths", "Science", "Computer"].map(tableHeadCell)
  )
);

$("body").append(Modal);

const tableRow = (student) =>
  $(`<tr data-bs-toggle="modal" data-bs-target="#studentModal"></tr>`)
    .append(Object.values(student).map(tableRowCell))
    .click(() =>
      changeModalContent(student.name, `Average: ${averageMarks(student)}`)
    );

$("#students")
  .append(tableHead)
  .append($("<tbody></tbody>").append(students.map(tableRow)));
