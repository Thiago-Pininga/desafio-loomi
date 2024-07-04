Dificuldades em entender as requisições e o funcionamento do cypress com as APIs

# Testes Automatizados de Aplicativo

Este repositório contém testes automatizados para validar as funcionalidades do aplicativo usando Cypress.

## Pré-requisitos

Antes de rodar os testes, certifique-se de que você atendeu aos seguintes pré-requisitos:

1. **Conta no Aplicativo**
   - Crie uma conta manualmente no aplicativo.
   - Conecte sua conta com o Google.
   - Ative a conexão com o Google Calendar.

2. **Node.js**
   - Tenha o Node.js instalado no seu computador. Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).

## Instalação

Siga os passos abaixo para configurar e rodar os testes:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**
    ```
    npm install
    ```
## Executando os Testes

1. Abra o Cypress:

    ```bash
    npx cypress open
    ```

    Isso abrirá a interface do Cypress, onde você pode selecionar e rodar os testes manualmente.

2. Rodar todos os testes em modo headless:

    ```bash
    npx cypress run
    ```

    Isso executará todos os testes em modo headless (sem abrir a interface gráfica).

## **Estrutura do Projeto**

* **cypress/integration:** Contém os arquivos de teste.

* **cypress/support:** Contém os comandos personalizados e configurações adicionais.

* **cypress.json:** Arquivo de configuração do Cypress.

## Cenários de Teste
Os testes cobrem os seguintes cenários:

### Buscar Partidas
1. Busca por Time

2. Busca por Campeonato

3. Busca por Data

4. Busca por Plataforma

### Favoritar Partidas e Times
1. Favoritar Partida

2. Favorita o time AA Flamengo

3. Desfavoritar Time

4. Desfavoritar Partida


### Marcar no Google Calendar
1. Verificar Seção de Calendário

2. Marcar Partida no Calendário

3. Desmarcar Partida no Calendário

### Melhores Momentos
1. Acessar e Assistir um Vídeo

2. Filtrar por Times

3. Filtrar por Campeonato