import { v4 as uuidv4 } from 'uuid';

const dentists = [
    
  {
      id: uuidv4(),
      first_name: "Adriano",
      last_name: "Bloxland",
      phone: "819 902 0236",
      email: "adriano.bloxland@tandartspraktijkbvt.nl",
      sick: false
    },
    
    {
      id: uuidv4(),
      first_name: "Row",
      last_name: "Janecki",
      phone: "680 312 0582",
      email: "row.janecki@tandartspraktijkbvt.nl",
      sick: false
    },

    {
      id: uuidv4(),
      first_name: "Mikel",
      last_name: "Chiese",
      phone: "771 870 8163",
      email: "mikel.chiese@tandartspraktijkbvt.nl",
      sick: false       
    },

    {
      id: uuidv4(),
      first_name: "Araldo",
      last_name: "Bourton",
      phone: "386 586 7981",
      email: "araldo.bourton@tandartspraktijkbvt.nl",
      sick: false
    },
  ]

  export { dentists }