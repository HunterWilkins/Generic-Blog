
const form = document.querySelector("#login");
const toggleButton = document.querySelector("#toggle");
let isLogin = true;

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

function signupHandler(event) {
    event.preventDefault();

    const data = {
        username: document.querySelector("input[name=username]").value,
        email: document.querySelector("input[name=email]").value,
        password: document.querySelector("input[type=password]").value
    }

    fetch("/api/users/signup", {
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

form.addEventListener("submit", function(event) {
    if (isLogin) {
        loginHandler(event);
    }
    else {
        signupHandler(event);
    }
});

toggleButton.addEventListener("click", function(event) {
    event.preventDefault();
    isLogin = !isLogin;
    if (!isLogin) {
        document.querySelector("input[name=email]").setAttribute("style", "display:block");
    }
    else {
        document.querySelector("input[name=email]").setAttribute("style", "display:none");
    }
})