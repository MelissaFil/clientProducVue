<<template>
    <div class="container">
        <Cabecalho :tipo="'cadastro'" :nome-pagina="pagina"/>
        <Form :campos="campos" @cadastrar="createProduto" />
    </div>
</template>

<script>
import Cabecalho from "../components/Cabecalho.vue";
import Form from "../components/Form.vue";

export default {
    name:'ProdutosCadastro',
    data(){
        return{
            pagina: 'Cadastro de produtos',
            campos: ['Nome'],
        }
    },
    components:{
        Cabecalho,
        Form
    },
    methods:{
        async createProduto(dados){
            const data = {
                nome: dados.Nome,
                ativo: true
            };

            const dataJson = JSON.stringify(data);

            await fetch("http://localhost:3000/produtos", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });
        }
    }
};
</script>
