

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button ) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML  == '=') {
            try {
                // Evaluate the expression and update the display
                string = eval(string);
                document.querySelector('.display').value = string;
            } catch (error) {
                // Handle any errors that occur during evaluation
                document.querySelector('.display').value = "Error"; // Display an error message
                string = ''; // Reset the string for the next input
            }
        }
        else if (e.target.innerHTML == 'AC'){
        string = '';
        document.querySelector('.display').value = string;
        }
        else if (e.target.innerHTML== 'DEL'){
            string = string.slice(0, -1);
            document.querySelector('.display').value = string;
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('.display').value = string;
    }
    
});
    });