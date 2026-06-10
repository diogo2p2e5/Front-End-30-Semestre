import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import "./CadastroFilme.css";
import Cadastro from "../../components/cadastro/Cadastro";
import { Alerta } from "../../components/alerta/Alerta";
import { useState, useEffect } from "react";
import Lista from "../../components/lista/Lista";
import api from "../../services/services";
import Swal from "sweetalert2";

const CadastroFilme = () => {



    //States e Variáveis
    const [valor, setValor] = useState("")
    const [editar, setEditar] = useState(false)
    const [listaFilmes, setListarFilmes] = useState([])
    const [listaGeneros, setListaGeneros] = useState([])


    // GET
    //Busca os gêneros para colocar no select no formulário
    const getGeneros = async () => {
        try {
            const RetornoAPI = await api.get("/Genero")
            setListaGeneros(RetornoAPI.data)//preencher o array listarGeneros


        } catch (error) {
            alert("Problemas ao carregar os dados da API " + error)
        }
    }
    const getFilmes = async () => {
        try {
            const RetornoAPI = await api.get("/Filme")
            setListarFilmes(RetornoAPI.data)//preencher o array listarGeneros
        } catch (error) {
            alert("Problemas ao carregar os dados da API " + error)
        }
    }

    // POST
    const cadastrarFilme = async (e) => {
        e.preventDefault();


        const objCadastro = {
            nome: valor
        }

        try {
            await api.post('/Filme', objCadastro);

            Alerta({
                title: 'Cadastro de Gênero',
                text: `${valor} Cadastrado com sucesso!!`,
                icon: 'success',
                confirmButtonText: 'Top, legal'
            })


            setValor('');
            getFilmes();
        } catch (error) {
            Swal.fire({
                title: 'Cadastro de Filme',
                text: 'Erro ao Fazer Cadastro',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            console.log(error);
            
        }
    }

    // PUT
    const preEditar = () => {
        Alerta({
            title: "Cadastro de filme",
            text: "Pré-Editar filme em desenvolvimento",
            icon: "sucess",
            confirmButtonText: "OK"
        })
    }
    const editarFilme = () => {
        Alerta({
            title: "Cadastro de filme",
            text: "Editar filme em desenvolvimento",
            icon: "sucess",
            confirmButtonText: "OK"
        })
    }

    // DELETE
    const excluirFilme = () => {
        Alerta({
            title: "Excluir filme",
            text: "Excluir filme em desenvolvimento",
            icon: "sucess",
            confirmButtonText: "OK"
        })
    }

    //Funções auxiliares
    const limparFormulario = () => {
        Alerta({
            title: "Limpar formulario de filme",
            text: "Limpar formulario filme em desenvolvimento",
            icon: "sucess",
            confirmButtonText: "OK"
        })
    }



    //Funções



    //Ciclo de vidgeneroa
    useEffect(() => {
        getGeneros(),
            getFilmes()
    }, [])

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    //Define o título que será exibidgeneroo no formulário
                    tituloCadastro="Cadastro de filme"
                    // esconde o select de genero
                    // visibilidgeneroade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="filme"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    //Valor atual do campo de texto
                    valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                    listaFilmes={listaFilmes}
                    listaGeneros={listaGeneros}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    // visibilidade="none"
                    //Chama o método para validar:
                    // listaGeneros={listaGeneros}
                    lista={listaFilmes}
                    //Identifica o tipo de lista:
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                />

            </main>
            <Footer />
        </>
    );
};

export default CadastroFilme;