Analise o design anexado (screenshot ou frame do Figma) e converta para componentes React seguindo os padrões abaixo.

---

# Stack

- **React 19**
- **TypeScript** strict
- **styled-components** para estilos
- **MUI** apenas quando já existir no projeto (evitar criar novos estilos com MUI)
- **Icons** usar `src/components/Icon` (quando houver)

---

# Nomenclatura

- Arquivos: **camelCase** com `.tsx` e `.ts` (ex.: `statCard.tsx`)
- Componentes: **PascalCase**
- **Named exports** preferencialmente; usar `default export` apenas quando já existir padrão no módulo
- Não criar barrel files (`index.ts`) para pastas internas novas

---

# Estrutura

- Para cada componente novo:
  - `ComponentName/index.tsx`
  - `ComponentName/styles.tsx`
- Evite lógica complexa dentro dos estilos; preferir cálculos simples no componente

---

# Estilo (CSS)

- Usar **cores e sombras** já usadas no projeto:
  - Bordas: `#E9EAEB`
  - Sombras: `0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05))`
- Tipografia:
  - Base: `Manrope`
  - Destaques: `Bricolage Grotesque`
- Padding e gaps devem seguir o layout do Figma (não arredondar valores)

---

# Layout

- Layouts com grid/flex devem respeitar alinhamentos e espaçamentos do design
- Evitar `height` fixa quando o conteúdo pode crescer
- Garantir scroll apenas no container principal (evitar scroll duplo)

---

# Acessibilidade

- Usar `button` para ações clicáveis
- Adicionar `aria-label` em ícones sem texto
- Respeitar foco (sem remover outline sem alternativa)
