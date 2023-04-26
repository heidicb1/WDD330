fetch("https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json")
//Once you fetch the file THEN I want you to do something else. I want you to PARSE the JSON file
.then(response => response.json())
// THEN I want to look at it
.then(data => {
    console.log(data)
    //Trying to access the name from the data NOT WORKING
    console.log(data.prophets)
   })
  
