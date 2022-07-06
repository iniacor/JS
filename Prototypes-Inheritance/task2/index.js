// input - obj;
// output - array;
// const vehicle = {
//   name: 'Argo',
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     this.move();
//   },
//   stopMachine() {
//     this.stop();
//     console.log(`${this.name} lifting anchor down`);
//   },
// };
// Object.setPrototypeOf(ship, vehicle);
// option 1
// export const getOwnProps = (obj) => {
//   const ownProp = [];
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
//       ownProp.push(prop);
//     }
//   }
//   return ownProp;
// };
// ---refactoring--
// option 2
// export const getOwnProps = (obj) =>
//   Object.keys(obj).filter((prop) => typeof obj[prop] !== 'function');

// --test Data
// console.log(getOwnProps(ship));
