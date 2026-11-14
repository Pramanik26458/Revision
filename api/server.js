const express =require('express');

const app = express();
app.use(express.json());
const notes=[]

app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.send('Note created');
});


app.get('/notes', (req, res) => {
    res.json(notes);
});



//delete

app.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    delete notes[req.params.id];

    res.send('Note deleted');
});


// patch

app.patch('/notes/:index', (req, res) => {

    // console.log(req.params.index);
    notes[req.params.index].description = req.body.description;
    res.send('Note updated Sucessfully');

});



app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});


