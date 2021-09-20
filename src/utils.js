import { assistants } from "./data/assistants";
import { patients } from "./data/patients";
import { dentists } from "./data/dentists";


const getRandomName = (names) => {
  const person = names[Math.floor(Math.random() * names.length) ];
  return  `${person.first_name} ${person.last_name}`;
  
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomName(patients),
  dentist: getRandomName(dentists),
  assistant: getRandomName(assistants),
});

const generateRandomAppointments = num =>

  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;
