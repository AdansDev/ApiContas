(1)...novaConta, // tecnica spread,  busca todos os objetos do formulario e add a nova informação
        //essa tecnica faz automaticamente as linhas abaixo, poupando tempo do operador
        // descricao: novaConta.descricao
        // valor: novaConta.valor
        // tipo: novaConta.tipo

   (2) // return response.status(404).json({
      //           message: "Aconteceu um erro: " + error,
      //           success: false,
      //           status: 404,
      //         });


(3)      // router.get("/:id", async (request, response) => {
//     try {
//       const contaPesquisada = await contaService.buscarPorId(request.params.id);

//       if (contaPesquisada.mensagem) {
//         throw contaPesquisada.mensagem;
//       }
//         return response.json(contaPesquisada);
//     } catch (error) {
//       return response.status(404).json({
//         message: "Aconteceu um erro: " + error,
//         success: false,
//         status: 404,
//       });
//     }
//   });