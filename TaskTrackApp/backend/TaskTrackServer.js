const express = require("express")

const app = express()

//ROUTES


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); //Using 3000 for now, see if Github will provide our port number


