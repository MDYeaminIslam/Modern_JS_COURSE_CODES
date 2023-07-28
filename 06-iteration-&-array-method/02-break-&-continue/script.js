//Break

for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        break;
    }
    console.log(i);
}

//Continue
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log(`Scipping ${i}`)
        continue;
    }
    console.log(i);
}