class Jogovelha {

    constructor(player, bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9) {
        this.player = player;
        this.bt1 = bt1;
        this.bt1 = bt2;
        this.bt1 = bt3;
        this.bt1 = bt4;
        this.bt1 = bt5;
        this.bt1 = bt6;
        this.bt1 = bt7;
        this.bt1 = bt8;
        this.bt1 = bt9;
    }

    horizontal() {
        if ((this.bt1 != "") | (this.bt2 != "") | (this.bt3 != "")) {
            if ((this.bt1 == this.bt2) && (this.bt2 == this.bt3)) {
                if (this.player == "O") {
                    window.alert("Vencedor: " + "1")
                } else {
                    window.alert("Vencedor: " + "2")
                }
            }
        }
        if ((this.bt4 != "") | (this.bt5 != "") | (this.bt6 != "")) {
            if ((this.bt4 == this.bt5) && (this.bt5 == this.bt6)) {

                if (this.player == "O") {
                    window.alert("Vencedor: " + "1")
                } else {
                    window.alert("Vencedor: " + "2")
                }
            }
        }

        if ((this.bt7 != "") | (this.bt8 != "") | (this.bt9 != "")) {
            if ((this.bt7 == this.bt8) && (this.bt8 == this.bt9)) {

                if (this.player == "O") {
                    window.alert("Vencedor: " + "1")
                } else {
                    window.alert("Vencedor: " + "2")
                }

            }
        }

    }

    vertical() {
        if (this.bt1 == this.bt4 && this.bt4 == this.bt7) {
            if (this.player == "O") {
                return "Vencedor: " + "1"
            } else {
                return "Vencedor: " + "2"
            }
        } else if (this.bt2 == this.bt5 && this.bt5 == this.bt8) {
            if (this.player == "O") {
                return "Vencedor: " + "1"
            } else {
                return "Vencedor: " + "2"
            }
        } else if (this.bt3 == this.bt6 && this.bt6 == this.bt9) {
            if (this.player == "O") {
                return "Vencedor: " + "1"
            } else {
                return "Vencedor: " + "2"
            }
        }
    }

    diagonal() {
        if (this.bt1 == this.bt5 && this.bt5 == this.bt9) {
            if (this.player == "O") {
                return "Vencedor: " + "1"
            } else {
                return "Vencedor: " + "2"
            }
        } else if (this.bt3 == this.bt5 && this.bt5 == this.bt7) {
            if (this.player == "O") {
                return "Vencedor: " + "1"
            } else {
                return "Vencedor: " + "2"
            }
        }
    }

    fimjogo() {
        if (this.bt1 == "" && this.bt2 == "" && this.bt3 == "" &&
            this.bt4 == "" && this.bt5 == "" && this.bt6 == "" &&
            this.bt7 == "" && this.bt8 == "" && this.bt9 == "") {

            return "Empate"
        }
    }

}