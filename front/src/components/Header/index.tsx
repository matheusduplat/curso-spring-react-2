import logo from "../../assets/img/logo.svg";
import "./styles.css";
export default function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a
            style={{marginLeft: "5px"}}
            href="https://github.com/matheusduplat"
          >
            Matheus Duplat
          </a>
        </p>
        <p>Curso devsuperior</p>
      </div>
    </header>
  );
}
