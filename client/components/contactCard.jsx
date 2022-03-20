export function ContactCard() {
  return (
    <div className={"flex-container"}>
      <span className={"image-link"}>
        <a href={"https://www.linkedin.com/in/marie-stigen/?locale=no_NO"}>
          <img alt={"linkedin-link"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        </a>
      </span>

      <span className={"image-link"}>
        <a href={"https://github.com/mariestigen"}>
          <img alt={"github-link"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </a>
      </span>

      <span className={"image-link"}>
        <a href={"https://artstation.com/mariestigen"}>
          <img alt="artstation-link" src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Artstation-1024.png" />
        </a>
      </span>
    </div>
  );
}
