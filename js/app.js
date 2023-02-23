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
                message: 'Ricordati di stare attento a ChatGpt',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                message: 'Stai tranquillo bro!',
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
                message: 'Yo!, hai visto Jotaro?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                message: 'Hey Dio, stava venendo da te mi pare...',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                message: 'Nani? Masaka',
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
                message: 'Questo esercizio non riesco a farlo!',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                message: 'Io lo finisco in 2 minuti...',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                message: 'Ti rispetto.',
                status: 'received'
              }
            ],
          },
          
        ],

        currentIndexContact: 0,
        

      }
    },

    methods:{

      setCurrentContact(current){
        this.currentIndexContact = current
      }
     





    }




  }).mount('#app')