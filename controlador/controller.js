// $.get("assets/pages/nav-bar.html", function(data){
//      $("#nav-bar-full").replaceWith(data);
// });

alert("Esto está corriendo en el motor de JavaScript");
console.log('Esto es sincrono')

// Define an async function
async function fetchData() {
    try {
      // Await for the fetch call to resolve
      let response = await fetch('https://api.example.com/data');
      
      // Await for the response to be converted to JSON
      let data = await response.json();
      
      // Log or return the data
      console.log(data);
      return data;
    } catch (error) {
      // Handle any errors
      console.error('Error fetching data:', error);
    }
}

let respuesta = fetchData();


debugger;

