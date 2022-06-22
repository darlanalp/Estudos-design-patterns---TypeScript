import axios from "axios";

test.skip("Deve testar a API", async function(){

   const response  = await axios({
     url:"http://localhost:3000/livros" ,
     method:"get"
   });

   const livros = response.data;
   expect(livros).toHaveLength(3);

   const [livro1, livro2, livro3] = livros;

   expect(livro1.titulo).toBe("Clean Code");
   expect(livro2.titulo).toBe("Refactoring");
   expect(livro3.titulo).toBe("Domanin-Driven Desing");

})
