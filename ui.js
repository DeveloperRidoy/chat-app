class UI{
    constructor() {
        this.chatList = document.querySelector('.chat-list');
        this.generalChat = document.querySelector('#general');
        this.musicChat = document.querySelector('#music');
        this.gamingChat = document.querySelector('#gaming');
        this.ninjaChat = document.querySelector('#ninja');
        this.messageForm = document.querySelector('.new-chat');
        this.nameForm = document.querySelector('.new-name')
    }

    showChats(chatsArr){
        let output = '';   
        chatsArr.forEach(chat => {
            const now = dateFns.distanceInWordsToNow(chat.info.created_at.toDate())    
            output += ` <li class="list-group-item animate" id="${chat.id}">
                            <span class="font-weight-bold">${chat.info.username}</span>
                            <span>${chat.info.msg}</span>
                            <div style="font-size:.9em;color:#999">${now} ago</div>
                        </li>`     
        }); 
        this.chatList.innerHTML = output;
    }

    showAlert(msg,alertClass){
        const div = document.createElement('div');
        div.classList = `alert-message ${alertClass}`;
        div.textContent = msg;

        if (!document.querySelector('.alert-message')) {
            document.body.appendChild(div);
        }
        console.log(div); 
        setTimeout(() => {this.removeAlert()},3000)
    }

    removeAlert() {
        if (document.querySelector('.alert-message')) {
            document.querySelector('.alert-message').remove();
        }
    }

    clearFields() {
        this.nameForm.reset();
        this.messageForm.reset();
    }
}