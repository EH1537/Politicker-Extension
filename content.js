let allData = new AllData();
let val = allData.DataGet(); 
console.log(val);
let elements = document.getElementsByTagName('P');
for (let i = 0; i < elements.length; i += 1) {
  let testerEl = elements[i];
  let textingCheck = testerEl.innerHTML;
  //console.log(textingCheck);
  for (let people in val) { 
    if (textingCheck.includes(people)) {
      let textSpan = document.createElement('span')
      let a = document.createElement('a');
      let linkText = document.createTextNode(' ' + people +' ('+ val[people]["State"] +")" + val[people]["Party"]);
      a.appendChild(linkText);
      a.title = people;
      a.href = val[people]["Url"];
      textSpan.innerHTML = a;
      testerEl.append(a);
    }
  }
}