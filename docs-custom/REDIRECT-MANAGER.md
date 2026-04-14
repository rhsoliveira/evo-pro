
# Redirecionando a Rota Base

## Visão Geral

A variável de ambiente `X_CUSTOM_REDIRECT_BASE_URL_TO_MANAGER` configura se deve redirecionar a rota base da API para o URL pré-definido. Quando ativada, qualquer acesso à raiz da API (`/`) será redirecionado para o URL configurado.

## Configuração

```bash
# .env
X_CUSTOM_REDIRECT_BASE_URL_TO_MANAGER=https://google.com.br
```

