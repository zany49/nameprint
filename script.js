async function getdata(){

    const res = await fetch("https://60ebd374e9647b0017cdde58.mockapi.io/api/users1/users")
    const data = await res.json();
    console.log(data)

    for(var i in data){
        var div1 = document.createElement('div')
        var h5 = document.createElement('h5')
        h5.innerText= data[i].name;
        div1.appendChild(h5)
        document.body.appendChild(div1)  

    }
    for(var j in data){
        if(data[j].name[0] == "R" || data[j].name[0] == "r" ){
            var div2 = document.createElement('div')
        var h4 = document.createElement('h4')
        h4.innerText= data[j].name;
        console.log(data[j].name);
        h4.style.borderTop = "2px solid black";
        div2.appendChild(h4)
        document.body.appendChild(div2)
        }
        
    }




}
getdata()