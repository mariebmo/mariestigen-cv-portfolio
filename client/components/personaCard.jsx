import { ContactCard } from "./contactCard";

export function PersonaCard() {
  return (
    <div>
      <div className={"card bg-base-100 shadow"}>
        <div className={"card-body"}>
          <p>
            <i>
              Hei! Så gøy at du kom over CV-prosjektet mitt. Jeg holder på å
              lage en liten hobby-nettside for å sette meg litt bedre inn i
              tingene vi holder på med på skolen, og få ferdig noe kult og
              produktivt i samme slengen. Denne nettsiden er bygget på React,
              NodeJS, og Express, men ei litta PostgreSQL-database i bunnen. Jeg
              er helt klart ingen frontend-utvikler, men det kunne vært verre.
            </i>
          </p>
        </div>
      </div>
      <br/>
      <div className={"card bg-base-100 shadow-xl"}>
        <figure>
          <img
            src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/230918698_4212809668832858_4887499155602886816_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DfCCN2eaxasAX_nx8Y8&tn=lQEbWiRxu3rYBSJp&_nc_ht=scontent.fosl1-1.fna&oh=00_AT-L9Ffj3QAP6miaddJFMiVmGU7xQr_Ohjxvl0FI_RcJIg&oe=623D59FE"
            alt="image of Marie Stigen"
            className={"image-full"}
          />
        </figure>
        <div className={"card-body"}>
          <h2 className={"card-title"}>Marie Stigen</h2>

          <hr />
          <p>
            Arbeid | 3D-generalist med fokus på karakterdesign for real-time
            rendering og spill, og .NET utvikler.
            <br />
            <br />
            Utdanning | Fullført bachelorgrad innen 3D-grafikk. Pågående
            bachelorutdanning innen programmering
          </p>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
