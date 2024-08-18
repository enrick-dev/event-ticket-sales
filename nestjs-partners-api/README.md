# API NestJS de Ingressos de Eventos
Nessa api é possivel adicionar diferentes Eventos e e lugares para cada evento. Da mesma forma que também é possivel reservar por lugar do Evento especifico.
Nessa api todo o serviço foi separado em uma lib core e dois apps partners para simular diferentes parceiros com diferentes bancos de dados.


# Guia de Instalação com o Docker

Este guia irá ajudá-lo a instalar e executar o aplicativo Nest em seu ambiente local. Siga os passos abaixo para configurar o ambiente e executar o aplicativo.

## Pré-requisitos

Antes de começar, você precisa ter o Docker instalado em sua máquina. Este projeto utiliza o `.devcontainer` para garantir que todos os desenvolvedores usem o mesmo ambiente com as mesmas extenções. Se você ainda não tem o Docker instalado, siga as instruções no [repositório oficial do Docker](https://docs.docker.com/engine/install/).

## Instalação

1. **Extenções**

   Instale as seguintes extenções para ter uma melhor experiencia:
    - [Dev Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) - Você vai estar acessando seu vscode diretamente no container do docker
    - [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) - Existe arquivos .http com as requisiçoes da aplicação mapeadas, com essa extenção consegue rodas as requisições nos proprios arquivos



3. **Clone o projeto e monte a imagem docker**
   - Clone o projeto:
    ```bash
   git clone
   ```
    
   - Monte a imagem docker:
   ```bash
   docker compose up
   ```

4. **entre no seu vsCode e abra o dev container**
   Com seu vsCode aberto aperte  ( ⌘ + shift + p) ou clique no menu em "view > Command Palette". Acesse "Dev Containers: Folder in Container", selecione a pasta que clonou e logo será aberto no vsCode rodando o NestJs e Mysql.

![Screen Recording 2024-08-04 at 02 39 36](https://github.com/user-attachments/assets/8fd1e903-de8e-4034-88e6-347555079ab8)


5. **Migrations**
   Com o Dev Container aberto, abra o terminal e rode os seguintes comandos:
   
     - Para o "partner1" que é simulando um parceiro
   ```bash
   npm run migrate:partner1
   ```
   
     - Para o "partner2" que é simulando um segundo parceiro
   ```bash
   npm run migrate:partner2
   ```

## Executando o Aplicativo

    Com o Dev Container aberto e com as migrations geradas você está pronto para rodar o aplicativo

1. \*\*Para iniciar o servidor de desenvolvimento para o partner1 (padrão), execute:

   ```bash
   npm run start:dev
   ```

2. \*\*Para iniciar o servidor de desenvolvimento para o partner2, execute:

   ```bash
   npm run start:dev -- partner2
   ```


   Agora você deve ser capaz de acessar o executar os endpoints listados nos arquivos ".http".


