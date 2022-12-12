var yourData;
function getData () {
    fetch("https://api.apispreadsheets.com/data/gcpeojQe6GyfvLZZ/").then(res => {
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

// books.js -----------------------------------------------------------------------------
// checkboxes, enabledSettings, menu varaible names are global


// return ---------------------------------------------------------------------------------

// getting data from the form -----------------------------------------------------------------------------------




