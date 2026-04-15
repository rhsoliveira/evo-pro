# Atualizando a Logo do Projeto

Este guia explica como atualizar a logo do projeto utilizando variáveis de ambiente.

## Variáveis de Ambiente

Para atualizar a logo, você precisa configurar duas variáveis de ambiente:

### 1. `X_CUSTOM_SHOULD_UPDATE_LOGO`
- **Descrição**: Indica se a logo deve ser atualizada
- **Formato**: Booleano (`true` ou `false`)

### 2. `X_CUSTOM_UPDATE_LOGO_PATH`
- **Descrição**: URL ou caminho para o arquivo da logo principal
- **Formato**: String contendo URL completa 
- **Exemplo**: `https://exemplo.com/logo.png` 


## Como Configurar

### Arquivo `.env`

Adicione as seguintes linhas no arquivo `.env` na raiz do projeto:
