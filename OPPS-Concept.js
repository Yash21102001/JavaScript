// Inheritance : simple

class Train { // super class , parent class , base class
  fillDetails(trainNumber, source, destination, depTime) {
    this.trainNumber = trainNumber;
    this.source = source;
    this.destination = destination;
    this.depTime = depTime;
  }
}

class Ticket extends Train { // sub class , child class , derived class
  fillDetails(passangerName, train, date) {
    // super.fillDetails(12345,"surat","mathura","19:30 PM")
    this.passangerName = passangerName
    this.train = train
    this.date = date
  }
  display(){
    console.log(`${this.passangerName} ${this.train} ${this.date} ${this.trainNumber} ${this.source} ${this.destination} ${this.depTime}`)
  }
}

const ticket1 = new Ticket()
// const ticket2 = new Train()

ticket1.fillDetails("Arti" , "Ac" , "10/10/2000","19:30 PM")
// ticket2.fillDetails(12345,"surat","mathura","19:30 PM")


ticket1.display()
