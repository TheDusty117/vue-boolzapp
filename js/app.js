const { createApp } = Vue


  createApp({
    data() {
      return {
        
        contacts: [

          {
            name: 'Elon',
            avatar: './img/img.elon.jpg',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'come stai Elon?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                message: 'ChatGpt sembra uno scam',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                message: 'lunga vita Intelligenza Artificale!!!',
                status: 'received'
              }
            ],
          },
          {
            name: 'Dio',
            avatar: './img/img.dio.jpg',
            visible: true,
            messages: [
              {
                date: '20/03/2020 16:30:00',
                message: 'Ciao Dio, hai visto Jotaro?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                message: 'Nani???',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                message: 'Si parlo proprio di lui!',
                status: 'sent'
              }
            ],
          },
          {
            name: 'GigaChad',
            avatar: './img/img.gigachad.jpg',
            visible: true,
            messages: [
              {
                date: '28/03/2020 10:10:40',
                message: 'Ho imparato JS in due ore',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                message: 'Io ancora non ci capisco nulla',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                message: 'Sei Scarso allora.',
                status: 'received'
              }
            ],
          },
          
          
        ],

        currentIndexContact: 0,
        
        //preso con v-bind nell'input su html
        inputValue: '',

        

      }
    },

    methods:{

      setCurrentContact(current){
        this.currentIndexContact = current
      },  

      
     
      addChat(){
        const newChat = this.inputValue
        this.contacts[this.currentIndexContact].messages.push({message: newChat})
        this.inputValue= ''
      },

      getContactsLenght(){
        return this.contacts.length
      },



    },

    //creano delle funzioni che possiamo leggere compe proprieta' {{computed.lenght ecc}} senza dover invocare la funzione stessa.
    computed:{

      // 
      activeContact(){
        return this.contacts[this.currentIndexContact]
      },

      numberOfContacts(){
        return this.contacts.lenght
      },

      //CREAMI! 
      //proprieta che mi legge array di messaggi, e si aggiorna leggendo sempre l'ultimo messaggio!
      latestMessage(){}

    },

    //funzioni simile ad event listener in grado di intercettare le modifiche di un certo dato
    //tutte le volte che un valore viene modificato, verra' invocato il corrispettivo watcher.
    watch:{



    }




  }).mount('#app')

// const { DateTime } = luxon
const DateTime = luxon.DateTime


