async function getData() {
    const prophets= await fetch("https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json")
    //Once you fetch the file THEN I want you to do something else. I want you to PARSE the JSON file
    .then(response => response.json())
    // THEN I want to look at it
    .then(data => {
        console.log(data)
        //Trying to access the name from the data NOT WORKING
        // console.log(data.prophets);
        const lists = data.prophets;
        console.log(lists);
        const node = document.querySelector('.list');
        lists.map(item => { 
            let card = document.createElement('div');
            let name = document.createElement('h2');
            name.innerHTML = item.name;
            card.appendChild(name);
            node.appendChild(card);
        })
        
       })
    
}
getData();
   //HOW TO RETURN SO I CAN USE THE VALUES AND KEYS
// const template = document.querySelector('.card');
// console.log(document.querySelector('.profile'));
// console.log(document.querySelector('h1'));
// console.log(template);
// console.log(prophets);
  
