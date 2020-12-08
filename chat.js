class CHATROOM{
    constructor(room, userName) {
        this.room = room;
        this.userName = userName;
        this.chats = db.collection('chats');
    }

    //add new chat
    async addChat(){
        const now = new Date;
        const message = {
            username: store.getName(),
            room: store.getRoom(),
            msg: ui.messageForm.message.value.trim(),
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        //add message to chat
        db.collection('chats').doc().set(message);
        
    }

    //get real time update on chats
    getChats(data){    
        this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(res => {
            const chatsArr = [];
            res.docs.forEach(doc => {
                chatsArr.push({info:doc.data(), id:doc.id})
            });
            data(chatsArr);
        })
    }

    //update name
    updateName(username){this.userName = username;store.saveName(username)};

    //update room
    updateRoom(room){this.room = room;store.saveRoom(room);renderChats()};
}






