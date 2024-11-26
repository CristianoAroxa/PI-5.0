# Visão geral

## Este aplicativo Node.js foi projetado para fornecer uma API robusta com documentação abrangente usando o Swagger. A aplicação é responsável por receber respostas de uma prova mobile e retornar o resultado, incluindo a quantidade de acertos e a porcentagem alcançada. Inclui testes automatizados usando Jest e está hospedada na AWS. Este documento descreve a configuração, o uso e o teste do aplicativo.

## Citations:
[1] https://github.com/swagger-api/swagger-node
[2] https://dev.to/qbentil/swagger-express-documenting-your-nodejs-rest-api-4lj7
[3] https://pplware.sapo.pt/informacao/tutorial-como-desenvolver-uma-api-com-node-js-e-swagger/
[4] https://www.experoinc.com/insights/blog/bringing-up-robust-apis-with-swagger
[5] https://dev.to/desmondsanctity/documenting-nodejs-api-using-swagger-4klp
[6] https://swagger.io/tools/swagger-ui/
[7] https://github.com/swagger-api/swagger-js/blob/master/README.md
[8] https://apidog.com/pt/blog/use-swagger-create-node-js-api/

## Índice
### 1 - Pré-requisitos
### 2 - Instalação
### 3 - Documentação da API
### 4 - Executando testes
### 5 - Implantação
### 6 - Contribuindo
### 7 - Pré-requisitos

## Antes de começar, certifique-se de ter o seguinte instalado:
Node.js (versão 14 ou superior)
npm (gerenciador de pacotes de nó)
AWS CLI (para implantação)

## Instalação
Clone o repositório:
bash
git clone https://github.com/CristianoAroxa/deploy-api.git

## Instalar dependências:
bash
npm install

## Configurar variáveis de ambiente:
crie um arquivo .env no diretório raiz e defina suas variáveis de ambiente conforme necessário.

## Documentação da API
Este aplicativo usa o Swagger para documentação da API. Para acessar a documentação, siga estas etapas:
Inicie o servidor:
bash
npm start

Abra seu navegador e navegue até:
http://localhost:3000/api-docs

A interface do usuário do Swagger exibirá todos os endpoints disponíveis, seus parâmetros e formatos de resposta.
Exemplo de especificação de endpoint
Aqui está um exemplo de como um endpoint é documentado no Swagger:
"api/check-answers": {
            "post": {
                "sumary": "Verifica as repostas do aluno",
                "description": "Este endpoint recebe uma lista de respostas e retorna a contagem correta e a porcentagem",
                "tags": ["Questões"],
                "security": [{"bearerAuth": []}],
                "requestBody": {
                    "content": {
                        "application/js on": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "answer": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "respostas": {
                                    "value": [
                                        "A",
                                        "b",
                                        "B",
                                        "c",
                                        "D",
                                        "A",
                                        "b",
                                        "B",
                                        "c",
                                        "D"
                                    ]
                                }
                            }
                        }
                    },
                    "required": ["Questões"]
                }
            },
            "responses": {
                "200":{
                    "description": "Resposta com contagem e porcentagem das respostas",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "correctCount": {
                                        "type": "integer"
                                    },
                                    "percentage": {
                                        "type": "double"

## Executando testes
Este aplicativo usa Jest para testes. Para executar os testes, execute o seguinte comando:
bash
npm test

Certifique-se de que seus casos de teste estejam definidos no diretório __tests__ ou siga a convenção de nomenclatura *.test.js.

## Implantação
Para implantar esse aplicativo na AWS, siga estas etapas:
Configurar a AWS CLI: verifique se suas credenciais da AWS estão configuradas.
Implante usando o Elastic Beanstalk ou o EC2: você pode usar o AWS Elastic Beanstalk para facilitar a implantação ou configurar manualmente uma instância do EC2.
Definir variáveis de ambiente na AWS: certifique-se de configurar todas as variáveis de ambiente necessárias em seu ambiente da AWS.

## Contribuindo
Contribuições são bem-vindas! Siga estas etapas para contribuir:
Bifurque o repositório.
Crie uma nova ramificação (git checkout -b feature/YourFeature).
Faça suas alterações e confirme-as (git commit -m 'Adicionar algum recurso').
Envie para o branch (git push origin feature/YourFeature).
Abra uma solicitação de pull.

Para mais detalhes sobre como contribuir, consulte nosso CONTRIBUTING.md. Este README fornece uma visão geral abrangente do aplicativo Node.js, incluindo instruções de configuração, acesso à documentação da API via Swagger, procedimentos de teste com Jest e diretrizes de implantação na AWS.
