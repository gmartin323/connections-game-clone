export default function formatSets(Object) {
  var values = Object.values(object);
  var final = [];
  var counter = 0;
  var portion = {};

  for (var key in object) {
    if (counter !== 0 && counter % 5 === 0) {
      final.push(portion);
      portion = {};
    }
    portion[key] = values[counter];
    counter++
  }
  final.push(portion);

  // console.log(final)
  return final
}

var object = { 
  set1Title: 'Title1',
  set1Answer1: '1',
  set1Answer2: '2',
  set1Answer3: '3',
  set1Answer4: '4',
  set2Title: 'Title2',
  set2Answer1: '1',
  set2Answer2: '2',
  set2Answer3: '3',
  set2Answer4: '4',
  set3Title: 'Title3',
  set3Answer1: '1',
  set3Answer2: '2',
  set3Answer3: '3',
  set3Answer4: '4',
  set4Title: 'Title4',
  set4Answer1: '1',
  set4Answer2: '2',
  set4Answer3: '3',
  set4Answer4: '4'
}
  

// let newSets = Object.keys(sets).sort()

// const set1Array = newSets.splice(0,5)
// const set2Array = newSets.splice(0,5)
// const set3Array = newSets.splice(0,5)
// const set4Array = newSets.splice(0,5)

// // console.log(set1Array)
// // console.log(set2Array)
// // console.log(set3Array)
// // console.log(set4Array)

// const newSetsArray = {
//   set1Array: [...set1Array],
//   set2Array: [...set2Array],
//   set3Array: [...set3Array],
//   set4Array: [...set4Array],
// }

// set1Array.reduce((temp_obj, key) => {
//   temp_obj[key] = sets[key];
//   return temp_obj;
// }, {})


// console.log(set1Array)