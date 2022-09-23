// TODO: load the dataset 
let attractions;
fetch('./attractions.json')
  .then(response => response.json())
  .then(data => {
        attractions = data;
        filterData(attractions);
        categoryData(attractions);
		console.log('attractions - (a)', filterData(attractions));
    
	});

function categoryData(attractions) {
    // TODO: Define an event listener for the dropdown menu
    let category = document.querySelector('select');
    // Call filterData with the selected category
    const data = attractions;
    category.addEventListener("change", (event) => {
        if (event.target.value == 'all'){
            filterData(data);
            console.log(data);
        }else{
            let filtered = attractions.filter(attraction => {
                return attraction['Category']==event.target.value;
            });
            filterData(filtered);
            console.log(filtered);

        }
    });
    }


function filterData(category) {
	//TODO: filter attractions by the selected category
    //TODO: filter top 5 attractions
    let attr = category.sort((a, b) => b - a).slice(0,5);
    
	//CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	//'data' must be an array of JSON objects
	// the max. length of 'data' is 5
	renderBarChart(attr)
	 
    return attr;
}




