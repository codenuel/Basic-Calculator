const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value)
}


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDescription);
}


function calculateResult(calculationType){
    if (
        calculationType === 'ADD' || 
        calculationType === 'SUBTRACT' ||
        calculationType === 'MULTIPLY' ||
        calculationType === 'DIVIDE'
    ){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType == 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+'
    }else if (calculationType == 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-'
    }else if (calculationType == 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/'
    }else if(calculationType == 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*'
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber );
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}
}


function add() {
    calculateResult('ADD')
}

function subtract(){
    calculateResult('SUBTRACT')
}

function divide(){
    calculateResult('DIVIDE')
}

function multiply(){
    calculateResult('MULTIPLY')
}


addBtn.addEventListener('click', add);
divideBtn.addEventListener('click', divide);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
// answerBtn.addEventListener('click', equalTo)

