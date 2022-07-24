var inputX = document.getElementById('x'),
    inputY = document.getElementById('y'),
    button = document.getElementById('button');

document.addEventListener('keyup', function() {
    if (inputX.value === ''  || inputY.value === '') {
        button.setAttribute('disabled', 'disabled');
    } else {
        button.removeAttribute('disabled');
    }
});

button.addEventListener('click', function() {
    if (+inputX.value > 0 && +inputX.value < 11 && +inputY.value > 0 && +inputY.value < 11) {
      if (document.getElementsByTagName('table').length) {
        document.body.removeChild(document.body.lastChild);
      }
      
      var table = document.createElement('table');
      document.body.append(table);
      
      for (var i = 0; i < +inputY.value; i++) {
         var tr = document.createElement('tr');
         table.append(tr);
          
         for (var j = 0; j < +inputX.value; j++) {
           var td = document.createElement('td');
           tr.append(td);
            
           if (j % 2 === 0 && i % 2 === 0 || j % 2 === 1 && i % 2 === 1 ) {
             td.classList.add('black');
           }
          }
        }
      
      table.addEventListener('click', function(event) {
        var target = event.target;
        
        if (target.tagName = 'TD') {
            table.querySelectorAll('tr > td').forEach(function(element) {
            element.classList.toggle('black');
          });
        }
      });
     } else {
        alert('Введите число от 1 до 10');

        inputX.value = '';
        inputY.value = '';

        button.setAttribute('disabled', 'disabled');
       }
});