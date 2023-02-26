
const fs = require('fs');

const qrcode = require('qrcode');
const Model = require('./model');


run().catch(error => console.error(error.stack));

// async function run() {
//   const res = await qrcode.toDataURL('http://asyncawait.net');

//   fs.writeFileSync('./qr.html', `<img src="${res}">`);
//   console.log('Wrote to ./qr.html');
// }


async function run() {

  let mo = new Model(100,200);
 

  console.log(mo)
    const res = await qrcode.toFile('samplecode.png',JSON.stringify(mo));
  
    // fs.writeFileSync('./qr.html', `<img src="${res}">`);
    // console.log('Wrote to ./qr.html');
  }