window.Lately && Lately.init({ target: 'time, .lately' });

addEventListener("DOMContentLoaded", () => {
  window.Lately && Lately.init({ target: 'time, .lately', lang: {
          'second': ' Second',
          'minute': ' Minute',
          'hour': ' Hour',
          'day': ' Days',
          'month': ' Month',
          'year': ' Years',
          'ago': ' Ago',
          'error': 'NaN'
      }
  });
});






function getFAQ(json)
{    
    let faqList = [];
    let detail, summary;

    json.table.rows.forEach((row, i) =>
    {
        if (i == 0) return; // The first row is the header        

        try { detail = row.c[0].f ? row.c[0].f : row.c[0].v }
        catch(e){ detail = '' }

        try { summary = row.c[1].f ? row.c[1].f : row.c[1].v }
        catch(e){ summary = '' }

        faqList.push([detail, summary]);
    });

    return faqList;
}

let fetchUrlList = async () =>
{
    return await new Promise((resolve, reject) =>
    {
      fetch("./data/list.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.urls)
        console.log(data);
        resolve(data.urls);
      })
      .catch((error) => console.error("Error loading JSON file", error));
        // fetch(url)
        // .then((response) => response.text())
        // .then((data) =>
        // {
        //     let json_string = data.substring(47).slice(0, -2);
        //     let details = getFAQ(JSON.parse(json_string));
        //     resolve(details);
        // });
    });
}







// function loadEmployees() {
//   return {
//     search: "",
//     myForData: sourceData,
//     get filteredEmployees() {
//       if (this.search === "") {
//         return this.myForData;
//       }
//       return this.myForData.filter((item) => {
//         return item.employee_name
//           .toLowerCase()
//           .includes(this.search.toLowerCase());
//       });
//     },
//   };
// }



function loadEmployees() {
  return {
    search: "",
    employees: [],
    get filteredEmployees() {
      if (this.search === "") {
        return this.employees;
      }
      return this.employees.filter((item) => {
        return item.employee_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  };
}

let fetchEmployees = async () =>
{
    return await new Promise((resolve, reject) =>
    {
      fetch("./data/employees.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.employeees)
        console.log(data);
        resolve(data.employeees);
      })
      .catch((error) => console.error("Error loading JSON file", error));
        // fetch(url)
        // .then((response) => response.text())
        // .then((data) =>
        // {
        //     let json_string = data.substring(47).slice(0, -2);
        //     let details = getFAQ(JSON.parse(json_string));
        //     resolve(details);
        // });
    });
}




var sourceData = [
  {
    id: "1",
    employee_name: "Tiger Nixon",
    employee_salary: "320800",
    employee_age: "61",
    profile_image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    employee_name: "Garrett Winters",
    employee_salary: "170750",
    employee_age: "63",
    profile_image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    employee_name: "Ashton Cox",
    employee_salary: "86000",
    employee_age: "66",
    profile_image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    employee_name: "Cedric Kelly",
    employee_salary: "433060",
    employee_age: "22",
    profile_image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "5",
    employee_name: "Airi Satou",
    employee_salary: "162700",
    employee_age: "33",
    profile_image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "6",
    employee_name: "Brielle Williamson",
    employee_salary: "372000",
    employee_age: "61",
    profile_image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "7",
    employee_name: "Herrod Chandler",
    employee_salary: "137500",
    employee_age: "59",
    profile_image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: "8",
    employee_name: "Rhona Davidson",
    employee_salary: "327900",
    employee_age: "55",
    profile_image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: "9",
    employee_name: "Colleen Hurst",
    employee_salary: "205500",
    employee_age: "39",
    profile_image: "https://randomuser.me/api/portraits/women/9.jpg",
  }
];
