let d;

d = new Date();

d = d.toString(); //make it string

d = new Date(2021, 0, 10, 11, 30, 0); //giving value of date. yyyy-mm-dd-hh-min-sec

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');


d = Date.now(); //time stamps after 1970 

d = new Date('07-10-2022 12:30:00');
d = d.getTime();

d = d.valueOf();

d = new Date(1657434600000); //time stamps are in milisec

console.log(d);

