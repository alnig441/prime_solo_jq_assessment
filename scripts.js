var seqNum = 0;

// function newDiv(){
//   seqNum++;
//   this.id = seqNum;

// }

function postData(employee){
  // seqNum++;
  // console.log('in scripts  - seqNum =' + seqNum);
  
  // position = document.getElementById('main');
    
  //   // var string = "";
      
  //   var newEl = document.createElement('div');
  //     // newEl.setAttribute('value', employee['salary']
  //   // $(newElattr({'id': seqNum});

  //   var newBut1 = document.createElement('button');
  //   $(newBut1).attr({'id': 'color'});
  //   newEl.appendChild(newBut1);
  
  //   var newBut2 = document.createElement('button');
  //   $(newBut1).attr({'id': 'remove'});
  //   newEl.appendChild(newBut2);
  //   // var newBut2 = document.createElement('button');

    
  //   // $(newBut2).attr({'id': 'remove'});
  //     // newText = document.createTextNode(string);
      

  //     // position.appendChild(newBut1);
  //     // newEl.appendChild(newBut2);      // newEl.appendChild(newEleText);
  //     position.appendChild(newEl);
    
}

function createDiv(){
    seqNum++;
    console.log('in create div');
    var position = document.getElementById('main');
    var newDiv = document.createElement('div');
    $(newDiv).attr('id', seqNum); 
    var newP = document.createElement('p');
    $(newP).text('Line #: '+ seqNum);
    newDiv.appendChild(newP);
    position.appendChild(newDiv); 
}

function createButton(id){
    console.log('in createButton');
    console.log(id);
    var position = document.getElementById(seqNum);
    console.log(position);
    var newBut = document.createElement('button');
    $(newBut).attr('id',id);

      if(id=='color'){
        $(newBut).text('Change Color');
      }
      else if (id=='remove'){
        $(newBut).text('Remove');
      }

    position.appendChild(newBut);
}