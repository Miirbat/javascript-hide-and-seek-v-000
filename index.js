function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}

function nestedTarget(nested, target){
  // document.querySelector(`#${nested} .${target}`)
// debugger
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function deepestChild(){
  // return document.getElementById('grand-node').children[5]
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  const list = document.getElementsByClassName('ranked-list')
  for(let i = 0; i < list.length; i++){
    let children = list[i].children

    for(let j = 0; j < children.length; j++){

      let numberToChange = parseInt(children[j].innerHTML)
      numberToChange += n
      children[j].innerHTML = numberToChange.toString()
    }
  }
}
