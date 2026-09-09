# Filosofia e organização dos arquivos Markdown do StudyMD

## 1. Objetivo

O StudyMD utilizará arquivos Markdown (`.md`) como formato principal para representar e armazenar conteúdos acadêmicos.

Os arquivos devem ser:

- compatíveis com o Obsidian;
- legíveis e editáveis manualmente;
- simples de criar;
- fáceis de visualizar no StudyMD;
- adequados para conteúdos importados do AVA Moodle e Google Classroom;
- capazes de representar diferentes tipos de materiais acadêmicos;
- interconectáveis por referências entre arquivos;
- extensíveis sem exigir mudanças no formato existente;
- compreensíveis mesmo fora do StudyMD.

O Markdown deve ser tratado como **formato de conteúdo**, e não como uma representação exclusiva da interface do StudyMD.

---

# 2. Princípio fundamental

O conteúdo deve ser separado da forma como ele é apresentado.

Um arquivo `.md` deve descrever **o que é o conteúdo**, enquanto o StudyMD e o Obsidian decidem **como apresentá-lo**.

Por exemplo, uma aula não deve conter informações específicas sobre como um determinado componente da interface deve renderizá-la.

O mesmo arquivo deve poder ser:

- aberto no Obsidian;
- editado em qualquer editor Markdown;
- visualizado no StudyMD;
- versionado pelo Git;
- utilizado como referência por outro arquivo;
- eventualmente exportado para outros formatos.

---

# 3. Markdown como unidade básica de conhecimento

O StudyMD deve considerar cada arquivo Markdown como uma unidade independente de conhecimento ou informação.

Exemplos:

- disciplina;
- aula;
- tópico;
- conceito;
- material;
- atividade;
- questão;
- resolução;
- aviso;
- prova;
- trabalho;
- projeto;
- referência;
- anotação.

Não é necessário criar um tipo específico para cada situação existente no AVA.

A classificação deve ser suficientemente simples para que novos tipos de conteúdo possam surgir sem tornar o sistema excessivamente rígido.

---

# 4. Conteúdo acadêmico e conteúdo importado

O StudyMD terá duas origens principais de informação:

1. conteúdo criado ou editado pelo usuário;
2. conteúdo obtido de plataformas externas.

As principais fontes externas inicialmente consideradas são:

- AVA da UFMS, baseado em Moodle;
- Google Classroom.

O formato Markdown deve ser capaz de representar informações provenientes dessas plataformas sem depender diretamente de suas estruturas internas.

Por exemplo, uma atividade importada do Moodle deve continuar sendo uma atividade do StudyMD mesmo que a implementação do Moodle seja alterada.

---

# 5. Metadados

Cada arquivo pode possuir uma pequena quantidade de metadados no início do documento, utilizando **YAML Frontmatter**, formato compatível com o Obsidian.

Exemplo:

```yaml
---
tipo: aula
disciplina: Cálculo I
data: 2026-09-09
origem: ava
---
```

Os metadados devem ser:

- curtos;
- intuitivos;
- opcionais quando não forem necessários;
- fáceis de editar manualmente;
- úteis para organização, busca e filtragem.

Não se deve transformar o frontmatter em um formulário excessivamente complexo.

A regra deve ser:

> Se uma informação puder ser naturalmente expressa no conteúdo, ela não precisa necessariamente virar metadado.

---

# 6. Referências entre conteúdos

Um dos princípios mais importantes do StudyMD será a possibilidade de relacionar conteúdos através de links Markdown e links no formato utilizado pelo Obsidian.

Exemplo:

```markdown
Este assunto utiliza o conceito de [[Derivada]].

Também está relacionado com [[Limite]] e [[Continuidade]].
```

Isso permite construir uma rede de conhecimento entre disciplinas, aulas, conceitos, questões e materiais.

Uma questão pode, por exemplo, fazer referência a:

```markdown
[[Equação de segundo grau]]
[[Função quadrática]]
[[Bhaskara]]
```

Uma aula pode fazer referência a:

```markdown
[[Derivada]]
[[Regra da cadeia]]
[[Integração]]
```

O StudyMD deve preservar esses links em vez de transformar as relações em estruturas proprietárias.

---

# 7. Conceitos como entidades reutilizáveis

Conceitos acadêmicos devem poder existir como arquivos próprios.

Exemplo:

```text
Derivada.md
```

Esse conceito pode ser referenciado por diversas disciplinas e conteúdos.

Por exemplo:

```markdown
# Derivada

A derivada representa...

## Relacionados

- [[Limite]]
- [[Continuidade]]
- [[Integral]]
```

Isso permite que o mesmo conceito seja utilizado em diferentes disciplinas sem duplicar seu conteúdo.

Uma disciplina pode possuir:

```markdown
[[Derivada]]
```

Uma questão pode possuir:

```markdown
[[Derivada]]
```

Uma aula pode possuir:

```markdown
[[Derivada]]
```

Todos apontando para o mesmo conceito.

---

# 8. Questões

Questões devem ser representadas como conteúdos independentes.

Exemplo conceitual:

```markdown
# Questão 001

Calcule a derivada da função:

$$
f(x) = x^2 + 3x
$$

## Resolução

...

## Conceitos

- [[Derivada]]
- [[Regra da potência]]
```

A questão deve poder existir independentemente de uma disciplina específica.

Isso permite que uma mesma questão seja relacionada a:

- uma disciplina;
- uma aula;
- um conceito;
- uma lista de exercícios;
- uma prova;
- uma fonte externa.

---

# 9. Resoluções

A resolução deve ser considerada conteúdo associado à questão, mas não necessariamente deve ser tratada como uma estrutura completamente diferente.

O modelo deve permitir tanto:

```markdown
# Questão 001

...

## Resolução

...
```

quanto, quando houver necessidade:

```markdown
# Questão 001

...

[[Resolução - Questão 001]]
```

A escolha entre uma resolução incorporada ou um arquivo separado deve depender da necessidade de reutilização e organização.

O formato não deve obrigar toda questão a possuir uma resolução separada.

---

# 10. Materiais

Materiais provenientes do AVA ou Google Classroom podem possuir diferentes formatos e finalidades.

Exemplos:

- PDF;
- apresentação;
- documento;
- imagem;
- vídeo;
- link externo;
- apostila;
- artigo;
- arquivo de código;
- material complementar.

O Markdown deve funcionar como uma descrição e ponto de referência para esses materiais.

Exemplo:

```markdown
# Apostila de Cálculo

Material disponibilizado pelo professor para acompanhamento da disciplina.

[Arquivo da apostila](./apostila-calculo.pdf)
```

O sistema não deve pressupor que todo material externo será convertido para Markdown.

---

# 11. Atividades

Atividades devem conseguir representar diferentes modelos encontrados no AVA e no Google Classroom.

Exemplos:

- exercícios;
- listas;
- trabalhos;
- questionários;
- provas;
- projetos;
- tarefas com prazo;
- atividades sem prazo;
- atividades com arquivos anexados;
- atividades contendo apenas instruções;
- atividades com links externos.

Exemplo:

```markdown
# Lista de Exercícios 01

Resolver os exercícios indicados no material.

## Prazo

2026-09-20

## Materiais

- [[Apostila de Cálculo]]
- [[Aula 03 - Derivadas]]

## Entrega

Enviar pelo Google Classroom.
```

O formato deve permitir que informações ausentes simplesmente não sejam preenchidas.

Uma atividade sem prazo continua sendo uma atividade válida.

---

# 12. Aulas

Uma aula deve representar uma unidade de conteúdo acadêmico.

Pode conter:

- título;
- data;
- resumo;
- conteúdo;
- conceitos;
- materiais;
- atividades;
- observações;
- referências.

Exemplo:

```markdown
# Aula 05 - Derivadas

## Conteúdo

Introdução ao conceito de derivada e interpretação geométrica.

## Conceitos

- [[Derivada]]
- [[Limite]]

## Materiais

- [[Apostila de Cálculo]]
- [[Slides - Derivadas]]

## Atividades

- [[Lista de Exercícios 02]]
```

Não deve existir uma obrigação de preencher todas essas seções.

---

# 13. Disciplinas

Uma disciplina deve funcionar como um ponto de organização e referência para seus conteúdos.

Ela pode relacionar:

- aulas;
- conceitos;
- atividades;
- materiais;
- avaliações;
- projetos;
- questões;
- referências externas.

Exemplo:

```markdown
# Cálculo I

## Informações

Professor: Nome do Professor

## Conteúdos

- [[Limite]]
- [[Derivada]]
- [[Integral]]

## Aulas

- [[Aula 01]]
- [[Aula 02]]
- [[Aula 03]]

## Atividades

- [[Lista 01]]
- [[Trabalho 01]]
```

A disciplina não deve conter necessariamente todo o conteúdo acadêmico. Ela funciona principalmente como uma **entrada para navegar pelo conjunto de conteúdos relacionados**.

---

# 14. Origem dos dados

Conteúdos importados devem poder indicar sua origem.

Exemplo:

```yaml
---
tipo: atividade
origem: ava
---
```

Ou:

```yaml
---
tipo: atividade
origem: google-classroom
---
```

Quando relevante, informações da origem podem ser preservadas:

```yaml
---
origem: ava
origem_id: "12345"
origem_url: "..."
---
```

Essas informações devem servir para rastreabilidade e sincronização futura, mas não devem dominar o conteúdo Markdown.

O usuário deve continuar enxergando um documento acadêmico, e não uma representação interna do Moodle ou do Google Classroom.

---

# 15. Informações que não existem na origem

O formato deve permitir enriquecimento manual.

Por exemplo, uma atividade importada do Moodle pode inicialmente conter apenas:

```markdown
# Lista de Exercícios

Resolver os exercícios 1 a 10.
```

Posteriormente, o usuário pode acrescentar:

```markdown
## Observações

Os exercícios 4 e 7 são particularmente importantes.

## Conceitos

- [[Derivada]]
- [[Regra da cadeia]]
```

O conteúdo criado manualmente deve coexistir com o conteúdo importado.

---

# 16. Não duplicar informações desnecessariamente

Quando uma informação já pode ser obtida através de uma referência, não é necessário duplicá-la.

Por exemplo, uma questão pode simplesmente conter:

```markdown
## Conceitos

- [[Derivada]]
- [[Integral]]
```

Em vez de copiar novamente a explicação completa desses conceitos.

Isso cria uma estrutura de conhecimento conectada e reduz inconsistências.

---

# 17. Simplicidade como requisito

O formato deve privilegiar a simplicidade.

Criar um novo conteúdo deve ser possível escrevendo apenas:

```markdown
# Nome do conteúdo

Texto do conteúdo.
```

Um usuário não deve precisar conhecer toda a especificação do StudyMD para criar um arquivo válido.

Os recursos adicionais devem ser incrementais.

Um documento simples é válido.

Um documento mais elaborado pode utilizar:

- frontmatter;
- links;
- tags;
- fórmulas LaTeX;
- imagens;
- anexos;
- referências;
- seções adicionais.

---

# 18. Estrutura aberta

O formato não deve limitar artificialmente o conteúdo.

Um arquivo pode possuir seções que não foram previstas originalmente.

Por exemplo:

```markdown
# Aula 10

## Conteúdo

...

## Exemplos

...

## Observações do professor

...

## Minha interpretação

...

## Dúvidas

...

## Referências

...
```

O StudyMD deve ser capaz de apresentar essas informações sem exigir que cada seção tenha sido previamente cadastrada no sistema.

---

# 19. Compatibilidade com Obsidian

A compatibilidade com Obsidian é um requisito fundamental.

Sempre que possível, devem ser utilizados recursos Markdown e convenções já suportadas pelo Obsidian, especialmente:

- Markdown padrão;
- YAML Frontmatter;
- Wikilinks `[[arquivo]]`;
- links Markdown;
- tags;
- títulos;
- listas;
- tabelas;
- blocos de código;
- fórmulas matemáticas em LaTeX;
- imagens;
- arquivos anexados.

O StudyMD não deve criar uma sintaxe proprietária para substituir funcionalidades que o Markdown ou o Obsidian já oferecem.

---

# 20. Conteúdo humano e conteúdo automatizado

O formato deve tratar igualmente conteúdos criados manualmente e conteúdos obtidos automaticamente.

A origem não deve determinar a estrutura fundamental do documento.

Um arquivo criado pelo usuário:

```markdown
# Derivada

...
```

e um arquivo criado a partir de uma informação encontrada no AVA devem poder coexistir dentro do mesmo sistema de conhecimento.

A automação deve facilitar a criação e atualização dos arquivos, e não tornar os arquivos dependentes da automação.

---

# 21. Evolução do catálogo

O catálogo de conteúdos deve poder crescer sem que seja necessário modificar todos os arquivos existentes.

Novos tipos podem surgir naturalmente.

Por exemplo:

```text
disciplina
aula
atividade
material
questão
resolução
conceito
prova
trabalho
projeto
anotação
referência
```

Essa lista não deve ser considerada fechada.

Se futuramente surgir a necessidade de representar outro tipo de conteúdo, ele deve poder utilizar a mesma filosofia geral do formato.

---

# 22. Regra geral

A filosofia do Markdown do StudyMD pode ser resumida em cinco princípios:

1. **Simples de escrever**
2. **Compatível com Obsidian**
3. **Independente da plataforma de origem**
4. **Conectado através de referências**
5. **Extensível sem quebrar conteúdos existentes**

O objetivo não é criar uma nova linguagem de documentos acadêmicos.

O objetivo é criar uma forma simples de organizar conhecimento acadêmico utilizando Markdown como uma base comum entre **StudyMD, Obsidian, Moodle, Google Classroom e edição manual**.

---

# 23. O que esta etapa não define

Este documento define apenas a filosofia e os princípios de organização dos conteúdos.

Não fazem parte desta etapa:

- arquitetura do software;
- estrutura definitiva de diretórios;
- banco de dados;
- API do Moodle;
- API do Google Classroom;
- mecanismo de sincronização;
- autenticação;
- interface gráfica;
- algoritmo de importação;
- sistema de versionamento;
- implementação do parser Markdown;
- modelo interno de dados da aplicação.

Esses assuntos devem ser definidos posteriormente, utilizando esta filosofia como referência.

---

# 24. Critério de sucesso

Um formato de arquivo pode ser considerado adequado se conseguir atender simultaneamente às seguintes condições:

> Um usuário consegue criar o arquivo manualmente, o Obsidian consegue utilizá-lo, o StudyMD consegue visualizá-lo, uma plataforma externa consegue fornecer dados para preenchê-lo e outros conteúdos conseguem referenciá-lo sem depender de uma estrutura proprietária.

Esse deve ser o princípio orientador das decisões futuras sobre o formato dos arquivos.