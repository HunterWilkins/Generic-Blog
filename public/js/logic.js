document.querySelector("#session-test").addEventListener("click", function() {

    fetch("/api/users/session")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

})