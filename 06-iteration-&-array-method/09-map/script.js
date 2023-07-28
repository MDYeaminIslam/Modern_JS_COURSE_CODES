const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//Same as forEach

const doubleNumbers2 = [];

numbers.forEach((number) => {
    doubleNumbers2.push(number * 2);
});
console.log(doubleNumbers2);


const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

//Create an array of company names

// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

//Create an array with just company and category properties
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
})
console.log(companyInfo);

//Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
    return {
        name : company.name,
        years : company.end - company.start + ' years',

    };
});
console.log(companyYears);

//Chain map methods
const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2);
console.log(squareAndDouble); //here we can chain map methods because the first map returns an array and the second map is called on that array


//Chaining different methods
const evenDouble = numbers.filter((number) => number %2).map((number) => number *2);
console.log(evenDouble);
