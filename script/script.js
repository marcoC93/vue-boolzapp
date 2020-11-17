var app = new Vue({
  el: '#root',
  data: {
    // qui "dichiaro le diverse 'variabili' che immagazzineranno i diversi input ricevuti dall'HTML  "
        // questo é l'indice dei contatti per fare in modo che l'array di contatti venga stampato dinamicamente nell'apposita sezione all'interno dell'html
      contactIndex: 0,
      // é qui verrá immagazzinato l'input html nella sezione chat e verrá aggiunto all'array di messaggi relativo alla chat attiva
      message_sent: '' ,
      // questa propietá é stata creata per far in modo che lo scope della risposta automatica sia visibile anche all'esterno della funzione
      message_received: '',
      //qui c'é l'input del campo di ricerca il quale va immagazzinato per essere processato nell'apposita funzione
      contact_search: '',

    // Questo é l'array dei contatti ed in ogni contatto é presente anche lo scambio di messaggi rappresentato  da un array di oggetti con diverse info su ogni messaggio
      contacts: [
             {
                      name: 'Michele',
                      avatar: '_1',
                      visible: true,
                      messages: [
                              {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Hai portato a spasso il cane?',
                                    status: 'sent'
                              },
                              {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Ricordati di dargli da mangiare',
                                    status: 'sent'
                              },
                              {
                                    date: '10/01/2020 16:15:22',
                                    message: 'Tutto fatto!',
                                    status: 'received'
                              }
                      ],
             },
             {
                      name: 'Manuela',
                      avatar: '_2',
                      visible: true,
                      messages: [
                              {
                                    date: '20/03/2020 16:30:00',
                                    message: 'Ciao come stai?',
                                    status: 'sent'
                              },
                              {
                                    date: '20/03/2020 16:30:55',
                                    message: 'Bene grazie! Stasera ci vediamo?',
                                    status: 'received'
                              },
                              {
                                    date: '20/03/2020 16:35:00',
                                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                    status: 'received'
                              }
                      ],
             },
        {
           name: 'Samuele',
           avatar: '_3',
           visible: true,
           messages: [
                  {
                         date: '28/03/2020 10:10:40',
                         message: 'La Marianna va in campagna',
                         status: 'received'
                  },
                  {
                         date: '28/03/2020 10:20:10',
                         message: 'Sicuro di non aver sbagliato chat?',
                         status: 'sent'
                  },
                  {
                         date: '28/03/2020 16:15:22',
                         message: 'Ah scusa!',
                         status: 'received'
                  }
           ],
        },
        {
           name: 'Luisa',
           avatar: '_4',
           visible: true,
           messages: [
                  {
                         date: '10/01/2020 15:30:55',
                         message: 'Lo sai che ha aperto una nuova pizzeria?',
                         status: 'sent'
                  },
                  {
                         date: '10/01/2020 15:50:00',
                         message: 'Si, ma preferirei andare al cinema',
                         status: 'received'
                  }
           ],
        },
    ],

  },
    // qui sono presenti diverse funzioni atte a processare i vari input che l'utente immetterá in pagina
     methods : {
        //in questa funzione tramite il cambio dell'indice assegnando l'indice corrente con l'indice dell'elemento cliccato permette di switchare da una chat all'altra
        change_current_contact(contactIndex) {
            this.contactIndex = contactIndex;
        },
        // in questa funzione tramite l'input ricevuto in html ed aggiungendolo all'array messaggi del contatto corrente
        send_message(message_sent) {
            this.contacts[this.contactIndex].messages.push(
                {
                    message: this.message_sent,
                    status: 'sent',

                }),

                setTimeout (() => {
                    this.contacts[this.contactIndex].messages.push(
                        {
                            message: 'ok',
                            status: 'received'
                        })
                },1000)
        },


        research(contact_search) {



           this.contacts.forEach((contact,index, contacs ) => {

               // se il nome del contatto attuale è filtrato da contact_search
               // in questa variabile é presente l'input di ricerca contatti dell'utente
               const search_string = this.contact_search ;
               // qui l'input dell'utente 'e stato modificato in modo da rendere mauscolo li primo carattere con il metodo .charAt(indice 0 in quanto di tratta della prima lettera) ed unito con la il resto della stringa prendendola completa ma rimuovendo il primo carattere in stringa il quale sarebbe minuscolo
               const search_string_capitalized = search_string.charAt(0).toUpperCase() + search_string.slice(1) ;
                // DEBUG:
               // console.log(search_string);
               // console.log(search_string_capitalized);
                if (contact.name.includes(search_string_capitalized)) {

                    // setta il contatto a visible = true
                      contact.visible = true;
                }
                else {

                    // altrimenti a visible = false
                      contact.visible = false ;

                    }
            });

          }
      }

// forEach((item, i, array) => {
//
// });





})
