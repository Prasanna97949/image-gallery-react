import one from "../images/copper-mustrad.jpg"
import two from "../images/crown-tail.jpg"
import three from "../images/dumbo-ear.jpg"
import four from "../images/fullmoon-red.jpg"
import five from "../images/hell-boy.jpg"
import six from "../images/mustrad-gas.jpg"
import seven from "../images/nemo-galaxy.jpg"
import eight from "../images/redsnow-dragon.jpg"
function Container(){
    return(
        <div class="container">
        <div class="image">
            <img src={one} alt="loading error"/>
            <h3>Copper Mustrad</h3>
        </div>
        <div class="image">
            <img src={two} alt="loading error"/>
            <h3>Crown Tail</h3>
        </div>
        <div class="image">
            <img src={three} alt="loading error"/>
            <h3>Dumbo Ear</h3>
        </div>
        <div class="image">
            <img src={four} alt="loading error"/>
            <h3>Full Moon Red</h3>
        </div>
        <div class="image">
            <img src={five} alt="loading error"/>
            <h3>Hell Boy</h3>
        </div>
        <div class="image">
            <img src={six} alt="loading error"/>
            <h3>Mustrad Gas</h3>
        </div>
        <div class="image">
            <img src={seven} alt="loading error"/>
            <h3>Nemo Galaxy</h3>
        </div>
        <div class="image">
            <img src={eight} alt="loading error"/>
            <h3>Red Snow Dragon</h3>
        </div>
    </div>
    )
}
export default Container