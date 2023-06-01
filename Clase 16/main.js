// fetch(url, config)

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data[0].title);
//     console.log(data[0].body);
//   })

// let listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// let listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((item) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${item.id}</h2>
//         <p>${item.nombre}</p>
//         <b>$${item.precio}</b>
//       `;

//       listado.append(li);
//     });
//   });

let listado = document.getElementById("listado");

const pedirDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.body}</p>
    `;

      listado.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

pedirDatos();
