// Code your solution here
const drivers = [ "Bobby", "sammy", "sally", "annette", "sarah", "bobby" ];

const findMatching = (drivers, name) => {
    const lowercaseName = name.toLowerCase();
  
    return drivers.filter(name => {
      const lowercaseDriverName = name.toLowerCase();
      return lowercaseDriverName === lowercaseName;
    });
  };
//test if code is able to find a match to a name that has different case
console.log(findMatching(drivers, "sAlly"));

const fuzzyMatch = (drivers, name) => {
    const lowercaseName = name.toLowerCase();
    const beginningLetter = lowercaseName.slice(0, 2);

    return drivers.filter(name => {
      const lowercaseDriverName = name.toLowerCase();
      return lowercaseDriverName.startsWith(beginningLetter);
    })
}
;
const matchName = (drivers, name) => {
    return drivers.filter(driver => {
      return driver.name === name;
    });
  };