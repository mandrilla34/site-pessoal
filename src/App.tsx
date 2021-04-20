import React, { Fragment, useState } from 'react';
import './App.css';

import GlobalStyles from "./styles/global-style";

// Import Components 
import CardRepo from "./components/card-repo/card-repo";
import ToggleTheme from './components/toggle-theme/toggle-theme';

// Import Constants
import nomesRepositorios from "./constants/nomes-repositorios";

// Importando enums
import { Themes } from "./enums/themes.enum";

import fxDev from "react95/dist/themes/fxDev";
import original from "react95/dist/themes/original";

export const ThemeContext = React.createContext(fxDev);

function App() {
    const [theme, setTheme] = useState(fxDev);

    function handleChange(theme) {
        if (theme === Themes.fxDev) {
            setTheme(fxDev);
        } else {
            setTheme(original);
        }
    }

    return (
        <Fragment>
            <ThemeContext.Provider value={theme}>
                <div className="d-flex justify-content-start align-items-center">
                    <h1 className="mr-3">Giovane Roberti Tafine</h1>

                    <ToggleTheme onClick={handleChange} />

                </div>
                {/* <select name="theme" id="theme" onChange={handleChange}>
                <option value="fxDev">fxDev</option>
                <option value="window1">original</option>
            </select> */}
                <div className="container">
                    <GlobalStyles />
                    {/* <ThemeProvider theme={fxDev}>
                    <a href="https://github.com/mandrilla34" target="_blank"><Button primary>GitHub</Button></a>
                </ThemeProvider>

                <a href="https://www.linkedin.com/in/mandrilla/" target="_blank"><button>LinkedIn</button></a>
                <a href="mailto:kstv23@hotmail.com?subject=Olá"><button>kstv23@hotmail.com</button></a>
                <br /> */}
                    {/* <div className="github-card" data-user="mandrilla34" data-repo="tic-tac-toe"></div> */}
                    <div className="row">

                        {
                            nomesRepositorios.map((nome, i) => {
                                return (
                                    <div className="my-3 col-12 col-sm-12 col-lg-6 col-xl-4" key={i} style={{ textAlign: 'center' }}>
                                        <CardRepo Nome={nome} />

                                    </div>

                                );
                            })
                        }

                    </div>
                </div>


                {/* <section className="section section--contact" data-slide="4"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)", height: "640px" }}>
                <div className="scanlines"></div>
            </section> */}

            </ThemeContext.Provider>
            <br />
        </Fragment>
    );
}

export default App;
