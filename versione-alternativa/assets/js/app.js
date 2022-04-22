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
                done: false
            }
        ],
        completedTasks: [
            
            {
                text: 'Fare la spesa',
                done: true
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
        goToCompleted(index) {
            this.completedTasks.unshift(this.tasks[index]);
            this.tasks.splice(index, 1);
            
        },
        goToTasks(index) {
            this.tasks.unshift(this.completedTasks[index]);
            this.completedTasks.splice(index, 1);
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


// ## Bonus-extra (opzionale)
// -1 Quando una task é stata completa allora l'utente vuole che venga inserita 
//     in un'altra colonna tipo "tasks completate"

// -2 se una task é stata marcata come completa per sbaglio allora vuole poterla 
//     rimettere nella todo list (cliccando su un altra icona)

// -3 ah non é finita, dice che quando cancella una task non vuole che questa venga subito 
//    rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"

// -4 si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks 
//     nel cestino cliccando su un pulsante tipo "svuota cestino"

// -5 Il nostro utente per ora sembra non avere altre richieste ... ma chissá se 
// dopo gli viene in mente che vuole anche poter rimettere una task cancellata 
// nella lista di tasks da fare, magari l'ha cancellata per sbaglio...