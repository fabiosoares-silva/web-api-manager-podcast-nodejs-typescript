# Nome do aplicativo 📣💻

Gerenciador de Podcast

### Descrição

Um app similar ao netflix, que organize diferentes episódios de podcasts separados por categoria

### Domíinio

Podcasts feitos em vídeo

### Features

-   Listar os episódios dos podcasts em sessões de categorias -[saúde, fitness, mentalidade, humor]
-   Filtrar episódios pelos nomes dos podcasts

### Como vou implementar:

-   Vou retornar uma api rest (json) com o nome do podcast, nome do episódio, imagem de capa, category e link

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
