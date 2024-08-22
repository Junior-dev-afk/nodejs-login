Projeto de Login Moderno com Node.js

Este projeto é uma aplicação de login moderno implementada utilizando Node.js com a arquitetura MVC (Model-View-Controller) e o padrão Singleton para gerenciar conexões com o banco de dados. O projeto demonstra práticas modernas de desenvolvimento, incluindo uma abordagem escalável para a construção de aplicações web.
Índice

    Descrição
    Arquitetura
    Instalação
    Uso
    Estrutura do Projeto
    Contribuição
    Licença

Descrição

Este projeto é uma aplicação de login que utiliza uma arquitetura limpa para separar as responsabilidades do sistema. Utiliza o padrão Singleton para gerenciar a conexão com o banco de dados e a arquitetura MVC para estruturar o código de forma modular.

Principais funcionalidades:

    Registro de novos usuários
    Login de usuários existentes
    Interface web moderna

Arquitetura
Arquitetura MVC

    Model: Representa a estrutura dos dados e interage com o banco de dados. Gerencia a lógica de acesso a dados e validação.
    View: Responsável pela apresentação dos dados ao usuário. Usa templates para renderizar as páginas HTML.
    Controller: Interage com o Model e a View. Processa a entrada do usuário e executa a lógica de negócios.

Padrão Singleton

O padrão Singleton é usado para garantir que a conexão com o banco de dados seja única em toda a aplicação. Isso evita a criação de múltiplas instâncias da conexão, o que pode levar a problemas de desempenho e gerenciamento de recursos.
Instalação
Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados. Você pode baixá-los em nodejs.org.
Passos para Instalação

    Clone o Repositório

    bash

git clone https://github.com/junior-dev-afk/nodejs-login.git
cd nodejs-login

Instale as Dependências

bash

npm install

banco de dados simples, mas com potencial de crescimento


Uso

    Inicie o Servidor

    bash

    npm start

    O servidor será iniciado na porta 5000 por padrão. Acesse a aplicação em http://localhost:5000.

    Navegue pela Aplicação
        Página de Login: /login
        Página de Registro: /register
        Página de acesso: /home
        

End points
    
      /verifyLogin  #verifica com os parametros usuario e senha se a conta existe e se a senha coresponse
      /register #com os parametros usuario e senha, verifica se o usuario existe caso nao exista ele adiciona ao banco de dados
    


Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

    Faça um fork do repositório.
    Crie uma branch para sua modificação: git checkout -b minha-branch.
    Faça suas alterações e commit: git commit -am 'Adiciona nova funcionalidade'.
    Envie para o repositório remoto: git push origin minha-branch.
    Abra um Pull Request.

Licença

Este projeto é licenciado sob a Licença MIT.
