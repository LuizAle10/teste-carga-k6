O teste de performance é o processo de avaliar o desempenho de recursos essenciais a uma infraestrutura de TI. Profissionais dessa área são muito valorizados.

Velocidade, capacidade, tempo de resposta e a estabilidade de servidores, rede, softwares ou dispositivos sob uma intensa carga de trabalho são exemplos de como o teste de performance pode ajudar na avaliação da arquitetura tecnológica de uma empresa.

Os departamentos de TI das empresas devem utilizar os testes de performance para verificar o desempenho da estrutura de armazenamento da organização, verificando, através de um processo estruturado de qualidade e testes, de que forma a arquitetura de dados responde à grande carga de dados em momentos considerados críticos durante as operações de negócio.



# Tipos de testes

Cada tipo de teste é projetado para fornecer informações diferentes sobre seu sistema.

A função do Smoke Test é verificar se o seu sistema pode lidar com carga mínima, sem problemas.

O Load Test está principalmente preocupado em avaliar o desempenho do seu sistema em termos de usuários ou solicitações simultâneas por segundo.

Teste de estresse e teste de pico estão preocupados em avaliar os limites do seu sistema e estabilidade sob condições extremas.

Teste de imersão informa sobre a confiabilidade e o desempenho do seu sistema por um longo período de tempo.

O importante a entender é que cada teste pode ser realizado com o mesmo script de teste. Você pode escrever um script e realizar todos os testes acima com ele. A única coisa que muda é a configuração de teste, a lógica permanece a mesma.

Diferentes tipos de teste ensinarão coisas diferentes sobre seu sistema e fornecerão a percepção necessária para entender ou otimizar o desempenho.


# Tipos de Testes 
## Teste de Fumaça => Smoke Test
- Executar primeiro para depois ir para os testes mais especificos, se o sistema der erro aqui não faz sentido avançar
- Geralmente 1 ou 2 usuários simultâneos 

- Você deseja executar um teste de fumaça para:
### 1- Verifique se seu script de teste não contém erros.
### 2- Verifique se o seu sistema não gera nenhum erro quando está sob carga mínima.

- Uma vez que seu teste de fumaça mostra 0 erros, pode ir para a próxima etapa e executar um teste de carga para avaliar o desempenho do seu sistema.

## Teste de Carga/Performance => Load Test
- Está testando com 10, 20, 30 usuários simultaneos(requisições por segundo).

- O Load Testing se preocupa principalmente com a avaliação do desempenho atual do seu sistema em termos de usuários ou solicitações simultâneas por segundo.

- É um tipo de teste de desempenho usado para determinar o comportamento de um sistema em condições normais e de pico.

- O Load Testing é usado para garantir que o aplicativo tenha um desempenho satisfatório quando muitos usuários o acessam ao mesmo tempo.

- Você deve executar um teste de carga para:
### 1- Avalie o desempenho atual do seu sistema sob carga típica e de pico.
### 2- Certifique-se de continuar atendendo aos padrões de desempenho ao fazer alterações em seu sistema (código e infraestrutura).

- Digamos que você esteja vendo cerca de 60 usuários simultâneos em média e 100 usuários durante o horário de pico de operação. Provavelmente é importante para você atingir as metas de desempenho tanto no horário normal quanto no horário de pico, portanto, é recomendável configurar o teste de carga com a carga alta em mente - 100 usuários neste caso.

- Recomendamos que você sempre inclua um estágio de aceleração em todos os seus testes de carga porque:

### Ele permite que seu sistema aqueça ou dimensione automaticamente para lidar com o tráfego.
### Permite comparar o tempo de resposta entre os estágios de carga baixa e carga nominal.
### Se você executar um teste de carga usando nosso serviço de nuvem SaaS, ele permitirá que os alertas de desempenho automatizados entendam melhor o comportamento normal do seu sistema.


- Cenário de teste de carga - simulando um dia normal

### Você também pode dar um passo adiante e configurar o teste de carga para se assemelhar mais às suas condições normais e de pico. Nesse caso, você pode configurar o teste de carga para permanecer em 60 usuários durante a maior parte do dia e aumentar para 100 usuários durante os horários de pico de operação e, em seguida, voltar à carga normal. Certifique-se de não ultrapassar o número normal de VUs - isso não é um teste de carga, mas um teste de estresse .


- Sempre que você está testando a carga, você tem algumas expectativas em mente.

### As expectativas típicas são:
### 99% das solicitações devem terminar em 5 segundos.
### 95% das solicitações devem terminar em 1 segundo.
### 99% dos usuários devem ser capazes de fazer login com sucesso na primeira tentativa.

### Os limites de desempenho são uma maneira de descrever suas expectativas de maneira formal e avaliar automaticamente essas expectativas em cada execução de teste. Depois de configurar os limites, você verá uma métrica Aprovado/Reprovado para cada limite e saberá imediatamente se seu sistema atende às suas expectativas sem analisar os resultados em detalhes.

- Comece pequeno
### Se esta for sua primeira vez executando testes de carga, comece pequeno. Seu aplicativo e infraestrutura podem não ser tão sólidos quanto você pensa. Milhares de usuários executaram testes de carga que travaram rapidamente seus aplicativos (ou ambientes de teste).

- Se seu sistema travar em um teste de carga, isso significa que seu teste de carga se transformou em um teste de estresse



## Teste de Estresse/Pico => Stress Test => Spike testing
- Testar limites/estabilidade até a onde o sistema vai aguentar em situações extremas
- Testar os picos de acesso, picos altos de acesso de grande quantidade de dados

- Teste de estresse é um tipo de teste de carga usado para determinar os limites do sistema. O objetivo deste teste é verificar a estabilidade e confiabilidade do sistema sob condições extremas .

- Para executar um teste de estresse adequado, você precisa de uma ferramenta para empurrar o sistema acima de suas operações normais, até seus limites e além do ponto de ruptura.

- Normalmente, você deseja fazer um teste de estresse em uma API ou site para determinar:

### 1- Como seu sistema se comportará sob condições extremas.
### 2- Qual é a capacidade máxima do seu sistema em termos de usuários ou taxa de transferência.
### 3- O ponto de ruptura do seu sistema e seu modo de falha.
### 4- Se o seu sistema se recuperar sem intervenção manual após o término do teste de estresse.

- Ao fazer o teste de estresse, você configura o teste para incluir mais usuários simultâneos ou gerar uma taxa de transferência maior do que:
### Seu aplicativo normalmente vê.
### Você acha que seu aplicativo pode lidar.

- Observe que um teste de estresse não sobrecarrega o sistema imediatamente — é um teste de pico.

- Um teste de estresse deve ser configurado em várias etapas graduais, cada etapa aumentando a carga simultânea do sistema.

- Um exemplo clássico de necessidade de testes de estresse é "Black Friday" ou "Cyber ​​Monday" - dois dias por ano que geram várias vezes o tráfego normal para muitos sites.

- Não importa quantas etapas você inclua, apenas lembre-se de que esse tipo de teste é para descobrir o que acontece ao ultrapassar os limites de desempenho do seu sistema - portanto, não se preocupe em ser muito agressivo.

- Com isso dito, você provavelmente não deseja executar este teste em seu ambiente de produção. Recomendamos executar um teste de estresse em um ambiente UAT ou de teste.

- Teste de pico
### O teste de pico é um tipo de teste de estresse que sobrecarrega imediatamente o sistema com um aumento extremo de carga.

- Você deseja executar um teste de pico para determinar:
### 1- Como seu sistema funcionará sob um aumento repentino de tráfego
### 2- Se o seu sistema irá se recuperar assim que o tráfego diminuir.

- Uma necessidade clássica de um teste de pico é se você comprou publicidade em um grande evento de televisão, como o Super Bowl ou uma competição de canto popular. Você espera que um grande número de pessoas veja seu anúncio e visite imediatamente seu site, o que pode terminar com resultados desastrosos se você não tiver testado esse cenário e feito otimizações de desempenho com antecedência.


- O sucesso ou fracasso de um teste de pico depende de suas expectativas. Os sistemas geralmente reagem de 4 maneiras diferentes:

### 1- Excelente: o desempenho do sistema não é prejudicado durante o pico de tráfego. O tempo de resposta é semelhante durante baixo tráfego e alto tráfego.
### 2- Bom: O tempo de resposta é mais lento, mas o sistema não produz erros. Todos os pedidos são tratados.
### 3- Ruim: O sistema produz erros durante o pico de tráfego, mas volta ao normal depois que o tráfego diminui.
### 4- Ruim: o sistema trava e não se recupera depois que o tráfego diminui.

- Quando seu sistema estiver à prova de estresse, convém executar um teste de imersão para ver se outros problemas de confiabilidade não surgem por um longo período.


## Teste de Imersão => Soak Test
- Sobre a confiabilidade e performance do sistema, sobre um período extenso de tempo com algum teste de performance ex: comportamneto do sistema com uma carga de 100 usuários simultâneos, com um período de 3 dias?
- Teste de resistência

- Enquanto o teste de carga está preocupado principalmente com a avaliação de desempenho e o teste de estresse está preocupado com a estabilidade do sistema sob condições extremas, o teste de imersão está preocupado com a confiabilidade por um longo período de tempo.

- Um teste de absorção revela problemas de desempenho e confiabilidade decorrentes de um sistema sob pressão por um período prolongado.

- Os problemas de confiabilidade geralmente estão relacionados a bugs, vazamentos de memória, cotas de armazenamento insuficientes, configuração incorreta ou falhas de infraestrutura. Os problemas de desempenho geralmente estão relacionados ao ajuste incorreto do banco de dados, vazamentos de memória, vazamentos de recursos ou uma grande quantidade de dados.

- Com um teste de imersão, você pode simular dias de tráfego em apenas algumas horas.

- Você normalmente executa este teste para:

### Verifique se o seu sistema não sofre de bugs ou vazamentos de memória, que resultam em travamento ou reinicialização após várias horas de operação.
### Verifique se as reinicializações esperadas do aplicativo não perdem solicitações.
### Encontre bugs relacionados a condições de corrida que aparecem esporadicamente.
### Certifique-se de que seu banco de dados não esgote o espaço de armazenamento alocado e pare.
### Certifique-se de que seus logs não esgotem o armazenamento em disco alocado.
### Certifique-se de que os serviços externos dos quais você depende não parem de funcionar após a execução de uma determinada quantidade de solicitações.


- Você pode descobrir que o desempenho do seu aplicativo foi muito melhor no início do teste em comparação ao final. Isso geralmente acontece se seu banco de dados não estiver ajustado corretamente. Adicionar índices ou atribuir memória adicional pode ajudar.

- Teste de imersão em k6

### Recomendamos que você configure seu teste de imersão em cerca de 80% da capacidade do seu sistema. Se o seu sistema pode lidar com um máximo de 500 usuários simultâneos, você deve configurar seu teste de absorção para 400 VUs.

### A duração de um teste de imersão deve ser medida em horas. Recomendamos que você comece com um teste de 1 hora e, uma vez bem-sucedido, estenda-o para várias horas. Alguns erros estão relacionados ao tempo e não ao número total de solicitações executadas.

- AVISO!
### Faça uma estimativa de custo antes de iniciar um teste de imersão
### Testes de imersão podem simular dias ou semanas de tráfego normal em poucas horas. Isso significa que os custos de infraestrutura e fornecedores podem ser significativos. Se você estiver testando um site, considere excluir sua CDN do teste.Se o seu sistema usa serviços externos, você pode querer calcular o custo antes de iniciar o teste.


- Quando fazer o teste de imersão?

### O teste de imersão ajuda a descobrir bugs e problemas de confiabilidade que surgem por um longo período. Muitos sistemas complexos possuem bugs dessa natureza.

### Você deve executar testes de absorção depois que seus testes de carga padrão forem bem-sucedidos e seu sistema for considerado estável ao executar um teste de estresse.

### O teste de imersão é o último grande passo no caminho para a construção de sistemas confiáveis.
