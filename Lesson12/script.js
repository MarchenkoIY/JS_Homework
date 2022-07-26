var table = document.getElementById('table');

table.addEventListener('click', function(event) {
    var target = event.target;

    if (target.colSpan === 3) {
        var newTr = document.createElement('tr');
        var firctTr = table.firstChild;

        table.insertBefore(newTr, firctTr);
        newTr.innerHTML = '<td></td><td></td><td></td>'
    } else {
        var input = document.createElement('input');
        input.type = 'text';
        input.value = target.innerText;

        target.innerText = '';
        target.append(input);
        input.focus();

        input.addEventListener('keydown', function(event) {
            if (event.code === 'Enter') {
                input.blur();
            }
        });

        input.addEventListener('blur', function() {
            target.innerText = input.value;
            input.remove();
        });
    }
});