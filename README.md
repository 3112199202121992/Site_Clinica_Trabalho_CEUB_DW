# Clínica Félix Saúde

Projeto de site institucional com sistema de consulta de profissionais por especialidade, utilizando API em Node.js e interface HTML/CSS/JS.

## Objetivo

Oferecer uma plataforma simples para os pacientes consultarem os profissionais disponíveis na Clínica Félix Saúde, filtrando por especialidade médica.

## Estrutura do Projeto

/clinica-felix
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── imagens/
│       ├── Beatriz.jpg
│       ├── Carlos.jpg
│       ├── Isaura.jpg
│       ├── Patricia.jpg
│       ├── Paulo.jpg
        

│
├── profissionais.json
├── server.js
└── README.md

## Aplicações Utilizadas

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript

- **Backend:**
  - Node.js

## Instalação e Execução

1. **Clone o repositório:**

git clone https://github.com/seu-usuario/clinica-felix.git
cd clinica-felix

2. **Instale as dependências (se houver):**

npm install express cors

3. **Execute o servidor:**

node server.js

4. **Abra o arquivo HTML no navegador:**

Abra `public/index.html` diretamente ou configure um servidor local como o Live Server do VSCode.

## Funcionalidades

- Buscar profissionais por especialidade digitada.
- Interface com cards de apresentação dos profissionais.
- Exibição da disponibilidade de atendimento.
- Layout responsivo.

## Exemplo de Dados (`profissionais.json`)

```json
[
  {
    "nome": "Dra. Beatriz Souza",
    "especialidade": "Clínica Geral",
    "disponibilidade": "Segunda a sexta, 08h às 17h"
  },
  {
    "nome": "Dr. Carlos Farias",
    "especialidade": "Fisioterapia",
    "disponibilidade": "Terças e quintas, 13h às 19h"
  }
]  

## Personalização da página (`style.css`)
```CSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ebeaf7;
  color: #0f0f0f;
  line-height: 1.6;
}

header {
  background-color: #e3d8f1;
  color: rgb(51, 32, 158);
  text-align: center;
  padding: 40px 20px;
}

header h1 {
  font-size: 2.5em;
}

header h2 {
  font-weight: normal;
  margin-top: 10px;
}

---

## Melhorias Futuras e Nessessárias

- Integração com banco de dados.
- Filtros adicionais (nome, dias de atendimento).
- Sistema de agendamento online.

---

## Desenvolvido por

João Pedro Braga Félix 
[[linkedin](https://www.linkedin.com/in/jo%C3%A3o-pedro-braga-f%C3%A9lix-19985124b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUjsI3%2BWdQj2WUxrqLLpYIQ%3D%3D)]  
Ano: 2025#   S i t e _ C l i n i c a _ T r a b a l h o _ C E U B _ D W 
 
 