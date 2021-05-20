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
        completedList: [],
        removedList: [],
        newTask: "",
        complHaveEl: false,
        removHaveEl: false,
        confirm: "",
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
            this.completedList.push(this.taskList[i]);
            this.taskList.splice(i, 1);
            if (this.completedList.length !== 0) {
                this.complHaveEl = true;
            }
        },
        //Cliccando sulla "X" l'utente puó cancellare una task
        removeTask(i) {
            this.removedList.push(this.taskList[i]);
            this.taskList.splice(i, 1);
            if (this.removedList.length !== 0) {
                return this.removHaveEl = true;
            }
        },
        repeatTask(i) {
            this.taskList.push(this.completedList[i]);
            this.completedList.splice(i, 1);
            if (this.completedList.length == 0) {
                return this.complHaveEl = false;
            }
        },
        recycleTask(i) {
            this.taskList.push(this.removedList[i]);
            this.removedList.splice(i, 1);
            if (this.removedList.length == 0) {
                return this.removHaveEl = false;
            }
        },
        deleteAll() {
            this.confirm = prompt("U want delete all?   [Y/N]").toUpperCase();
            if (this.confirm == "Y") {
                this.removedList.splice(0);
                this.removHaveEl = false;
            }
        },
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