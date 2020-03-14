const data = [{
  "id": "1233213",
  "no": 17,
  "fullName": "Murat Doğan",
  "position": "CMD",
  "age": 29,
  "dateOfBirth": "1985-08-06T00:00:00",
  "match": 12,
  "time": 1080,
  "goal": 12,
  "assist": 4,
  "yellowCard": 3,
  "doubleYellowCard": 0,
  "redCard": 2 },
{
  "id": "41233213",
  "no": 58,
  "fullName": "Lorem Ipsum",
  "position": "GK",
  "age": 28, "dateOfBirth": "1985-08-06T00:00:00",
  "match": 34,
  "time": 3400,
  "goal": 1,
  "assist": 17,
  "yellowCard": 8,
  "doubleYellowCard": 3,
  "redCard": 5 },
{
  "id": "51233213",
  "no": 18,
  "fullName": "Dolor Sit",
  "position": "ST",
  "age": 33, "dateOfBirth": "1985-08-06T00:00:00",
  "match": 5,
  "time": 120,
  "goal": 1,
  "assist": 2,
  "yellowCard": 5,
  "doubleYellowCard": 1,
  "redCard": 4 },
{
  "id": "61233213",
  "no": 27,
  "fullName": "Amet Dolor",
  "position": "DL",
  "age": 18, "dateOfBirth": "1985-08-06T00:00:00",
  "match": 2,
  "time": 12,
  "goal": 0,
  "assist": 1,
  "yellowCard": 3,
  "doubleYellowCard": 4,
  "redCard": 5 }];


let currentFilter = "",
prevFilter = "",
orderAsc = true;

const toggleOrder = () => {
  if (currentFilter === prevFilter) {
    orderAsc = !orderAsc;
  } else {
    orderAsc = true;
  }
};

const calcAge = birthDate => {
  let bDate = new Date(birthDate),
  bDateYear = bDate.getUTCFullYear(),
  now = new Date().getFullYear();


  return now - bDateYear;
};

const sortTable = (array, sortKey) => {
  return array.sort((a, b) => {
    let x = a[sortKey],
    y = b[sortKey];

    return orderAsc ? x - y : y - x;
  });
};

const renderTable = tableData => {
  return `${tableData.map(item => {
    if (item.dateOfBirth.length > 2) {
      item.dateOfBirth = calcAge(item.dateOfBirth);
    }
    return (
      `<tr>
                        <td>${item.no}</td>
                        <td>${item.fullName}</td>
                        <td>${item.position}</td>
                        <td>${item.dateOfBirth}</td>
                        <td>${item.match}</td>
                        <td>${item.goal}</td>
                        <td>${item.assist}</td>
                        <td>${item.yellowCard}</td>
                        <td>${item.doubleYellowCard}</td>
                        <td>${item.redCard}</td>
                    </tr>`);

  }).join('')}`;
};

const appendTable = (table, destination) => {
  document.querySelector(destination).innerHTML = table;
};

const handleSortClick = () => {
  const filters = document.querySelectorAll('#squadTable th');

  Array.prototype.forEach.call(filters, filter => {
    filter.addEventListener("click", () => {
      if (!filter.dataset.filterValue) return false;

      Array.prototype.forEach.call(filters, filter => {
        filter.classList.remove('active');
      });
      filter.classList.add('active');
      currentFilter = filter.dataset.filterValue;
      toggleOrder();
      init();
    });
  });
};


const init = () => {
  let newTableData = sortTable(data, currentFilter),
  tableOutput = renderTable(newTableData);

  appendTable(tableOutput, '#squadTable tbody');

  prevFilter = currentFilter;
};

init();
handleSortClick();