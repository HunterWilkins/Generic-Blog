
const form = document.querySelector("#login");

function loginHandler(event) {
    event.preventDefault();

    const data = {
        username: document.querySelector("input[name=username]").value,
        password: document.querySelector("input[type=password]").value
    }

    fetch("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            document.location.replace("/");
        }
    });

}

form.addEventListener("submit", loginHandler);