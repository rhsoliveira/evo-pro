## INSTALAÇÃO

# Para instalar o Evolution com Botões, siga os passos abaixo:
```bash
docker login -u mfilype -p <SUA_SENHA>
docker pull gestaomaster/evolution-api-pro:latest
```

> A senha será enviada assim que for efetuado o pagamento

Depois disso é só executar o comando abaixo:
```bash
docker run -d --name evolution_api_pro -p 3000:3000 gestaomaster/evolution-api-pro:latest
```

ou se preferir (e é até melhor), você pode usar o docker-compose:
```bash
docker-compose up -d
```

### Após fazer o passos acima:
Basta mudar a imagem da sua stack para `gestaomaster/evolution-api-pro:latest` e reiniciar a stack.

# Gerando sua própria imagem docker
1. Rode o comando abaixo na raiz do projeto:
```bash
docker build -t evolution-buttons .
```
2. Após a imagem ser criada, rode o comando abaixo para atribuir uma tag a essa imagem. O segundo argumento deve ser a tag que você deseja.
```bash
docker tag evolution-api-pro gestaomaster/evolution-api-pro:latest
```

Agora você pode subir a imagem com o comando:
```bash
docker push gestaomaster/evolution-api-pro:latest
```

> No lugar de `latest`, você pode usar a versão que desejar.

> No lugar de `mfilype`, você deve usar o seu usuário do docker hub.
