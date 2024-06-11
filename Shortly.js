async function shortTheGivenUrl(){

    const longUrl = document.getElementById("url-input").value;
    const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(longUrl);
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            alert("invalid url");
        }
        const shortURL = await response.text();
        createTable(shortURL);
        document.getElementById("url-input").value="";
    }
catch (error) {
        document.getElementById('result').style.border = "2px solid red";
        return null;
    }

}


function createTable(shortURL)
{
    let table = document.getElementById('table');
  let row = document.createElement('tr');
  let data1=document.createElement('td');
  let data2=document.createElement('td');
  let anchorElement=document.createElement('a');
  anchorElement.href=shortURL;
  anchorElement.target='_blank'
  anchorElement.textContent=shortURL;
  data1.appendChild(anchorElement);
  row.appendChild(data1);
  let button=document.createElement('button');
  button.textContent="copy";
  button.classList.add("shorten-btn")
  button.onclick=()=>{
    navigator.clipboard.writeText(shortURL);
    button.innerHTML='Copied'
    button.style.background="rgb(5, 128, 128)"
  }
  data2.appendChild(button);
  row.appendChild(data2);
  table.appendChild(row);
}