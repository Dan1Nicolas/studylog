# StudyLog 📚

Um aplicativo simples para registrar sessões de estudo, feito com **React + TypeScript + TailwindCSS**.  

[Acesse o repositório no GitHub](https://github.com/Dan1Nicolas/studylog)

[Acesse o site na Web](https://studylog-omega.vercel.app/)

---

## 🚀 Comandos para rodar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Páginas existentes

- `/ → Home:` – mostra as sessões cadastradas em formato de cards + estatísticas (totais, média).

- `/add →` – **Nova Sessão:** formulário para adicionar nova sessão de estudo.
- `/session/:id →` – **Detalhes:** detalhes da sessão selecionada.
- `* → 404:` – página de erro customizada.

## Onde usamos useMemo / useCallback

- `useMemo →` – usado na página Home para calcular:
    - total de sessões
    - total de minutos
    - média de minutos por sessão

- `useCallback →` – usado para memoizar funções de adicionar/remover sessões.


## Integrantes

- **Daniel Nicolas Leoterio**  
  RM: 562186  
  Turma: 1TDSPV
  - Page details, bug fix, styles

  [GitHub](https://github.com/Dan1Nicolas)
  •
  [LinkedIn](https://www.linkedin.com/in/daniel-leoterio/)

- **Matheus Moya de Oliveira**  
  RM: 562822  
  Turma: 1TDSPV  
  - Pages home And 404 & studyCard
  [GitHub](https://github.com/matheusmoyaoliveira)
  •
  [LinkedIn](https://www.linkedin.com/in/matheusmoyaoliveira/)

- **Ana Carolina Pereira Fontes**  
  RM: 562145  
  Turma: 1TDSPV  
  - Page AddStudy and component studyForm & styles
  [GitHub](https://github.com/CarolinaaFontes)
  •
  [LinkedIn](https://www.linkedin.com/in/ana-carolina-pereira-fontes/) 

