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
       writeMessages(idBox,data);
    })
}

function FirstCallback(login, callback)
{
    let xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.open('GET',url + login);
    xhr.onerror = ()=>{
        alert('Wrong password')
    }
    xhr.send();

    xhr.onload = () => callback('firstResult', JSON.parse(xhr.response),xhr.status);

}

//Promise
function useSecondCallback(){
    document.getElementById('secondResult').innerHTML = "";

    const login = document.getElementById('login').value;
    if(login === '' || login === null)
        return;

        fetch(url + login)
            .then(response => response.json())
            .then(userData => new Promise((resolve, reject) => {
                if (userData !== null) {
                    writeMessages('secondResult', userData);
                    resolve();
                }
                reject(new Error("Wrong login"))
            }))
            .catch(err => alert(err))


}

function writeMessages(idBox, data)
{
    const messageBox = document.getElementById(idBox);

    const img = document.createElement('img');
    img.src = data.avatar_url;

    const span = document.createElement("span");
    span.innerHTML = data.bio + '<br>' + data.name;

    messageBox.append(img);
    messageBox.append(span);
}
