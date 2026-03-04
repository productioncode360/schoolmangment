const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('School Management System AP555555I is Running!');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//hello