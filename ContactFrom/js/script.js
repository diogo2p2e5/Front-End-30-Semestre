 function validarFormulario(){
            let nome = document.getElementById("nome").value.trim();
            let sobrenome = document.getElementById("sobrenome").value.trim();
            let email = document.getElementById("email").value.trim();
            let pais = document.getElementById("pais").value.trim();
            let DDD = document.getElementById("DDD").value.trim();
            let numero = document.getElementById("numero").value.trim();
            let cep = document.getElementById("cep").value.trim();
            let rua = document.getElementById("rua").value.trim();
            let CasaNumero = document.getElementById("CasaNumero").value.trim();
            let apartamento = document.getElementById("apartamento").value.trim();
            let Bairro = document.getElementById("Bairro").value.trim();
            let Cidade = document.getElementById("Cidade").value.trim();
            let Estado = document.getElementById("Estado").value.trim();

            let quantidadeErros = 0;

            //valida o preenchimento do campo nome
            if(nome.length == 0){//se estiver vazio ele pinta
                formError("nome")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("nome")
            }

            if(sobrenome.length == 0){
                formError("sobrenome")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("sobrenome")
            }

        
             if(email.length == 0){
                formError("email")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("email")
            }

            // ///////////////////////////////////////////////////////////////////////////////////////

             if(pais.length == 0){
                formError("pais")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("pais")
            }

             if(DDD.length == 0){
                formError("DDD")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("DDD")
            }

             if(numero.length == 0){
                formError("numero")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("numero")
            }

            // /////////////////////////////////////////////////////////////////////////////////////////

             if(cep.length == 0){
                formError("cep")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("cep")
            }

             if(rua.length == 0){
                formError("rua")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("rua")
            }

              if(CasaNumero.length == 0){
                formError("CasaNumero")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("CasaNumero")
            }

              if(apartamento.length == 0){
                formError("apartamento")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("apartamento")
            }

              if(rua.length == 0){
                formError("rua")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("rua")
            }

              if(Bairro.length == 0){
                formError("Bairro")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("Bairro")
            }

              if(Cidade.length == 0){
                formError("Cidade")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("Cidade")
            }

              if(Estado.length == 0){
                formError("Estado")
                quantidadeErros++;
            }else{//se não ele deixa normal
                reiniciaBorder("Estado")
            }

            if(quantidadeErros !=0){
                alert("Existem " + quantidadeErros + "  campo(s) obrigatório(s) não preenchido(s).")
                quantidadeErros = 0;
            }

            // literal template: é a crase ``
            // console.log(`Nome: ${nome} ${sobrenome} Email: ${email}`);
        }

        //função que pinta a borda do campo que precissa preencher
        function formError(fildId){

            document.getElementById(fildId).style.border = "1px solid red";
        }

        function reiniciaBorder(fildId){
            document.getElementById(fildId).style.border = "none";
        }
        
        async function buscarEndereco(cep){
            if(cep.trim().length < 8){
                alert("CEP iválido. O CEP deve conter 8 caracters");
                return false;
            }

            try {
                let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                let dados = await retorno.json();
                // console.log( await retorno.json());
                console.log(dados)
                
            } catch {
                alert("Erro ao procurar Endereço!")
            }
        }