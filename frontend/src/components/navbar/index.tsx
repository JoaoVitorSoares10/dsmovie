import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './styles.css';

export default function navbar(){
    return(
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/JoaoVitorSoares10" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/JoaoVitorSoares10</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}