const { copyFileSync } = require('fs');
const readline = require('readline');

class Nokia_3310 {
  constructor() {
    this.userInput = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  startPhone() {
    this.userInput.question('Press 1 to display front screen: ', (num) => {
      if(parseInt(num) === 1){
        this._screenDisplay();
        this.userInput.close();
      } else {
        console.log("Press a valid number.");
        this.startPhone();
      }
    });
  }

  _screenDisplay() {
    console.log("\tWelcome to Nokia_3310");
    var dateTime = "2024-04-20";
    console.log("DATE " + new Date(dateTime));
  }
  
  displayMenu() {
    this.userInput.question("Press 2 to display menu: ", (num) => {
      try {
        if (parseInt(num) === 2) {
          let menu = "\tMENU\n1. Phone book\n2. Messages\n3. Chat\n4. Call Register\n5. Tones\n6. Settings\n7. Call Divert\n8. Games\n9. Calculator\n10. Reminder\n11. Clock\n12. Profiles\n13. Sim Services";
          console.log(menu);
          this.menuOptions();
        } else {
          throw new Error("Enter a valid number.");
        }
      } catch (error) {
        console.error(error.message);
        this.displayMenu();
      }
    });
  }

 
  displayPhoneBookOptions() {
    console.log(`\tPHONEBOOK
    1. Search
    2. Services
    3. Add name
    4. Erase
    5. Edit
    6. Assign tone
    7. Send b'card
    8. Options
    9. Speed dials
    10. Voice tags`);
  }

  phoneBookOptions() {
    this.userInput.question("Select option in phonebook: ", (number) => {
      if (parseInt(number) >= 1 && parseInt(number) <= 10) {
        switch (parseInt(number)) {
          case 1:
            console.log("Search");
            break;
          case 2:
            console.log("Service Nos");
            break;
          case 3:
            console.log("Add name")
            break 
          case 4:
            console.log("Erase")
            break
          case 5:
            console.log("Edit")
            break 
          case 6:
            console.log("Assign tone")   
            break
          case 7:
            console.log("Send b'card") 
            break
          case 8:
            console.log("\nOptions")
            this.selectOption()
          case 9:
            console.log("Speed dial.")
            break
          case 10:
            console.log("Voice tags")
            break        
          default:
            console.log("Enter a valid option.");
            this.phoneBookOptions();
        }
      } 
    });
  }
  selectOption(){
    this.userInput.question("Select option 1 or 2",(option) =>{
      if(parseInt(option) === 1 ||  parseInt(option) === 2){
        switch(option){
          case 1:
            console.log("Type of view")
            break
          case 2:
            console.log("Memory status")
            break
        default:
          console.log("Enter a valid option")
          this.selectOption()    
        }
      };
    })
  }

  displayMessageOptions() {
    console.log(`\tMESSAGES
    1. Write message
    2. Inbox
    3. Outbox
    4. Picure messages
    5. Templates
    6. Smileys
    7. Message settings
    8. Info services
    9. Voice mailbox number
    10. Service command editor`);
    this.messageOptions();
  }

  displayMessageSettingsSetOptions(){
    console.log(` \tSET
    1.Message centre number
    2.Message sent as
    3.Message validity`)
  }

  selectMessageSettingsSetOption(){
    this.userInput.question("Select between 1 and 3 to view options in set:",(options)=>{
      if(parseInt(options) >= 1 || parseInt(options) <= 3 ){
        switch(options){
          case 1:
            console.log("Message centre number")
            break
          case 2:
            console.log("Message sent as")
            break
          case 3:
            console.log("Message validity")
            break                             
          default:
            console.log("Enter a valid option")
            this.selectMessageSettingsSetOption()
        }
      }
    })
  }

  viewMessageSettingsCommonoptions(){
    console.log(`COMMON
    1.Delivery reports
    2.Reply via same centre 
    3.Character surpport`)
    }

    selectMessageSettingsCommonOption(){
      this.userInput.question("Select between 1 and 3 to view options in common:",(num)=>{
        if(parseInt(num) >= 1 || parseInt(num) <= 3){
          switch(num){
            case 1:
              console.log("Delivery reports")
              break
            case 2:
              console.log("Reply via same centre")
              break
            case 3:
              console.log("Character surpport")
              break
            default:
              console.log("Enter a valid option")
              this.selectMessageSettingsCommonOption()      
          }
        }
      })
    }

    messageSettngOptions(){
      this.userInput.question("Select 1 or 2 to view options in message settings",(number)=>{
        if(parseInt(number) === 1 || parseInt(number) === 2){
          switch(number){
            case 1:
              displayMessageSettingsSetOptions()
              this.selectMessageSettingsSetOption()
            case 2:
              this.viewMessageSettingsCommonoptions()
              this.selectMessageSettingsCommonOption()
              break
            default:
              console.log("Select a valid option")
              this.messageSettngOptions()
          }
        }
      })
    } 

  messageOptions() {
    this.userInput.question("Enter between 1 and 10 to select options in message: ", (option) => {
      if (parseInt(option) >= 1 && parseInt(option) <= 10) {
        switch (parseInt(option)) {
          case 1:
            console.log("Write message");
            break;
          case 2:
            console.log("Inbox");
            break;
          case 3:
            console.log("Outbox")
            break
          case 4:
            console.log("Picture message")
            break
          case 5:
            console.log("Templates") 
            break
          case 6:
            console.log("Smileys")
            break
          case 7:
            console.log("Message settings")
            this.messageSettngOptions()
            break
          case 8:
            console.log("'Info services")
            break
          case 9:
            console.log("Voice mail box")
            break
          case 10:
            console.log("Services Command editor")
            break        
          default:
            console.log("Enter a valid option.");
            this.messageOptions();
            break;
        }
      }
    });
  }

  chat() {
    console.log("Chat");
  }

  displayCallRegisterOptions(){
    console.log(`
    1.Missed calls
    2.Received calls
    3.Dialled numbers
    4.Erase recent call list
    5.Show call duration
    6.Show call cost
    7.Call cost settings
    8.Prepaid credit`)
  }

  displayCallDurationOptions(){
    this.userInput.question("Select between 1 and 5 to view options in call duration",(num)=>{
      if(parseInt(num) >= 1 || parseInt(num) <= 5){
        switch(num){
          case 1:
            console.log("last call cost")
            break
          case 2: 
           console.log("All call's duration") 
           break
          case 3:
            console.log("Received calls duration")
            break
          case 4:
            console.log("Dialled calls duration")
            break
          case 5:
            console.log("Clear timers")
              break
          default:
            console.log("Select a valid option") 
            this.displayCallDurationOptions()  
        }
      }
    })
  }   

  displayShowCallCostOptions(){
                        this.userInput.question("select between 1 and 3 to view call cost options",(number)=>{
                          if(parseInt(number) >= 1 || parseInt(number) <= 3){
                            switch(number){
                              case 1:
                                console.log("last call cost")
                                break
                              case 2:
                                console.log("All calls' cost")
                                break
                              case 3:
                                console.log("Clear counters")
                                break
                              default:
                                console.log("Enter a valid option")
                                this.displayShowCallCostOptions()      
                            }
                          }
                        })
                      }

 viewCallSettingsoption(){
                        this.userInput.question("Select option 1 or 2 to view options in cost sttings",(options)=>{
                        switch(options){
                          case 1:
                            console.log("Call cost limit")
                            break
                          case 2:
                            console.log("Show cost in")
                            break
                          default:
                            console.log("Select a valid option")
                            this.viewCallSettingsoption()  
                        }
                        })
                      } 

      displayCallRegisterOptions(){
              this.userInput.question("Select between 1 and 8 to view option in call register",(number)=>{
                if(parseInt(number) >= 1 || parseInt(number) <= 8){
                  switch(number){
                    case 1:
                      console.log("Missed calls")
                      break
                    case 2:
                      console.log("Receieved calls")
                      break
                    case 3:
                      console.log("Dialled numbers")
                      break  
                    case 4:
                      console.log("Erase recent call list")
                      break
                    case 5:
                      console.log("Show call duration") 
                      this.displayCallDurationOptions()
                      break
                    case 6:
                      console.log("\tShow call cost") 
                      this.displayShowCallCostOptions()
                      break
                    case 7:
                      console.log("Call cost settings")
                      this.viewCallSettingsoption()
                    case 8:
                      console.log("Prepaid credit")
                    default:
                      console.log("Seletc a valid option")
                       this.displayCallRegisterOptions() 
                  }
                }
              })
            }

     dispalyTonesOptions(){
              this.userInput.question("Select between 1 and 9 to view tone options",(num)=>{
              if(parseInt(num) >= 1 || parseInt(num) <= 9){

              }
            })
            }         
  menuOptions() {
    this.userInput.question("Select option between 1 - 13 on the menu: ", (number) => {
      if (parseInt(number) >= 1 && parseInt(number) <= 13) {
        switch (parseInt(number)) {
          case 1:
            this.displayPhoneBookOptions();
            this.phoneBookOptions();
            break;
          case 2:
            this.displayMessageOptions();
            this.messageOptions()
            break;
          case 3:
            this.chat();
            break;
          case 4:
            console.log("\tCall register")
            this.displayCallRegisterOptions()
          case 5:
            console.log("Tones")
            this.dispalyTonesOptions()
           
          default:
            console.log("Enter a valid option.");
            this.menuOptions();
            break;
        }
      } 
    });
  }


}

myNokia = new Nokia_3310();
myNokia.displayMenu();

module.exports = Nokia_3310;
