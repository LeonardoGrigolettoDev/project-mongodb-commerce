# Projeto MongoDB Commerce

## O que vou desenvolver?

Você vai trabalhar com o banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas. As instruções de como restaurar o banco podem ser lidas a seguir.

## Missão essencial

- [X] PR aberto para entrega do projeto MongoDB Commerce

## O que preciso saber para fazer o projeto?

- [ ] Entender o que é um banco de dados não relacional e para que serve;
- [ ] Entender como recuperar dados de um banco de dados não relacional;
- [ ] Entender como modelar dados de uma aplicação para um banco de dados não relacional;
- [ ] Entender como manipular dados com queries no MongoDB;

## Habilidades para o projeto

### _Vão ser necessárias para realização do projeto_

- [ ] [Método find()](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/da82d65f-2261-4bcb-87bb-71e6a7e565f5/lesson/c3dfe5a7-5fe5-4df9-9501-127c9f2b4b34);
- [ ] [Método sort()](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/8bcc6393-e0d4-4280-ae0a-ca6d53a96eef/lesson/fc82742c-b1c2-4b8f-b226-2953c0a1d109)
- [ ] [Operadores lógicos](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/8bcc6393-e0d4-4280-ae0a-ca6d53a96eef/lesson/945793ba-5b1a-4af5-b790-a2036963055b)
- [ ] [Projeção](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/da82d65f-2261-4bcb-87bb-71e6a7e565f5/lesson/5bc8a303-2680-4bd1-a5be-a7b219d31f90)
- [ ] [Removendo documentos](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/8bcc6393-e0d4-4280-ae0a-ca6d53a96eef/lesson/6f230ca6-68b3-4c18-b035-e42b9b02550e)
- [ ] [Atualizando documentos](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/7fd45d41-7194-4d41-85cb-fc82db294078/lesson/499eb84e-bb47-444e-80ed-f453c6b52424)
- [ ] [Inserindo documentos](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/da82d65f-2261-4bcb-87bb-71e6a7e565f5/lesson/48de2bd8-c98b-46fb-85e4-0c96e9692481)
- [ ] [Manipulando arrays](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/9aa9cc0e-6e53-4986-a5fe-7b93df92375f/lesson/0263b954-c3dc-4f18-a111-d79da386da80)

### Conteúdos de Soft Skills

- [ ] [Etapas para a resolução de problemas](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/2e0692c9-e226-4e95-860a-b4cad80e3c3c/section/ca43af3b-fb8e-4338-add8-b32b125846cc/day/8185b36f-bd81-4924-96df-1e1b0d4b7f98/lesson/4190858c-7fb8-4d1c-a04f-cb516a4cb3cd)

### Requisitos obrigatórios do Projeto

- [ ] 1. Retorne a quantidade de documentos inseridos na coleção produtos
- [ ] 2. Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o nome e a quantidade de lanches vendidos
- [ ] 3. Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido
- [ ] 4. Retorne os lanches que tiveram vendas maiores que 50 e menores que 100, mostrando apenas o nome e a quantidade de lanches vendidos em ordem crescente
- [ ] 5. Retorne o nome, as curtidas e vendidos dos lanches que tiveram quantidade de curtidas igual a 36 ou tenham a quantidade de vendas igual a 85
- [ ] 6. Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100
- [ ] 7. Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista
- [ ] 8. Delete os lanches com menos de 50 curtidas e retorne o nome dos lanches que restaram no banco
- [ ] 9. Retorne o nome de todos os lanches que possuam calorias abaixo de 500
- [ ] 10. Retorne o nome de todos os lanches que tenham o percentual de proteínas maior ou igual a 30 e menor ou igual a 40
- [ ] 11. Retorne o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken
- [ ] 12. Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes
- [ ] 13. Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo
- [ ] 14. Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais
- [ ] 15. Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo
- [ ] 16. Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac
- [ ] 17. Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos
- [ ] 18. Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo
- [ ] 19. Remova o item cebola de todos os sanduíches
- [ ] 20. Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo
- [ ] 21. Remova o último ingrediente do sanduíche Cheddar McMelt
- [ ] 22. Adicione a quantidade de vendas dos sanduíches por dia da semana
- [ ] 23. Insira os valores combo e tasty no array tags de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)
- [ ] 24. Ordene em todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente
- [ ] 25. Adicione o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40
- [ ] 26. Adicione o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40
- [ ] 27. Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas
- [ ] 28. Conte quantos produtos têm 4 ingredientes
- [ ] 29. Renomeie o campo descricao para descricaoSite em todos os documentos
- [ ] 30. Remova o campo curtidas do item Big Mac
- [ ] 31. Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos
- [ ] 32. Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5

Desejamos um bom projeto para todas as pessoas estudantes e que seja fonte de muito aprendizado. ✌️
