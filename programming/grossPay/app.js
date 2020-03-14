const associate = { roleId: 3, rate: 12.5,overtime: 18.75 };
const supervisor = { roleId: 2, rate: 15,overtime: 22.5 };
const admin = { roleId: 1, rate: 30, overtime: 0 }; 


let associateValue = [],
    supervisorValue = [],
    adminValue = [];

function assFun() {
  for(key in associate) {
    associateValue.push(associate[key]);
  }
  console.log("Gross Pay associate: " + associateValue[1] * associateValue[2]); // Gross pay = rate * hour
  console.log("Net Pay associate: " + (associateValue[1] * associateValue[2]) * .9); // Net pay = gross * .9
}

function supFun() {
  for(key in supervisor) {
    supervisorValue.push(supervisor[key]);
  }
  console.log("Gross Pay supervisor: " + supervisorValue[1] * supervisorValue[2]);
  console.log("Net Pay supervisor: " + (supervisorValue[1] * supervisorValue[2]) * .9);
}

function adminFun() {
  for(key in admin) {
    adminValue.push(admin[key])
  } 
  console.log("Gross Pay admin: " + adminValue[1] * adminValue[2]);
  console.log("Net Pay admin: " + (adminValue[1] * adminValue[2]) + .9);
}

assFun();
supFun();
adminFun();