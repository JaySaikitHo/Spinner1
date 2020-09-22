// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
  
//   process.stdout.write('\r\|   '); 
// }, 900);

// setTimeout(() => {
  
//   process.stdout.write('\r\\/  '); 
// }, 1100);

// setTimeout(() => {
  
//   process.stdout.write('\r\-   '); 
// }, 1300);

// setTimeout(() => {
  
//   process.stdout.write('\r\\   '); 
// }, 1500);


// setTimeout(() => {process.stdout.write('\r|   ')
//   setTimeout(() => {process.stdout.write('\r/   ')
//     setTimeout(() => {process.stdout.write('\r-   ')
//       setTimeout(() => {process.stdout.write('\r\\  ')
//         setTimeout(() => {process.stdout.write('\r|  ')
//           setTimeout(() => {process.stdout.write('\r-')
//           },1000)
//         }, 1000)
//     }, 1000)  
//   }, 1000)
//   }, 1000)
// }, 1000);

const picture = ["\r|","\r/","\r-","\r\\","\r|","\r/","\r-","\r\\","\r|"]
const spinner2 = function(picture){
  for (let i = 0; i < picture.length; i++){
   
  setTimeout(() => {process.stdout.write(picture[i])
    }, 1000 * (i+1) );
  }
}
spinner2(picture)