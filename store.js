class STORE{
    constructor() {

    }
    saveName(name) {
        localStorage.setItem('name', name);
    }

    saveRoom(room) {
        localStorage.setItem('room', room);
    }

    getName() {
        if (!localStorage.getItem('name')) {
            this.name = 'user';
        }else{
            this.name = localStorage.getItem('name');
        }
        return this.name;
    }

    getRoom() {
        if (!localStorage.getItem('room')) {
            this.room = 'general';
        }else{
            this.room = localStorage.getItem('room');
        }
        return this.room;
    }

}
