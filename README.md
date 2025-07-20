<div align="center">
  <img src=".github/images/playwright-logo.png" alt="Logo ou imagem do projeto" style="max-width: 350px; margin-bottom: 20px;" />
</div>

# Playwright LinkAI

Bem-vindo ao projeto **Playwright LinkAI**!

Este repositório contém uma suíte de testes automatizados end-to-end utilizando o [Playwright](https://playwright.dev/), focada na validação de fluxos críticos de autenticação, cadastro e navegação do sistema LinkAI.

## Estrutura do Projeto

```
├── e2e/                # Testes automatizados (specs)
│   ├── home.spec.ts    # Testes da página inicial
│   ├── login.spec.ts   # Testes de login
│   └── register.spec.ts# Testes de cadastro
├── support/
│   ├── fixtures/       # Dados e utilitários de teste
│   └── pages/          # Page Objects (modelos das páginas)
│       ├── DashPage.ts
│       ├── HomePage.ts
│       ├── LoginPage.ts
│       ├── RegisterPage.ts
│       └── components/ # Componentes reutilizáveis
├── playwright.config.ts# Configuração do Playwright
├── package.json        # Dependências e scripts
├── start_all.bat       # Script para rodar todos os testes no Windows
├── playwright-report/  # Relatórios gerados automaticamente
└── test-results/       # Traces e evidências de execução
```

## Como Executar os Testes

1. **Instale as dependências:**
   ```powershell
   npm install
   ```

2. **Execute todos os testes:**
   ```powershell
   npx playwright test
   ```
3. **Visualize o relatório:**
   Após a execução, abra o arquivo `playwright-report/index.html` para visualizar o relatório interativo dos testes.

4. **Acesse traces detalhados:**
   Em caso de falha, consulte os arquivos em `test-results/` para análise detalhada do fluxo do teste.

## Sobre o arquivo `start_all.bat`

O arquivo `start_all.bat` é um script em lote para Windows que prepara o ambiente de desenvolvimento para execução dos testes automatizados. Ele sobe a API e a interface web localmente, garantindo que a aplicação esteja disponível antes de rodar os testes Playwright.

(Verifique se os diretórios estão condizentes com o seu ambiente antes de executá-lo)

**Como usar:**

1. Clique duas vezes no arquivo `start_all.bat` na raiz do projeto, ou
2. Execute no terminal:
   ```powershell
   ./start_all.bat
   ```

O script irá:
- Inicializar a API e a interface web em ambiente de desenvolvimento;
- Aguardar que os serviços estejam prontos;
- Em seguida, executar a suíte de testes Playwright;
- Gerar os relatórios automaticamente ao final da execução.

Assim, você garante que os testes rodem sempre com a aplicação pronta e atualizada no ambiente local.

## Boas Práticas Utilizadas
- **Page Object Model:** Separação da lógica de interação com as páginas em arquivos dedicados, facilitando manutenção e reuso.
- **Componentização:** Componentes reutilizáveis para elementos comuns (ex: Toast, Warning).
- **Fixtures:** Dados e utilitários centralizados para facilitar a criação de cenários de teste.
- **Relatórios e Traces:** Geração automática de relatórios e traces para facilitar o debug.

## Tecnologias
- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Contribuição
Pull requests são bem-vindos! Sinta-se à vontade para abrir issues ou sugerir melhorias.

---

> Projeto mantido por Jefferson Mello.
