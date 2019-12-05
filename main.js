var workingText = document.getElementsByTagName("*"); //initially searching all elements
//look into each DIV and and spool out all P tags later (paragraph)

for (var i = 0; i < workingText.length; i+=1) { // loop thru array of paragraph elements
  var workingEl = workingText[i];
  console.log(workingEl);
  for (var j = 0; i < workingEl.childNodes.length; j+=1) { //look at all children nodes (this might be whittled down if we just search P tags)
    let workingNode = workingEl.childNodes[i];
    
    if (workingNode.nodeType === 3){ //3 equals text within element
      var innerText = node.nodeValue; //we need to do whole word search, so split text into array, iterate in two word blocks
      var replacedText = innerText.search(/[Tom Rice]/gi, '[Tom Rice is silly]');

    }
  }
}



// // https://stackoverflow.com/questions/47186663/how-to-make-a-chrome-extension-that-turns-specific-words-into-hyperlinks
// for (let k = 1; k < innerText.length-1; k+=1){
//   let tester = `${innerText[k-1]} ${innerText[k]}`;
//   if (tester === 'Tom Rice'){
    
//   }
// }