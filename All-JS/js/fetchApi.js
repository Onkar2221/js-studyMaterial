const URL = "https://cat-fact.herokuapp.com/facts";

const getData = async () => {
    console.log("Getting Data ...");
    try {
        let response = await fetch(URL);
        console.log(response);   // JSON Format

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();
