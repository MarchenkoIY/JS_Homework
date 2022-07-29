var button = document.getElementById('button'),
    xhr = new XMLHttpRequest(),
    divForRender = document.createElement('div'),
    personInfo = document.createElement('div');

button.addEventListener('click', function setUserList() {
  if (document.getElementsByClassName('container').length) {
    divForRender.innerHTML = ''; 
  } 
  
  document.body.append(divForRender);  
  divForRender.classList.add('container');
  
  if (localStorage.getItem('userList')) {
    var getedData = JSON.parse(localStorage.getItem('userList')),
        userList = document.createElement('ul');

    divForRender.append(userList);
    
    for (var i = 0; i < getedData['data'].length; i ++) {
      var userTitle = document.createElement('li');
      
      userList.append(userTitle);
      
      userTitle.innerText = getedData['data'][i]['first_name'] + ' ' + getedData['data'][i]['last_name'];
      userTitle.id = i;
      
      if (i === 0) {
        userTitle.classList.add('active');
        
        divForRender.append(personInfo);
        
        renderPersonInfo(i);
      }
    }
    
    userList.addEventListener('click', function(event) {
      var target = event.target;
      
      if (target.tagName === 'LI' && !target.classList.contains('active')) {
        
        if (userList.getElementsByClassName('active')) {
          userList.getElementsByClassName('active')[0].classList.remove('active');
        }
        
        target.classList.add('active');
        
        renderPersonInfo(target.id);
      }
    });
  } else {
    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    
    xhr.addEventListener('load', function() {
      if(xhr.status !== 200) {
        divForRender.innerHTML = '<h1>Данные не получены<br>Ошибка: ' + xhr.status + '</h1>';
        return;
      }
      
      localStorage.setItem('userList', xhr.response);
      setUserList();
    });
    
    xhr.addEventListener('error', function() {
      divForRender.innerHTML = '<h1>Данные не получены<br></h1>';
    });
  
    xhr.send();
  }
  
  function renderPersonInfo(index){
    var htmlPersonInfo = '<img src=' + getedData['data'][index]['avatar'] + 
        ' alt="Avatar"><div><h3>' + getedData['data'][index]['first_name'] + ' ' + 
        getedData['data'][index]['last_name'] + '</h3><p><a href="mailto:' + 
        getedData['data'][index]['email'] + '">' + getedData['data'][index]['email'] + '</a></p></div>';
      
    personInfo.innerHTML = htmlPersonInfo;
  }
});