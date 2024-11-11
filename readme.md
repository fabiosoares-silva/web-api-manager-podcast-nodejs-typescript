# Gerenciador de Podcast 📣💻

### Descrição

Um app que organiza diferentes episódios de podcasts separados por categoria.

### Domínio

Podcasts feitos em vídeo.

### Features

-   Listar os episódios dos podcasts em sessões de categorias - [saúde, fitness, mentalidade, humor]
-   Filtrar episódios pelos nomes dos podcasts

### Implementação

-   Retornar uma API REST (JSON) com o nome do podcast, nome do episódio, imagem de capa, categoria e link.

### Exemplo:

```js
[
    {
        podcastName: 'HipstersPontoTube',
        episode: 'Acessibilidade Web com Charles Assunção | #HipstersPontoTube',
        cover: 'https://i.ytimg.com/vi/gnO_6NDfQHI/maxresdefault.jpg',
        category: ['dica técnica']
    },
    {
        podcastName: 'HipstersPontoTube',
        episode: 'Os MELHORES livros de tecnologia para ler em programação com Roberta Arcoverde | #HipstersPontoTube',
        cover: 'https://i.ytimg.com/vi/RvWQQRjz1Pw/maxresdefault.jpg',
        category: ['livros']
    }
];
```
