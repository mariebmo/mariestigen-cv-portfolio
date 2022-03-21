import { ContactCard } from "./contactCard";

export function PersonaCard() {
  return (
    <div>
      <div className={"card bg-base-100 shadow-xl"}>
        <figure>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQE7XEEgu4MaAg/profile-displayphoto-shrink_800_800/0/1627992117440?e=1653523200&v=beta&t=vfbd1PKia7hEiW6kaTSqK_PtU60gnpgpgyAtfAY5erM"
            alt="image of Marie Stigen"
            className={"image-full"}
          />
        </figure>
        <div className={"card-body"}>
          <h2 className={"card-title"}>Marie Stigen</h2>
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
