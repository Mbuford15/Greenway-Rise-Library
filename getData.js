var yourData;
// gets the data from the spreadsheet
// is currently being used as a back up just incase something breaks with the main one from altering it
function getData () {
    fetch("https://api.apispreadsheets.com/data/32PjRgplNbwQEvHy/").then(res => {
        if (res.status === 200) {
            //SUCCESS
            res.json().then(data => {
                console.log(data)
                console.log(21)
                yourData = data
            }).catch(err => console.log(err))
        }
        else {
            // ERROR
            console.log("errorrrrrrr")
        }
    })
}





