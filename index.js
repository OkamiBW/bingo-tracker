
let counters = [0, 0, 0, 0, 0, 0, 0];
let counterIds = ['displayCount1', 'displayCount2', 'displayCount3', 'displayCount4', 'displayCount5', 'displayCount6', 'displayCount7'];
let labelIds = ['displayLabel1', 'displayLabel2', 'displayLabel3', 'displayCount4', 'displayCount5', 'displayCount6', 'displayCount7'];
let currentCounter = 0;
updateCounts(counters, counterIds, labelIds, currentCounter);

// When a keystroke is pushed eventually

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp': {
            if (currentCounter !== 0) {
                currentCounter--;
            }
            break;
        }
        case 'ArrowDown': {
            if (currentCounter !== counters.length - 1) {
                currentCounter++;
            }
            break;
        }
        case 'ArrowRight': {
            counters[currentCounter] = increment(counters[currentCounter]);
            break;
        }
        case 'ArrowLeft': {
            counters[currentCounter] = decrement(counters[currentCounter]);
            break;
        }
        case 'r': {
            counters[currentCounter] = reset(counters[currentCounter]);
            break;
        }
    }

    updateCounts(counters, counterIds, labelIds, currentCounter);
});

function increment(count) {
    count++;
    return count;
}

function decrement(count) {
    if (count !== 0) {
    count--;
    }
    return count;
}

function reset(count) {
    count = 0;
    return count;
}

function updateCounts(counterValues, counterNames, labelNames, selectedCounter) {
// Update the display to show the current value of the Count
    for (let i = 0; i < counterValues.length; i++) {
        const displayCount = document.getElementById(counterNames[i]);
        displayCount.innerText = counterValues[i].toString();
    
        const displayLabel = document.getElementById(labelNames[i]);

    // Highlight the selected counter

        if (i === selectedCounter) {
            displayLabel.classList.add('charcoal');
            displayCount.classList.add('lightBlue');
        } else {
            displayLabel.classList.remove('charcoal');
            displayCount.classList.remove('lightBlue');
        }
    }
}
