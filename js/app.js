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

        responseValue: 'ok!',

      }
    },

    methods:{

      //imposta l'indice corrente 
      setCurrentContact(current){
        this.currentIndexContact = current
      },  
     
      //aggiunge una chat di stringa vuota che prendo da value, ovvero quella che scrivo io
      addChat(){
        const newChat = this.inputValue
        this.contacts[this.currentIndexContact].messages.push({message: newChat})
        this.inputValue= ''
      },

      //ritorna la lunghezza di array contacts
      getContactsLenght(){
        return this.contacts.length
      },

      //inoltra automaticamente dopo aver fatto addChat

      addContactChat(){
        const newResponse = this.responseValue
        this.contacts[this.currentIndexContact].messages.push({message: newResponse, status: 'received'})
        this.responseValue= 'ok!'
      },

      //risposta automatica
      autoSending(){
        this.autoplay = setInterval(this.addContactChat, 1000)
        // clearInterval(this.autoplay)
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
















































// ESEMPI LUXON PER EVENTUALE BONUS!------------------------------
// const { DateTime } = luxon


// const DateTime = luxon.DateTime

// const now= DateTime.now()
// console.log(now)

// //====================================================

// const date = DateTime.fromObject({
//   year: 1990, 
//   month: 10, 
//   day: 24, 
//   hour: 14, 
//   minutes: 31, 
//   seconds: 56})
// console.log(date)

// //24-10-1990=============================================

// const formattedDate = date.toFormat('dd/LL/yyyy')
// console.log(formattedDate)

// //======================================================================

// //parsing di una data che riceviamo in un certo fromato
// //vogliamo ottenere un certo oggett dal formato ricevuto
// const dateToParse = '10/01/2020 15:30:55' // dd/LL/yyyy HH:mm:ss

// const parsedDate = DateTime.fromFormat(dateToParse, 'dd/LL/yyyy HH:mm:ss')
// console.log(parsedDate.toFormat('dd/LL/yyyy'))