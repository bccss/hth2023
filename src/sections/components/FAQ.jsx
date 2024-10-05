import React, { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import "../stylesheets/FAQ.css";

const dataCollection = [
  {
    question: "Do I need to know how to code?",
    answer: "Nope! Hack-the-Heights welcomes participants with all levels of experience, from complete beginners to experienced coders. There will be workshops and mentors available throughout the weekend to help you learn and build."
  },
  {
    question: "How do I, or my team, qualify?",
    answer: "Any student at Boston College is welcome to join us! Teams can have a maximum of four people. You can either register with your team using the form above or create one during the event! Individuals are also welcome to compete."
  },
  {
    question: "Will there be food provided?",
    answer: "Absolutely! Meals and snacks will be provided throughout the weekend to keep you energized and ready to hack!"
  },
  {
    question: "Where do I sleep?",
    answer: "While coding can be fun, we want you to get some rest when needed! Feel free to go back to your dorm/apartment to sleep or you can stay overnight in Schiller if you're feeling hardcore."
  },
  {
    question: "Do I have to stay for the full 24 hours?",
    answer: "Not at all – come to hack for as long or as short as you want!"
  },
  {
    question: "What project should I make?",
    answer: "We have exciting themes for your projects, and the top three teams will win a prize. Don't feel any pressure to make a perfect project, submission is totally optional!"
  },
  {
    question: "Are there going to be prizes?",
    answer: "You bet!"
  },
  {
    question: "How is the hackathon structured and who decides the winners?",
    answer: "The hackathon will follow a schedule called a devpost which includes different workshops and final submission deadlines. All prizes are determined by independent professors who volunteer their time as judges."
  }
];

const dayOfFAQ = [
  {
    question: "Will there be food provided?",
    answer: "Absolutely! We are providing lunch and dinner on Saturday and breakfast on Sunday – check the schedule for specifics."
  },
  {
    question: "Where can my team and I work?",
    answer: "Prior to 5pm on Saturday, we ask that you work above the second floor of 245 Beacon St. After 5pm, you can work anywhere in the building."
  },
  {
    question: "What do I do if I need help?",
    answer: "You can always ask for help in the HTH channel on Slack or come to the HTH HQ in 245 Beacon St. Room 501. We also have mentors and volunteers available throughout the event to help you with any questions or issues you may have."
  },
  {
    question: "Where do I sleep?",
    answer: "While coding can be fun, we want you to get some rest when needed! Feel free to go back to your dorm/apartment to sleep or you can stay overnight in Schiller if you're feeling hardcore. There are no restrictions on where you can sleep, but we recommend bringing a sleeping bag and pillow if you plan on staying overnight."
  },
  {
    question: "Do I have to stay for the full 24 hours?",
    answer: "Not at all – come to hack for as long or as short as you want!"
  },
  {
    question: "What project should I make?",
    answer: "We have exciting themes for your projects, and the top three teams will win a prize. Don't feel any pressure to make a perfect project, submission is totally optional!"
  },
  {
    question: "Are there going to be prizes?",
    answer: "You bet! Yes, there will be prizes! For the Grand Prize, you can choose between Apple AirPods, a Keychron Mechanical Keyboard, Sony Noise Cancelling Headphones, an Amazon Echo, or an Apple Watch. The Runner-Up Prize offers a choice between a JBL Speaker, Soundcore Headphones, a Logitech Mouse, or a Wireless Charging Pad. Additionally, there's a Beginner Prize, which includes a $50 gift card of your choice."
  },
  {
    question: "Who decides the winners?",
    answer: "Winners are determined by BC professors who volunteer their time as judges and follow a standardized rubric."
  }
];

function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="container" id="FAQ">
      <h1 className="faq-heading">← faq →</h1>
      <div className="faq-list">
        {dayOfFAQ.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeAccordion === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              {activeAccordion === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            <div className={`faq-answer ${activeAccordion === index ? 'active' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;