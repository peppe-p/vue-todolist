//Create una todo list usando VueJS.
//La nostra todo list avrá alcune tasks di default predefinite
//Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
//Inoltre L'utente vuole poter modificare una task giá inserita


const app = new Vue({
    el: "#root",
    data: {
        // Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
        checkError: "",
        taskList: ["HTML", "CSS", "JavaScript"],
        newTask: ""
    },
    methods: {
        //L'utente puó inserire nuove tasks
        addTask() {
            if (this.newTask == "") {
                this.checkError = "errorInput"
            } else {
                this.taskList.push(this.newTask);
                this.checkError = "no_errorInput"
            }
        },
        //ma vuole anche poter indicare che la task é stata completata(con un icona cliccabile)
        completeTask(i) {
            this.taskList.splice(i, 1);
        },
        //Cliccando sulla "X" l'utente puó cancellare una task
        removeTask(i) {
            this.taskList.splice(i, 1);
        }
    },
    mounted() {
        //Preme il pulsante add o preme il taso Enter della tastiera.
        window.addEventListener("keydown", (element) => {
            if (element.key == "Enter") {
                this.addTask()
            }
        });
    },
});