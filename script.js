body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.quiz-container {
    background: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    text-align: center;
    width: 450px;
}

h1 {
    margin-bottom: 20px;
}

#question {
    font-size: 20px;
    margin-bottom: 20px;
}

#options {
    list-style: none;
    padding: 0;
}

#options li {
    margin: 10px 0;
}

.option {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border: 2px solid #007bff;
    border-radius: 5px;
    background: white;
    transition: all 0.2s;
}

.option:hover {
    background: #007bff;
    color: white;
}

#feedback {
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
}

.hidden {
    display: none;
}

#next, #restart {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #28a745;
    color: white;
    transition: all 0.2s;
}

#next:hover, #restart:hover {
    background: #218838;
}

.correct {
    color: green;
}

.wrong {
    color: red;
}
