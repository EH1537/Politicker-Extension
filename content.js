const politic = {
  "Jennifer Wexton" : {
    "Name":"Jennifer Wexton",
    "State":"Virginia-10",
    "Party":"(D)",
    "Url":"https://en.wikipedia.org/wiki/Jennifer_Wexton"},
  "Andy Biggs" : {
    "Name":"Andy Biggs",
    "State":"Arizona-5",
    "Party":"(R)",
    "Url":"https://en.wikipedia.org/wiki/Andy_Biggs"},
  "Trey Hollingsworth" : {
    "Name":"Trey Hollingsworth",
    "State":"Indiana-9",
    "Party":"(R)",
    "Url":"https://en.wikipedia.org/wiki/Trey_Hollingsworth"},
  "Pete Olson" : {
    "Name":"Peter Olson",
    "State":"Texas-22",
    "Party":"(R)",
    "Url":"https://en.wikipedia.org/wiki/Peter Olson"},
  "Tom Rice" : {
    "Name":"Tom Rice",
    "State":"South Carolina-7",
    "Party":"(R)",
    "Url":"https://en.wikipedia.org/wiki/Tom_Rice"},
  "Aston McEachin" : {
    "Name":"Aston Donald McEachin",
    "State":"Virginia-4",
    "Party":"(D)",
    "Url":"https://en.wikipedia.org/wiki/Aston_McEachin"},         
}

let elements = document.getElementsByTagName('P');


for (let i = 0; i < elements.length; i+= 1) {
  let testerEl = elements[i];
  let textingCheck = testerEl.innerHTML;
  //console.log(textingCheck);
  for (let people in politic) { 
    if (textingCheck.includes(people)) {
      console.log(textingCheck);
      let a = document.createElement('a');
      let linkText = document.createTextNode('   ' + people +'     '+ politic[people]["State"] + '     ' + politic[people]["Party"]);
      a.appendChild(linkText);
      a.title = "PLEASE";
      a.href = politic[people]["Url"];
      testerEl.append(a);
      console.log('yay');
    }
  }
}
// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];
//         let string = "Tom Rice";
//         let linnk = string.link('https://en.wikipedia.org/wiki/Tom_Rice');

//           if (node.nodeType === 3) {
//             //node.parentNode.appendChild(linnk);

//             var text = node.nodeValue;
            
//             if(text.search("Tom Rice")){
//               console.log(node);
//             }
//             var replacedText = text.replace("Tom Rice", 'High Tom');
//             //linkAppender(node);
//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }


//"<a href = "https://en.wikipedia.org/wiki/Tom_Rice" title = "Hello World">Tom Rice (R-South Carolina)</a>"

