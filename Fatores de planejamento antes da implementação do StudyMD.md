# Fatores de planejamento antes da implementação do StudyMD

## 1. Objetivo

Antes de iniciar a implementação do StudyMD, é importante definir principalmente o **modelo de conhecimento e os contratos de dados** do projeto.

O maior risco inicial não está necessariamente na interface, mas em criar um formato de conteúdo que posteriormente seja difícil de:

- sincronizar;
- expandir;
- relacionar;
- importar;
- editar manualmente;
- manter compatível com o Obsidian.

O planejamento deve priorizar o modelo conceitual antes das decisões de implementação.

---

# 2. Modelo conceitual dos conteúdos

É necessário definir claramente a diferença entre os principais tipos de conteúdo.

Exemplos:

- disciplina;
- aula;
- tópico;
- conceito;
- material;
- atividade;
- questão;
- resolução;
- avaliação;
- projeto;
- anotação.

Também é importante definir **quais relações podem existir entre eles**.

Exemplo:

```text
Disciplina
    ↓ contém
Aula
    ↓ aborda
Conceito
    ↓ é utilizado por
Questão
    ↓ possui
Resolução
```

O objetivo é evitar que o Markdown se transforme apenas em uma coleção de documentos desconectados.

---

# 3. Identidade dos conteúdos

Um ponto fundamental para as integrações com Moodle e Google Classroom será determinar:

> Como saber que um arquivo representa o mesmo conteúdo que já foi importado anteriormente?

Por exemplo:

```text
Lista 01
```

pode ser importada hoje, editada amanhã no Moodle e importada novamente.

O sistema precisará distinguir entre:

- nome do conteúdo;
- identidade do conteúdo;
- origem;
- ID da origem;
- versão;
- data de atualização.

Isso será fundamental para evitar duplicações.

---

# 4. Sincronização versus importação

Importação e sincronização são conceitos diferentes.

## Importação

```text
Moodle → StudyMD
```

Significa pegar o conteúdo existente no Moodle e transformá-lo em Markdown.

## Sincronização

```text
Moodle ↔ StudyMD
```

Significa manter os dois ambientes relacionados ao longo do tempo.

Também pode existir uma abordagem intermediária:

```text
Moodle ──────┐
             ↓
Google ───→ StudyMD
             ↓
      Conteúdo enriquecido
         pelo usuário
```

É importante definir qual dessas filosofias será adotada.

---

# 5. Fonte de verdade

O projeto precisa estabelecer conceitualmente quem é a fonte de verdade para cada tipo de informação.

Por exemplo:

```text
Moodle
   ↓
dados acadêmicos oficiais

StudyMD
   ↓
conhecimento enriquecido pelo usuário
```

Uma possibilidade é considerar os dados externos como fonte para informações oficiais, enquanto o StudyMD funciona como camada de organização e enriquecimento.

Isso evita que uma atualização externa apague informações adicionadas manualmente.

---

# 6. O que pode ser editado

O StudyMD terá informações provenientes automaticamente de plataformas e informações adicionadas pelo usuário.

É importante distinguir entre:

## Dados externos

Exemplo:

```text
Prazo: 20/09/2026
```

## Dados pessoais ou enriquecimento

Exemplo:

```text
Professor falou que esse exercício é importante para a prova.
```

Se o Moodle alterar o prazo, por exemplo, o sistema não deve simplesmente apagar a anotação pessoal.

---

# 7. Proveniência dos dados

Cada informação importante deve, quando necessário, poder responder:

> De onde isso veio?

Possíveis origens:

- Moodle;
- Google Classroom;
- usuário;
- outro arquivo Markdown;
- importação manual;
- outras fontes futuras.

A proveniência será útil para:

- rastreabilidade;
- sincronização;
- atualização;
- resolução de conflitos;
- depuração.

---

# 8. Links e relações entre conteúdos

O sistema deve utilizar links Markdown e convenções compatíveis com o Obsidian.

Exemplo:

```markdown
[[Derivada]]
[[Limite]]
[[Continuidade]]
```

Esses links permitem construir uma rede de conhecimento.

Exemplo:

```text
Cálculo I
 ├── Aula 01
 │    ├── Limite
 │    └── Continuidade
 │
 ├── Aula 02
 │    └── Derivada
 │
 └── Lista 01
      ├── Questão 01
      │    └── Derivada
      └── Questão 02
           └── Limite
```

Essa estrutura pode transformar o StudyMD de um simples gerenciador de arquivos em uma **base de conhecimento acadêmico conectada**.

---

# 9. Conceitos como conteúdos reutilizáveis

Conceitos devem poder existir como arquivos próprios.

Exemplo:

```text
Derivada.md
```

Esse conceito pode ser referenciado por:

- disciplinas;
- aulas;
- questões;
- resoluções;
- materiais;
- anotações.

Exemplo:

```markdown
## Conceitos

- [[Derivada]]
- [[Regra da cadeia]]
- [[Limite]]
```

Isso evita duplicação de informações e permite que um mesmo conceito seja utilizado em diferentes contextos.

---

# 10. Questões como um sistema próprio

As questões merecem atenção especial porque podem se tornar uma das partes mais importantes do StudyMD.

Uma questão pode conter:

- enunciado;
- alternativas;
- resposta;
- resolução;
- dificuldade;
- assunto;
- conceitos envolvidos;
- fonte;
- disciplina;
- prova ou lista de origem;
- tags;
- imagens;
- fórmulas;
- múltiplas resoluções.

Uma mesma questão também pode aparecer em diferentes contextos.

Por exemplo:

```text
Questão
 ├── pertence à Lista 01
 ├── relacionada à Disciplina X
 ├── aborda [[Derivada]]
 └── possui [[Resolução - Questão 01]]
```

---

# 11. Resoluções

A resolução deve poder ser associada a uma questão sem necessariamente exigir um arquivo separado.

Exemplo:

```markdown
# Questão 001

Calcule:

$$
f(x) = x^2
$$

## Resolução

...
```

Quando houver necessidade de reutilização ou maior organização, a resolução também poderá ser representada separadamente:

```markdown
[[Resolução - Questão 001]]
```

O formato não deve obrigar todas as questões a utilizarem resoluções separadas.

---

# 12. Anexos

É necessário definir como o Markdown se relacionará com arquivos externos.

Exemplos:

- PDF;
- imagem;
- vídeo;
- documento;
- apresentação;
- código;
- arquivo compactado;
- links externos.

Uma questão importante é:

> O Markdown deve armazenar o conteúdo ou apenas referenciar o arquivo?

Isso será especialmente importante para materiais provenientes do Moodle e Google Classroom.

---

# 13. Conteúdo multimídia

O modelo não deve ser limitado a texto.

Uma aula pode conter:

```text
Texto
 ↓
Imagem
 ↓
Fórmula
 ↓
Vídeo
 ↓
PDF
 ↓
Questão
```

O Markdown deve continuar sendo capaz de representar o conteúdo principal enquanto referencia os recursos complementares.

---

# 14. Tags versus links

Tags e links devem ter funções diferentes.

## Tags

Servem principalmente para classificação.

Exemplo:

```markdown
#calculo
#matematica
#prova
```

## Links

Servem para representar relações explícitas entre conteúdos.

Exemplo:

```markdown
[[Derivada]]
[[Limite]]
[[Regra da cadeia]]
```

Essa distinção será importante para busca, organização e navegação.

---

# 15. Conteúdos criados automaticamente

Quando o sistema encontrar uma nova informação em uma plataforma externa, ele poderá criar um Markdown inicial.

Exemplo:

```text
Moodle encontra:

"Aula 07 - Derivadas"
```

O arquivo gerado pode ser considerado um **conteúdo inicial que pode ser enriquecido**.

O usuário poderá posteriormente adicionar:

- conceitos;
- observações;
- links;
- questões;
- resoluções;
- referências;
- anotações pessoais.

A automação deve facilitar a criação do conteúdo, não limitar sua evolução.

---

# 16. Conteúdo duplicado

É provável que diferentes arquivos ou recursos representem essencialmente o mesmo conteúdo.

Exemplo:

```text
Derivadas.pdf
Derivadas (1).pdf
Aula sobre derivadas
Slides - Derivadas
```

É importante distinguir:

- arquivo;
- conteúdo;
- conceito;
- recurso;
- cópia;
- versão.

O nome do arquivo sozinho não deve ser utilizado como identidade definitiva de um conteúdo.

---

# 17. Histórico e versionamento

Como o StudyMD utilizará Markdown, o Git pode ser particularmente útil.

Um conteúdo pode passar por diferentes estados:

```text
Versão importada
       ↓
Usuário adiciona resolução
       ↓
Usuário adiciona conceitos
       ↓
Moodle atualiza atividade
       ↓
Nova versão
```

O planejamento deve considerar como alterações locais e alterações externas poderão coexistir.

---

# 18. Privacidade e credenciais

As integrações com contas acadêmicas exigirão atenção especial à segurança.

Devem ser considerados:

- tokens de acesso;
- credenciais;
- dados pessoais;
- informações de professores;
- informações de turmas;
- links privados;
- permissões;
- arquivos privados.

Regra fundamental:

> **Credenciais nunca devem ser armazenadas dentro dos arquivos `.md`.**

---

# 19. Compatibilidade futura

O formato não deve ser projetado exclusivamente para:

```text
Moodle + Google Classroom + Obsidian
```

Ele deve ser capaz de receber novas fontes no futuro.

Por exemplo:

```text
Moodle ───────┐
Google ───────┤
Outra fonte ──┤
              ↓
           StudyMD
```

Isso favorece um modelo baseado em:

```text
Conteúdo
+
Metadados
+
Referências
+
Proveniência
```

em vez de um modelo específico para cada plataforma.

---

# 20. Offline-first

O uso de Markdown cria uma oportunidade importante: tornar o conteúdo independente da conexão com a internet.

Idealmente:

```text
Internet disponível
       ↓
Sincronização

Internet indisponível
       ↓
Leitura e edição continuam funcionando
```

Isso combina naturalmente com:

- Markdown;
- Obsidian;
- Git;
- armazenamento local.

---

# 21. Busca

É importante pensar antecipadamente no que o usuário poderá procurar.

Exemplos:

> "Questões de derivada"

> "Atividades pendentes"

> "Todas as questões relacionadas a limite"

> "Materiais de Cálculo I"

> "Aulas que mencionam regra da cadeia"

Esses casos de uso ajudarão a determinar quais metadados e relações realmente são necessários.

---

# 22. Interoperabilidade

Um princípio importante do projeto deve ser:

> **O usuário deve ser dono do próprio conhecimento.**

Se o StudyMD deixar de existir, os dados ainda devem permanecer utilizáveis.

Idealmente, o usuário continuará possuindo:

```text
Markdown
+
Anexos
+
Links
```

Esses arquivos poderão ser utilizados no Obsidian ou em outros softwares compatíveis.

O StudyMD deve agregar valor sobre os arquivos, e não tornar os arquivos dependentes do StudyMD.

---

# 23. Prioridades antes da implementação

Para manter o planejamento enxuto, os seguintes pontos devem ser resolvidos primeiro:

1. **Modelo dos tipos de conteúdo**
2. **Relações entre conteúdos**
3. **Identidade e IDs**
4. **Metadados**
5. **Origem e proveniência**
6. **Regras para sincronização e conflitos**
7. **Tratamento de anexos**

Esses pontos formam a base conceitual necessária para as decisões técnicas posteriores.

---

# 24. Princípio central do projeto

O StudyMD não deve ser apenas uma interface para Moodle e Google Classroom.

Sua função deve ser a de uma **base de conhecimento acadêmico em Markdown**, capaz de:

- receber informações dessas plataformas;
- organizar conteúdos;
- relacionar conceitos;
- armazenar questões;
- armazenar resoluções;
- permitir enriquecimento manual;
- preservar os dados em formato aberto;
- funcionar com o Obsidian;
- incorporar novas fontes no futuro.

A ideia central pode ser resumida como:

> **O StudyMD deve transformar informações acadêmicas dispersas em uma base de conhecimento estruturada, conectada e portátil, tendo Markdown como formato fundamental.**