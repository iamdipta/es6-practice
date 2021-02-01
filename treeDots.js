// normal way
const ages = [13, 17, 18, 22, 78, 45];
const ages2 = [15, 16, 12];
const ages3 = [15, 16, 25];
// add two add
const allAges = ages.concat(ages2).concat(ages3);


//advanced way in es6  spread operator
const allAges = [...ages, ...ages2, ...ages3];

console.log(allAges);

//another example simple way
const business = 650;
const minister = 450;
const sochib = 120;
const maximum = Math.max(business, minister, sochib);
// for array
const salary = [100, 200, 650, 102];
const maximum = Math.math(...salary);