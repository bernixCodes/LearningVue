/****using vanilla javaScript ****/

// const inputElement = document.querySelector('input');
// const button = document.querySelector('button');
// const listElement = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputElement.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = enteredValue;
//     listElement.appendChild(listItem)
//     inputElement.value = ''
// }


// button.addEventListener('click', addGoal)


/****using vue ****/

const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            goals: []
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = ''
        }
    },
})

app.mount('#app')