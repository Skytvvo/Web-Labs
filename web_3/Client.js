const url = "https://api.github.com/users/";
const User = 'Skytvvo';

//hellish callback
function useFirstCallback(){
    document.getElementById('firstResult').innerHTML = "";

    const login = document.getElementById('login').value;
    if(login === '' || login === null)
        return;

    FirstCallback(login,  (idBox, data, status)=>{

        if(status === 404)
            return;
        const messageBox = document.getElementById(idBox);

        const img = document.createElement('img');
        img.src = data.avatar_url;

        const span = document.createElement("span");
        span.innerHTML = data.bio + '<br>' + data.name;

        messageBox.append(img);
        messageBox.append(span);
    })
}

function FirstCallback(login, callback)
{
    let xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.open('GET',url + login);
    xhr.send();

    xhr.onload = () => callback('firstResult', JSON.parse(xhr.response),xhr.status);

}

//Promise
function useSecondCallback(){
    
}


