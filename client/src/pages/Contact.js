import React from "react";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";

const contactList = [
  {
    name: "Justin Noeller",
    img: "https://avatars.githubusercontent.com/u/50307506?v=4",
    github: "https://github.com/noellerjd",
    linkedin: "https://www.linkedin.com/in/justin-noeller-797181235/",
  },
  {
    name: "Quy Nguyen",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQFwVYlt6XdmwQ/profile-displayphoto-shrink_200_200/0/1649904332460?e=1671062400&v=beta&t=wY2bo_SNZLB5hlBv71zdHexva8hk9DFLapMl1qsaqAQ",
    github: "https://github.com/QNguyen-hub",
    linkedin: "https://www.linkedin.com/in/quy-nguyen-887823237/",
  },
  {
    name: "Edward Monarrez",
    img: "https://avatars.githubusercontent.com/u/102709811?v=4",
    github: "https://github.com/Eddie-M11",
    linkedin: "https://www.linkedin.com/in/edward-monarrez-248217236/",
  },
  {
    name: "Brandon Elliott",
    img: "https://avatars.githubusercontent.com/u/103010726?v=4",
    github: "https://github.com/brandonelliott0530",
    linkedin: "https://www.linkedin.com/in/brandon-elliott-751aaa236/",
  },
  {
    name: "Andrew Damron",
    img: "https://avatars.githubusercontent.com/u/74274269?v=4",
    github: "https://github.com/AndrewDamron",
    linkedin: "",
  },
];

function Contact() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="contact-section">
        <div className="contact-container">
          {contactList.map((contact, i) => {
            return (
              <ContactCard
                key={i}
                img={contact.img}
                name={contact.name}
                github={contact.github}
                gitLink={contact.gitLink}
                linkedin={contact.linkedin}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Contact;
