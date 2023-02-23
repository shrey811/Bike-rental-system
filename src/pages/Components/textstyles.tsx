import { Button, Col } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import "../Components/Components.scss"

const Textstyles = () => {
    const history = useHistory();
    function handleNavigate() {
        history.push('/inventory');
      }
    return (
        <>
            <div className="overlay" style={{ fontSize: "25px" }}>
                <Col style={{fontSize:"25px"}}>
                <div className="text">
                    <div className="wrapper">
                        <div id="W" className="letter">W</div>
                        <div className="shadow">W</div>
                    </div>
                    <div className="wrapper">
                        <div id="E" className="letter">E</div>
                        <div className="shadow">E</div>
                    </div>
                    <div className="wrapper">
                        <div id="L" className="letter">L</div>
                        <div className="shadow">L</div>
                    </div>
                    <div className="wrapper">
                        <div id="C" className="letter">C</div>
                        <div className="shadow">C</div>
                    </div>
                    <div className="wrapper">
                        <div id="O" className="letter">O</div>
                        <div className="shadow">O</div>
                    </div>
                    <div className="wrapper">
                        <div id="M" className="letter">M</div>
                        <div className="shadow">M</div>
                    </div>
                    <div className="wrapper">
                        <div id="E" className="letter">E</div>
                        <div className="shadow">E</div>
                    </div>
                    <br></br>
                    <div className="wrapper">
                        <div id="T" className="letter">T</div>
                        <div className="shadow">T</div>
                    </div>
                    <div className="wrapper">
                        <div id="O" className="letter">O</div>
                        <div className="shadow">O</div>
                    </div>
                    <div className="wrapper">
                        <div id="B" className="letter">B</div>
                        <div className="shadow">B</div>
                    </div>
                    <div className="wrapper">
                        <div id="I" className="letter">I</div>
                        <div className="shadow">I</div>
                    </div>
                    <div className="wrapper">
                        <div id="K" className="letter">K</div>
                        <div className="shadow">K</div>
                    </div>
                    <div className="wrapper">
                        <div id="E" className="letter">E</div>
                        <div className="shadow">E</div>
                    </div>
                    <div className="wrapper">
                        <div id="R" className="letter">R</div>
                        <div className="shadow">R</div>
                    </div>
                    <div className="wrapper">
                        <div id="C" className="letter">C</div>
                        <div className="shadow">C</div>
                    </div>
                    <div className="wrapper">
                        <div id="H" className="letter">H</div>
                        <div className="shadow">H</div>
                    </div>
                    <div className="wrapper">
                        <div id="O" className="letter">O</div>
                        <div className="shadow">O</div>
                    </div>
                    <div className="wrapper">
                        <div id="I" className="letter">I</div>
                        <div className="shadow">I</div>
                    </div>
                    <div className="wrapper">
                        <div id="C" className="letter">C</div>
                        <div className="shadow">C</div>
                    </div>
                    <div className="wrapper">
                        <div id="E" className="letter">E</div>
                        <div className="shadow">E</div>
                    </div>


                </div>
                </Col>
                    <Col>
                    <Button className="filled_edit_button"  onClick={handleNavigate}> RENT NOW </Button>
                    </Col>
            </div>



        </>
    )
}

export default Textstyles