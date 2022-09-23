const loginAPI = (data, setIsAuthenticate) => {
  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error(error))
    .then((response) => {
      if (response.token !== undefined){
        localStorage.setItem("token", response.token); 
        setIsAuthenticate(true)
      }
    });
};

export { loginAPI };
