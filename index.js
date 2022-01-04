function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    localStorage.setItem("nama",profile.getName());
    localStorage.setItem("image",profile.getImageUrl());
    localStorage.setItem("email", profile.getEmail());
    window.location.href="/data.html"
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    console.log(gapi.auth2);
    auth2.signOut().then(function() {
      alert("User signed out");
      localStorage.removeItem("nama");
      localStorage.removeItem("image");
      localStorage.removeItem("email");
      window.location.href="/";
    })
    .catch(error => {console.log(error)});
}

function onLoad(){
    gapi.load("auth2", function(){
        gapi.auth2.init();

    })
}


$("#user").ready(function () {
    var user = document.getElementById("user")
    user.innerHTML = `Selamat Datang, ${localStorage.getItem("nama")}`
});

$("#tbl").ready(function () {
    var tbl = document.getElementById("tbl")
    getAll().then(response => {
        console.log(response)
        for(var i = 0; i <response.length; i++){
            const tr = tbl.insertRow()
            const td1 = tr.insertCell();
            const td2 = tr.insertCell();
            const td3 = tr.insertCell();
            const td4 = tr.insertCell();
            const td5 = tr.insertCell();
            const td6 = tr.insertCell();
            console.log(response[i])
                // const aksi = tr. document.getElementById("tbl-aksi")
                // aksi.innerHTML = 
                
                // td.innerHTML = response[i][Object.keys(response[i])[j]];
            td1.innerHTML = response[i].kode
            td2.innerHTML = response[i].model
            td3.innerHTML = response[i].size
            td4.innerHTML = response[i].warna
            td5.innerHTML = response[i].harga
            td6.innerHTML = `<div class ="justify content-center">
            <a class="btn btn-warning ms-2" onclick="edit();">Edit </a>
            <button type ="button" class="btn btn-danger ms-2" onclick="delete();">Delete</button>
            </div>`
            }
        }
    )
});

