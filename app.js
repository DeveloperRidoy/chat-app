const ui = new UI;
const store = new STORE;

const chatRoom = new CHATROOM(store.getRoom(), store.getName());


//listen for dom content load to render realtime chats
document.addEventListener('DOMContentLoaded', renderChats)

//listen for clicking on music chatroom
ui.generalChat.addEventListener('click', () => {chatRoom.updateRoom('general')});

//listen for clicking on music chatroom
ui.musicChat.addEventListener('click', () => {chatRoom.updateRoom('music')});

//listen for clicking on music chatroom
ui.gamingChat.addEventListener('click', () => {chatRoom.updateRoom('gaming')});

//listen for clicking on music chatroom
ui.ninjaChat.addEventListener('click', () => {chatRoom.updateRoom('ninja')}); 

//listen for sending message
ui.messageForm.addEventListener('submit', (e) => {e.preventDefault();chatRoom.addChat();ui.clearFields()});

//listen for updating name
ui.nameForm.addEventListener('submit', (e) => {e.preventDefault();chatRoom.updateName(ui.nameForm.name.value.trim());ui.showAlert('name updated successfully!','alert alert-success')}) 

//function for realtime renderChats
function renderChats() {  
    //get chats from ChatRoom
    chatRoom.getChats(chatsArr => {       
        //show chats in UI
        ui.showChats(chatsArr);

        //scroll to message form
        ui.messageForm.scrollIntoView();
    })
}



