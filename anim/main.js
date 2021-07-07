const s = document.getElementById('root');


function getChildren(parent) {
  if(parent.hasChildNodes()) {
    let children = parent.childNodes;
    for (let i = 0; i < children.length; i++) {
      if(children[i].tagName === "g") {
        let nl = children[i].childNodes;
        let result = [];
        for(var i = 0, ll = nl.length; i != ll; result.push(nl[i++]));
        return result;
      }
    } 
  }
}

const extractPaths = (nodeList) => {
  let i = 0;
  let g = []; 
  nodeList.forEach(function() {
    if(nodeList[i].tagName === 'g' || nodeList[i].tagName === 'path') {
      g.push(nodeList[i]);
    }
    i++
  });
  return g;
}

let els = getChildren(s);

let paths = extractPaths(els);
