window.onload = function() {
    //  Get the dataset identifier from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedSet = urlParams.get('set'); // Get the 'set' parameter from URL


    const datasets = {
        arith: [
        {
            question: "In how many different ways can the letters of the word 'MATHEMATICS' be arranged so that the vowels always come together?",
            options: ["4989600", "10080", "120960", "None of these"],
            correctAnswer: 2,
            solution: "In the word 'MATHEMATICS', we treat the vowels AEAI as one letter. Thus, we have MTHMTCS (AEAI). Now, we have to arrange 8 letters, out of which M occurs twice, T occurs twice and the rest are different. Number of ways of arranging these letters is 8! = 10080/(2!)(2!). AEAI has 4 letters with A occurring 2 times. So, the total number of arrangements is 10080 * 12 = 120960."
        },
        {
            question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
            options: ["15", "16", "18", "25"],
            correctAnswer: 1,
            solution: "Let C.P. of each article be Re. 1 <br> C.P. of x articles = Rs. x. <br> S.P. of x articles = Rs. 20. <br> Profit = Rs. (20 - x).<br>((20 - x)/x) * 100 = 25<br>x 2000 - 100x = 25x <br>125x = 2000 <br>x = 16."
        },
        {
            question: "Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:",
            options: ["9", "11", "13", "15"],
            correctAnswer: 3,
            solution: "Let the three integers be x, x + 2 and x + 4.<br>Then, 3x = 2(x + 4) + 3<br>x = 11.<br> Third integer = x + 4 = 15."
        },
        {
            question: "A man's speed with the current is 15 km/hr and the speed of the current is 2.5 km/hr. The man's speed against the current is:",
            options: ["8.5km/hr", "9km/hr", "10km/hr", "12.5km/hr"],
            correctAnswer: 2,
            solution: "Man's rate in still water = (15 - 2.5) km/hr = 12.5 km/hr.<br>Man's rate against the current = (12.5 - 2.5) km/hr = 10 km/hr."
        },
        {
            question: "A man has Rs.480 in the denominations of one-rupee notes, five-rupee notes and ten-rupee notes. The number of notes of each denomination is equal. What is the total number of notes that he has ?",
            options: ["45", "60", "75", "90"],
            correctAnswer: 3,
            solution: "Let number of notes of each denomination be x.<br>Then x + 5x + 10x = 480<br> 16x = 480<br> x = 30.<br>Hence, total number of notes = 3x = 90."
        },
    ],

    logi: [
        {
            question: "Look at this series: 7, 10, 8, 11, 9, 12, ... <br>What number should come next?",
            options: ["7", "10", "12", "13"],
            correctAnswer: 1,
            solution: "This is a simple alternating addition and subtraction series. In the first pattern, 3 is added; in the second, 2 is subtracted."
        },
        {
            question: "Erin is twelve years old. For three years, she has been asking her parents for a dog. Her parents have told her that they believe a dog would not be happy in an apartment, but they have given her permission to have a bird. Erin has not yet decided what kind of bird she would like to have.",
            options: ["Erin's parents like birds better than they like dogs.", "Erin does not like birds.", "Erin and her parents live in an apartment.", "Erin and her parents would like to move."],
            correctAnswer: 2,
            solution: "Since Erin's parents think a dog would not be happy in an apartment, we can reasonably conclude that the family lives in an apartment. We do not know if Erin's parents dislike dogs (choice a) or if Erin dislikes birds (choice b).There is no support for choice d."
        },
        {
            question: "Play is to actor as concert is to",
            options: ["Symphony", "Musician", "Piano", "Percussion"],
            correctAnswer: 1,
            solution: "An actor performs in a play. A musician performs at a concert. Choices a, c, and d are incorrect because none is people who perform."
        },
        {
            question: "Which word does NOT belong with the others?",
            options: ["Tyre", "Steering wheel", "Engine", "Car"],
            correctAnswer: 3,
            solution: "Tyre, steering wheel, and engine are all parts of a car."
        },
        {
            question: "Statements: All bags are cakes. All lamps are cakes.<br>Conclusions:<br>1. Some lamps are bags.<br>2. No lamp is bag.",
            options: ["Only conclusion 1 follows", "Only conclusion 2 follows", "Either 1 or 2 follows", "Neither 1 nor 2 follows"],
            correctAnswer: 2,
            solution: "Since the middle term 'cakes' is not distributed even once in the premises, no definite conclusion follows. However, I and II involve only the extreme terms and form a complementary pair. So, either I or II follows."
        },
    ],


    nonver: [
        {
            question: "Select a figure from amongst the answer figures which will continue the same series as established by the five Problem Figures.",
            options: ["1", "2", "3", "4"],
            correctAnswer: 3,
            solution: "The 'T' shaped large element rotates 90 degrees in each step. The two small symbols interchange positions and the symbol that reaches the upper position gets replaced by a new one.",
            image: "./pics/qimages/nv1.png"
        },
        {
            question: "Choose a figure which would most closely resemble the unfolded form of Figure (Z).",
            options: ["1", "2", "3", "4"],
            correctAnswer: 2,
            solution: "Self explainable answer acccording to the figure.",
            image: "./pics/qimages/nv2.png"
        },
        {
            question: "Choose the alternative which is closely resembles the water-image of the given combination.",
            options: ["1", "2", "3", "4"],
            correctAnswer: 3,
            solution: "Self explainable answer acccording to the figure.",
            image: "./pics/qimages/nv3.png"
        },
        {
            question: "Select the figure which satisfies the same conditions of placement of the dots as in Figure-X.",
            options: ["1", "2", "3", "4"],
            correctAnswer: 3,
            solution: "Self explainable answer acccording to the figure.",
            image: "./pics/qimages/nv4.png"
        },
        {
            question: "Select a suitable figure from the four alternatives that would complete the figure matrix.",
            options: ["1", "2", "3", "4"],
            correctAnswer: 3,
            solution: "The third figure in each row comprises of parts which are not common to the first two figures.",
            image: "./pics/qimages/nv5.png"
        },
    ],

    gmat: [
        {
            question: "Here are some words translated from an artificial language.<br>gorblflur means fan belt<br>pixngorbl means ceiling fan<br>arthtusl means tile roof<br>Which word could mean 'ceiling tile'?",
            options: ["gorbltusl", "flurgorbl", "arthflur", "pixnarth"],
            correctAnswer: 3,
            solution: "Gorbl means fan; flur means belt; pixn means ceiling; arth means tile; and tusl means roof. Therefore, pixnarth is the correct choice."
        },
        {
            question: "Tanya is older than Eric.<br>Cliff is older than Tanya.<br>Eric is older than Cliff.<br>If the first two statements are true, the third statement is",
            options: ["True", "False", "Uncertain", "None of these"],
            correctAnswer: 1,
            solution: "Because the first two statements are true, Eric is the youngest of the three, so the third statement must be false."
        },
        {
            question: "FAG, GAF, HAI, IAH, ____",
            options: ["JAK", "HAL", "HAK", "JAI"],
            correctAnswer: 0,
            solution: "The middle letters are static, so concentrate on the first and third letters. The series involves an alphabetical order with a reversal of the letters. The first letters are in alphabetical order: F, G, H, I , J. The second and fourth segments are reversals of the first and third segments. The missing segment begins with a new letter."
        },
        {
            question: "Choose the correct option",
            options: ["1", "2", "3", "4"],
            correctAnswer: 1,
            solution: "Notice that in each segment, the figures are all the same shape, but the one in the middle is larger than the two on either side. Also, notice that one of the figures is shaded and that this shading alternates first right and then left. To continue this pattern in the third segment, you will look for a square. Choice b is correct because this choice will put the large square between the two smaller squares, with the shading on the right.",
            image: "./pics/qimages/nv13.png"
        },
        {
            question: "Look at this series: 664, 332, 340, 170, ____, 89, ... What number should fill the blank?",
            options: ["85", "97", "109", "178"],
            correctAnswer: 3,
            solution: "This is an alternating division and addition series: First, divide by 2, and then add 8."
        },
    ],

    verb: [
        {
            question: "Veena who is the sister-in-law of Ashok, is the daughter-in-law of Kalyani. Dheeraj is the father of Sudeep who is the only brother of Ashok. How Kalyani is related to Ashok?",
            options: ["Mother-in-law", "Aunt", "Wife", "None of these"],
            correctAnswer: 3,
            solution: "Ashok is the only brother of Sudeep and Veena is the sister-in-law of Ashok. Hence Veena is the wife of Sudeep. Kalyani is the mother-in-law of Veena. Kalyani is the mother of Ashok."
        },
        {
            question: "Choose the word which is different from the rest.",
            options: ["Sparrow", "Swan", "Parrot", "Koel"],
            correctAnswer: 1,
            solution: "Swan is the only water bird in the group."
        },
        {
            question: "Which one will replace the question mark ?",
            options: ["18", "12", "9", "6"],
            correctAnswer: 2,
            solution: "(12 + 18 + 30)/10 = 6 <br>(16 + 24 + 40)/10 = 8<br>Similarly, (45 + 18 + 27)/10 = 9.",
            image:"./pics/qimages/nv6.png"
        },
        {
            question: "The total of the ages of Amar, Akbar and Anthony is 80 years. What was the total of their ages three years ago ?",
            options: ["71 years", "72 years", "74 years", "77 years"],
            correctAnswer: 0,
            solution: "Required sum = (80 - 3 x 3) years = (80 - 9) years = 71 years."
        },
        {
            question: "Which symbol will be on the face opposite to the face with symbol * ?",
            options: ["@", "$", "8", "+"],
            correctAnswer: 2,
            solution: "The symbols of the adjacent faces to the face with symbol * are @, -, + and $. Hence the required symbol is 8.",
            image: "./pics/qimages/nv7.png"
        },
    ],


    puz: [
        {
            question: "Which letter replaces the question mark?",
            options: ["N", "M", "A", "C"],
            correctAnswer: 1,
            solution: "Working in rows, add together the numerical values of the left and right hand letters to give the numerical value of the central letter.",
            image: "./pics/qimages/nv8.png"
        },
        {
            question: "Which letter replaces the question mark?",
            options: ["N", "M", "K", "C"],
            correctAnswer: 2,
            solution: "The numerical values of the letters in opposite segments of the circle always add up to 17.",
            image: "./pics/qimages/nv9.png"
        },
        {
            question: "Which letter replaces the question mark?",
            options: ["3", "7", "5", "9"],
            correctAnswer: 3,
            solution: "The number at the centre of each triangle equals the sum of the lower two numbers minus the top number.",
            image: "./pics/qimages/nv10.png"
        },
        {
            question: "Which letter replaces the question mark?",
            options: ["13", "16", "25", "32"],
            correctAnswer: 1,
            solution: "Starting bottom left and moving clockwise around the triangle, numbers follow the sequence of Square Numbers.",
            image: "./pics/qimages/nv11.png"
        },
        {
            question: "Which letter replaces the question mark?",
            options: ["40", "41", "42", "43"],
            correctAnswer: 0,
            solution: "Moving from left to right, numbers increase by 2,3,4 and 5.",
            image: "./pics/qimages/nv12.png"
        },
        
    ],
    
        
        // Add more questions here
};


    // Check if the selected set exists
    const questions = datasets[selectedSet] || []; // Default to empty if set not found



    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const solutionContainer = document.getElementById('solution-container');
    const solutionText = document.getElementById('solution-text');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const restartButton = document.getElementById('restart-quiz');

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    const showQuestion = (index) => {
        const currentQuestion = questions[index];
        questionText.innerHTML = currentQuestion.question;

        // If there's an image in the question, display it
    if (currentQuestion.image) {
        questionText.innerHTML += `<br><img src="${currentQuestion.image}" alt="Question Image" style="max-width: 270px; height: auto; margin-top: 20px;">`;
    }
        
        optionsContainer.innerHTML = ''; // Clear previous options
        solutionContainer.style.display = 'none';
        nextButton.style.display = 'none'; 
        optionsContainer.classList.remove('hidden'); // Show options

        currentQuestion.options.forEach((option, i) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => handleOptionClick(i, currentQuestion.correctAnswer, currentQuestion.solution));
            optionsContainer.appendChild(button);
        });
    };

    const handleOptionClick = (chosenIndex, correctIndex, solution) => {
        const buttons = document.querySelectorAll('.option');
        buttons.forEach((button, i) => {
            if (i === correctIndex) {
                button.classList.add('correct'); // Highlight correct answer
            } else if (i === chosenIndex) {
                button.classList.add('wrong'); // Highlight wrong answer if chosen
            }
            button.disabled = true; // Disable all buttons after answer is selected
        });

        // Delay of 3 seconds before showing the solution
        setTimeout(() => {
            displaySolution(solution);
            hideOptions();
        }, 1500);

        // Check if the answer is correct
    if (chosenIndex === correctIndex) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    };

    const hideOptions = () => {
        const optionButtons = document.querySelectorAll('.option');
        optionButtons.forEach((button) => {
            button.classList.add('hidden'); // Add the hidden class to hide buttons
        });
    };

    

    const displaySolution = (solution) => {
        solutionText.innerHTML = `<span style="font-family: 'Adlam Display', sans-serif; font-size: 40px; color: white;text-align: left; display: block;"><strong>Solution:<br></strong></span> ${solution}`;
        solutionContainer.style.display = 'block'; // Show solution box
        optionsContainer.classList.add('hidden'); // Completely hide options (display: none)
        nextButton.style.display = 'inline-block'; // Show the Next button

        nextButton.onclick = () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        };
    };

    const showResult = () => {
        questionContainer.style.display = 'none'; // Hide questions
        solutionContainer.style.display = 'none'; // Hide the solution from the previous question
        resultContainer.style.display = 'block';  // Show result
        // Update the result display
    document.getElementById('correct-answers').innerHTML = correctAnswers;
    document.getElementById('wrong-answers').innerHTML = wrongAnswers;
    };

    // Initialize the quiz
    showQuestion(currentQuestionIndex);
};
