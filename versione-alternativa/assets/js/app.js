const app = new Vue ({
    el: '#app',
    data:{
        newTask: '',
        tasks: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Fare il bucato',
                done: true
            }
        ]
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            if (this.newTask.length !== 0) {
                const createdTask = {
                    text: this.newTask,
                    done: false
                }
                this.tasks.unshift(createdTask);
                this.newTask = '';
            }
        },
        doneTrue(index) {
           if (this.tasks[index].done !== true) {
            this.tasks[index].done = true;
           } else {
            this.tasks[index].done = false;
           }
        }
    }
});



// ## Istruzioni
// Create una todo list usando VueJS.
// Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
// Se non sapere che fare, di seguito trovate uno screenshot.
// Funzionalitá:
// - La nostra todo list avrá alcune tasks di default predefinite
// - L'utente puó inserire nuove tasks
// - Cliccando sulla "X" l'utente puó cancellare una task
// - Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// - L'utente vuole poter indicare che la task é stata completata (con un icona cliccabile)
