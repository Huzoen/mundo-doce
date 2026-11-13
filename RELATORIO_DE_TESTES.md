# RELATÓRIO DE TESTES — MUNDO DOCE

## 1. Identificação do projeto

**Projeto:** Sistema Web para Loja de Cupcakes Gourmet — Mundo Doce

**Tipo de teste:** Testes funcionais e de responsividade

**Ambiente:** Aplicação publicada no Firebase Hosting

**Endereço:** https://loja-cupcakes.web.app

**Data dos testes:** 13/11/2026

## 2. Objetivo

Este relatório tem como objetivo documentar os testes realizados no sistema Mundo Doce, verificando o funcionamento das principais funcionalidades, a validação dos dados do cliente, o armazenamento dos pedidos no banco de dados e a adaptação da interface para dispositivos móveis.

## 3. Testes realizados

| Nº | Teste | Resultado | Situação |
|---|---|---|---|
| 1 | Acessar a aplicação e visualizar os quatro cupcakes e suas imagens | Página carregada corretamente | Aprovado |
| 2 | Adicionar produtos ao carrinho | Produto adicionado corretamente | Aprovado |
| 3 | Aumentar e diminuir a quantidade de produtos | Quantidades e valores atualizados corretamente | Aprovado |
| 4 | Remover produtos do carrinho | Produto removido e total zerado quando o carrinho ficou vazio | Aprovado |
| 5 | Preencher e enviar o formulário de pedido | Pedido enviado com mensagem de sucesso | Aprovado |
| 6 | Verificar o armazenamento no Firestore | Pedido encontrado na coleção `pedidos` | Aprovado |
| 7 | Enviar formulário com campos obrigatórios vazios | Sistema impediu o envio | Aprovado |
| 8 | Verificar a interface na visualização de celular | Elementos apresentados de forma organizada | Aprovado |

## 4. Metodologia

Os testes foram realizados manualmente, utilizando a versão publicada da aplicação.

Foram executadas operações de navegação pelo catálogo, inclusão e remoção de produtos, alteração de quantidades, preenchimento do formulário de pedidos e verificação dos registros no Cloud Firestore.

Também foi utilizada a ferramenta de visualização responsiva do navegador para verificar a apresentação do sistema em formato de dispositivo móvel.

## 5. Resultados

Os oito testes documentados foram concluídos com resultados satisfatórios.

Durante as verificações, foi possível confirmar o funcionamento do catálogo, do carrinho de compras, do formulário de pedidos e da integração com o banco de dados Firestore.

A validação dos campos obrigatórios também funcionou corretamente, impedindo o envio do formulário sem o preenchimento dos dados necessários.

A interface apresentou organização adequada na visualização móvel testada.

## 6. Conclusão

Com base nos testes realizados, conclui-se que as principais funcionalidades implementadas no sistema Mundo Doce estão funcionando conforme o esperado nos cenários verificados.

Os resultados demonstram que a aplicação permite visualizar produtos, montar um carrinho de compras, preencher os dados do cliente e registrar pedidos no banco de dados.

Os testes também contribuíram para verificar a usabilidade e a responsividade da aplicação.

**Observação:** Os resultados apresentados correspondem aos testes manuais efetivamente realizados durante a validação do projeto.