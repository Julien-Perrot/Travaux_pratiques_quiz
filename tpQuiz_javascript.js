$(function() {
    const questions = [{
        'id' : 1,
        'question': 'En quelle année est né Ludwig Van Beethoven ?',
        'reponse1': 1670,
        'reponse2': 1770,
        'reponse3': 1870,
        'bonnereponse': 1770
    },
    {
        'id' : 2,
        'question': 'En quelle année est né Jean-Sebastien Bach ?',
        'reponse1': 1685,
        'reponse2': 1715,
        'reponse3': 1745,
        'bonnereponse': 1685
    },
    {
        'id' : 3,
        'question': 'En quelle année est né Wolfgang Amadeus Mozart ?',
        'reponse1': 1731,
        'reponse2': 1761,
        'reponse3': 1791,
        'bonnereponse': 1791
    }];

    //Pointeur pour la question actuelle
    var i = 0; 
    //Pour avoir le nombre de questions
    var nbrQuestions = questions.length;
    //Permet de retenir le score actuel de l'utilisateur
    var score = 0;
    //Temps pour répondre aux questions en secondes
    var decompte = 10;

    // Debut question 1
    $('.commencer').on('click', function() {
        $(this).css('display', 'none');
        $('.quizz').css('display', 'block');
        afficherQuestion(0);
    });

    function afficherQuestion(idQuestion) {
        $('.question').text(questions[idQuestion].question);
        $('.reponse1').text(questions[idQuestion].reponse1);
        $('.reponse2').text(questions[idQuestion].reponse2);
        $('.reponse3').text(questions[idQuestion].reponse3);
    }

    // Message de la bonne ou de la mauvaise réponse :

    $('.reponse').on('click',function() {
        let reponseChoisie = parseInt($(this).html());
        if (reponseChoisie === questions[i].bonnereponse) {
            score ++;
            alert('Bravo, bonne réponse ;)');
            suivant();
        }
        else {
            alert('Oups, mauvaise réponse :(');
            suivant();
        }
    });
    
    $('.suivant').on('click', function() {
        suivant();
        console.log(i);
    });

    function suivant() {
        i ++;
        if (i >= nbrQuestions) {
            $('.quizz').css('display' , 'none');
            $('.score').css('display' , 'block');
            $('.score').text(`vous avez ${score} / ${nbrQuestions}`);
            changerCouleur(score);
        }
        afficherQuestion(i);
    }

    function changerCouleur(note) {
        if (note === 0) {
            $('.score').css('backgroundColor', 'red');
        }
        else if (note === 1) {
            $('.score').css('backgroundColor', 'orange');
        }
        else if (note === 2) {
            $('.score').css('backgroundColor', 'yellow');
        }
        else {
            $('.score').css('backgroundColor', 'green');
        }
    }
});