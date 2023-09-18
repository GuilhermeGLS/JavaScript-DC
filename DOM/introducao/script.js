// pegando o HTML
const HTML = document.firstElementChild;

// Pegando o Head
const HEAD = HTML.firstElementChild

// Pegando o Body
const BODY = HTML.lastElementChild

// pegando o <Main>
const MAIN = BODY.firstElementChild

// pegando o <Header>
const HEADER = MAIN.firstElementChild

// Pegando o <H1>
const H1 = HEADER.firstElementChild

// Pegando de forma mais rapido as imagens
const IMAGEM = document.getElementById('imagem')

// alterando SRC da imagem
IMAGEM.src = "https://frontendblog.com.br/wp-content/uploads/2023/04/0_dcpjTwj_qSjTdaUc.jpg"

// Alterando a imagem
IMAGEM.style.width = "20em"

const FOOTER = document.getElementById('FOOTER')

FOOTER.style.display = "block"

