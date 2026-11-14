const express =require('express');

const app = express();
app.use(express.json());
const notes=[]

app.post('/notes', (req, res) => {
    console.log(req.body);
    res.send('Note created');
});


app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});


