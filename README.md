# Danillo Franccesco — site oficial + link da bio

Site estático (HTML, CSS e JS puros, sem build) com estética de cinema noir.

| Página | Para quê |
|---|---|
| `index.html` | Portfólio completo: sobre, filmografia, destaque *Não Peça Desculpas*, vídeos, publicidade, Instagram, ficha de casting, contato |
| `links.html` | Link da bio do Instagram (`seusite.com/links`) |

Nas duas páginas há o **assistente de atendimento** (botão "Fale com a equipe"): fluxos guiados para Publicidade, Projetos, Governo, Imprensa, Fãs e Dúvidas. No fim, o visitante envia o resumo pronto para o WhatsApp **(11) 94800-0631** ou por e-mail. Não há servidor nem banco de dados: custo zero.

## Como editar

- **Adicionar/editar trabalhos:** `data/works.js`. Copie um bloco e mude os campos. Se tiver trailer no YouTube, cole só o ID (o trecho depois de `watch?v=`); ele aparece sozinho na filmografia e na seção Vídeos.
- **Textos e perguntas do assistente:** `data/assistant-flows.js`.
- **Telefone/e-mail:** no topo de `data/assistant-flows.js` e nos links de `index.html` / `links.html` (procure por `5511948000631` e `med.producoes`).
- **Textos do site:** direto em `index.html`.
- **Cores e fontes:** variáveis no topo de `css/style.css`.

### Fotos (quando houver)
Hoje o site usa monogramas e cartazes tipográficos. Para colocar fotos, salve em `assets/` (ex.: `assets/retrato.jpg`) e troque o bloco `<figure class="portrait">` em `index.html` por um `<img>`. Troque também `assets/og.png` (imagem que aparece ao compartilhar o link, 1200×630).

## Ver no computador

```bash
python -m http.server 5173
```

Depois abra http://localhost:5173.

## Publicar (GitHub + Cloudflare Pages)

1. Crie um repositório no GitHub (ex.: `danillofranccesco-site`) e envie esta pasta:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/danillofranccesco-site.git
   git push -u origin main
   ```
2. No painel da Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Configuração de build: **Framework preset: None**, **Build command:** vazio, **Build output directory:** `/`.
4. Clique em **Save and Deploy**. O site fica em `https://<nome>.pages.dev`.
5. (Opcional) Em **Custom domains**, conecte um domínio próprio (ex.: `danillofranccesco.com.br`).
6. No Instagram, coloque na bio: `https://<seu-dominio>/links`.

Cada `git push` publica uma versão nova automaticamente. O arquivo `_headers` define cache e cabeçalhos de segurança na Cloudflare.

## Fontes das informações
IMDb (nm10563514), Elenco Digital, AdoroCinema e imprensa (Eu, Rio!, ArteCult, O Regional Sul de Minas). Revise e atualize os dados com o Danillo antes de divulgar.
