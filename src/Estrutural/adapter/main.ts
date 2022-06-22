import ExpressAdapter from "./ExppressAdapter";
import HapiAdapter from "./HapiAdapter";

const livros = [
    {titulo: "Clean Code"},
    {titulo: "Refactoring"},
    {titulo: "Domanin-Driven Desing"},
];

//const http = new ExpressAdapter
const http = new HapiAdapter();
http.on("get", "/livros", async function(){
    return livros;
});

http.listen(3000);

/*
const app = express();
app.get("/livros", function(req, res) {

    return res.json( [
        {titulo: "Clean Code"},
        {titulo: "Refactoring"},
        {titulo: "Domanin-Driven Desing"},
    ]);

})

app.listen(3000);
*/