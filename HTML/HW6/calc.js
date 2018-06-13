var outputDiv = null;

document.addEventListener('DOMContentLoaded', function() {
  outputDiv = document.getElementById('output');

  document.addEventListener('click', function(event) {
    var eid = event.target.id;
    if ('0123456789'.includes(eid)) {
      outputDiv.innerText += eid;
    } else if (['add','sub','mul','div'].includes(eid)) {
      if ('+-*/'.includes(outputDiv.innerText.slice(-1))) {
        return; 
      } else if (eid === 'add') {
        outputDiv.innerText += ' + ';
      } else if (eid === 'sub') {
        outputDiv.innerText += ' - ';
      } else if (eid === 'mul') {
        outputDiv.innerText += ' * ';
      } else if (eid === 'div') {
        outputDiv.innerText += ' / ';
      }
    } else if (eid === 'clr') {
        outputDiv.innerText = "";
    } else if (eid ==='eq') {
      var result = eval(outputDiv.innerText);(outputDiv.innerText = result);
      console.log(result);
    }
  });
});