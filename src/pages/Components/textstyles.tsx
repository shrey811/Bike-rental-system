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
            <div className="overlay" >
                <Col style={{ fontSize: "25px" }}>
                    <div className="text">
                        <div className="wrapper">
                            <div id="W" >W</div>
                            <div className="shadow">W</div>
                        </div>
                        <div className="wrapper">
                            <div id="E" >E</div>
                            <div className="shadow">E</div>
                        </div>
                        <div className="wrapper">
                            <div id="L" >L</div>
                            <div className="shadow">L</div>
                        </div>
                        <div className="wrapper">
                            <div id="C" >C</div>
                            <div className="shadow">C</div>
                        </div>
                        <div className="wrapper">
                            <div id="O" >O</div>
                            <div className="shadow">O</div>
                        </div>
                        <div className="wrapper">
                            <div id="M" >M</div>
                            <div className="shadow">M</div>
                        </div>
                        <div className="wrapper">
                            <div id="E" >E</div>
                            <div className="shadow">E</div>
                        </div>
                        <br></br>
                        <div className="wrapper">
                            <div id="T" >T</div>
                            <div className="shadow">T</div>
                        </div>
                        <div className="wrapper">
                            <div id="O" >O</div>
                            <div className="shadow">O</div>
                        </div>
                        <div className="wrapper">
                            <div id="B" >B</div>
                            <div className="shadow">B</div>
                        </div>
                        <div className="wrapper">
                            <div id="I" >I</div>
                            <div className="shadow">I</div>
                        </div>
                        <div className="wrapper">
                            <div id="K" >K</div>
                            <div className="shadow">K</div>
                        </div>
                        <div className="wrapper">
                            <div id="E" >E</div>
                            <div className="shadow">E</div>
                        </div>
                        <div className="wrapper">
                            <div id="R" >R</div>
                            <div className="shadow">R</div>
                        </div>
                        <div className="wrapper">
                            <div id="C" >C</div>
                            <div className="shadow">C</div>
                        </div>
                        <div className="wrapper">
                            <div id="H" >H</div>
                            <div className="shadow">H</div>
                        </div>
                        <div className="wrapper">
                            <div id="O" >O</div>
                            <div className="shadow">O</div>
                        </div>
                        <div className="wrapper">
                            <div id="I" >I</div>
                            <div className="shadow">I</div>
                        </div>
                        <div className="wrapper">
                            <div id="C" >C</div>
                            <div className="shadow">C</div>
                        </div>
                        <div className="wrapper">
                            <div id="E" >E</div>
                            <div className="shadow">E</div>
                        </div>


                    </div>
                </Col>
                <Col>
                    <Button className="filled_edit_button" onClick={handleNavigate}> RENT NOW </Button>
                </Col>
            </div>



        </>
    )
}

export default Textstyles