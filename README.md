# cliente-product
Após clonar o projeto acesse no seu terminal:

```
cd clientProductVue
cd cliente-product

```
## Project setup
Baixe as dependências do projeto:
```
npm install

```
## Backend
Execute o script backend do projeto
```
npm run backend

```

### Compiles and hot-reloads for development
Inicie o servidor de desenvolvimento:
```
npm run serve

```

### Run your end-to-end tests
Execute os testes automatizados com cypress:
```
npm run test:e2e

```

Foi uma ótima oportunidade desenvolver esse projeto em Vue.js para teste de uma vaga de front-end na Data Stone, pois tive a oportunidade de me familiarizar ainda mais com essa framework pela qual já sou apaixonada há algum tempo.

A princípio, pensei em como exibiria meus dados no front-end, o que me ajudou a pensar na melhor forma de organizá-los no backend do projeto. Apesar dos dados não estarem normalizados, o que é indispensável em um projeto real, como o teste é focado mais no front-end, essa escolha permitiu exibi-los mais facilmente.

Depois disso, defini o que componentizaria no projeto. Inicialmente, já ficou claro que o cabeçalho, a tabela e o formulário de cadastro seriam bem reutilizáveis com a componentização. Posteriormente, houve outras demandas de componentização, como o Alerta.

Após esses pontos bem definidos, desenvolvi um bom front-end utilizando Bootstrap. Em seguida, cuidei da responsividade, pois não adianta ser bonito e não funcionar bem em diferentes dispositivos.

Por fim, para garantir uma boa consistência nos dados, cuidei da validação dos mesmos, como o CPF, por exemplo, e desenvolvi casos de testes automatizados com o Cypress.
