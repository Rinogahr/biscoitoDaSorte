const Frases = [
    {   id: 1,
        name: "A vida trará coisas boas se tiver paciência."
    },
    {   id: 2,
        name: "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."
    },
    {   id: 3,
        name: "Não compense na ira o que lhe falta na razão."
    },
    {   id: 4,
        name: "Defeitos e virtudes são apenas dois lados da mesma moeda."
    },
    {   id: 5,
        name: "A maior de todas as torres começa no solo."
    },
    {   id: 6,
        name: "Não há que ser forte. Há que ser flexível."
    },
    {   id: 7,
        name: "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"
    },
    {   id: 8,
        name: "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
    },
    {   id: 9,
        name: "A juventude não é uma época da vida, é um estado de espírito."
    },
    {   id: 10,
        name: "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
    },
    {   id: 11,
        name: "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida."
    },
    {   id: 12,
        name: "Siga os bons e aprenda com eles."
    },
    {   id: 13,
        name: "Não importa o tamanho da montanha, ela não pode tapar o sol."
    },
    {   id: 14,
        name: "O bom-senso vale mais do que muito conhecimento."
    },
    {   id: 15,
        name: "Quem quer colher rosas tem de estar preparado para suportar os espinhos."
    },
    {   id: 16,
        name: "São os nossos amigos que nos ensinam as mais valiosas lições."
    },
    {   id: 17,
        name: "Aquele que se importa com o sentimento dos outros, não é um tolo."
    },
    {   id: 18,
        name: "A adversidade é um espelho que reflete o verdadeiro eu."
    },
    {   id: 19,
        name: "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
    },
    {   id: 20,
        name: "Uma bela flor é incompleta sem as suas folhas."
    },
    {   id: 21,
        name: "Sem o fogo do entusiasmo, não há o calor da vitória."
    },
    {   id: 22,
        name: "O riso é a menor distância entre duas pessoas."
    },
    {   id: 23,
        name: "Os defeitos são mais fortes quando o amor é fraco."
    },
    {   id: 24,
        name: "Amizade e Amor são coisas que se unem num piscar de olhos."
    },
    {   id: 25,
        name: "Surpreender e ser surpreendido é o segredo do amor."
    },
    {   id: 26,
        name: "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã."
    },
    {   id: 27,
        name: "A paciência na adversidade é sinal de um coração sensível."
    },
    {   id: 28,
        name: "A sorte favorece a mente bem preparada."
    },
    {   id: 29,
        name: "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração."
    },
    {   id: 30,
        name: "Quem olha para fora sonha; quem olha para dentro acorda."
    },
    {   id: 31,
        name: "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram."
    },
    {   id: 32,
        name: "Espere pelo mais sábio dos conselhos: o tempo."
    },
    {   id: 33,
        name: "Todas as coisas são difíceis antes de se tornarem fáceis."
    },
    {   id: 34,
        name: "Se você se sente só é porque construiu muros ao invés de pontes."
    },
    {   id: 35,
        name: "Vencer é 90 por cento suor e 10 por cento de engenho."
    },
    {   id: 36,
        name: "O amor está sempre mais próximo do que você imagina."
    },
    {   id: 37,
        name: "Você é do tamanho do seu sonho."
    },
    {   id: 38,
        name: "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado."
    },
    {   id: 39,
        name: "O conhecimento é a única virtude e a ignorância é o único vício."
    },
    {   id: 40,
        name: "O nosso primeiro e último amor é… o amor-próprio."
    },
    {   id: 41,
        name: "Deixe de lado as preocupações e seja feliz."
    },
    {   id: 42,
        name: "A vontade das pessoas é a melhor das leis."
    },
    {   id: 43,
        name: "A maior barreira para o sucesso é o medo do fracasso."
    },
    {   id: 44,
        name: "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade."
    },
    {   id: 45,
        name: "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho."
    },
    {   id: 46,
        name: "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência."
    },
    {   id: 47,
        name: "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo."
    },
    {   id: 48,
        name: "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo."
    },
    {   id: 49,
        name: "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente."
    },
    {   id: 50,
        name: "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas."
    },
    {   id: 51,
        name: "Motivação não é sinónimo de transformação, mas um passo em sua direção."
    },
    {   id: 52,
        name: "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade."
    },
    {   id: 53,
        name: "A inspiração vem dos outros. A motivação vem de dentro de nós."
    },
    {   id: 54,
        name: "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais."
    },
    {   id: 55,
        name: "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!"
    },
    {   id: 56,
        name: "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera.."
    },
    {   id: 57,
        name: "Acredite em milagres, mas não dependa deles."
    },
    {   id: 58,
        name: "Você sempre será a sua melhor companhia!"
    },
    {   id: 59,
        name: "Realize o óbvio, pense no improvável e conquiste o impossível."
    },
    {   id: 60,
        name: "A vida trará coisas boas se tiver paciência."
    },
]

export default Frases;