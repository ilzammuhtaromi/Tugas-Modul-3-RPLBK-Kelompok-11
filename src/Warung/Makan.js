import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Minum extends Component {
    state = {
        Minum: " "
    }
    componentDidMount(){
        alert('Show Menu')
    }
    ChangeMinum = () => {
        this.setState((state) => { 
            if (state.Minum === "Es Teh") {
                return {Minum : "Capcin"}   
            } else if (state.Minum === "Capcin") {
                return {Minum : "Soda Gembira"}                 
            }
            else if (state.Minum === "Soda Gembira") {
                return {Minum : "Es Jeruk"}                 
            }
            else {
                return {Minum : "Es Teh"}                 
            }
        })
    }
  componentWillUnmount(){
        alert('Hide Menu')
    }
    render() {
        return (
            <div class="container pt-2">  
                <h3>List Makanan </h3>                       
                <ul class="list">
                    <li>Ayam Geprek</li>  
                    <li>Nasi Goreng</li>  
                    <li>Magelangan</li>
                    <li>Mie Ayam</li>
                    <li>Gongso Ayam</li>
                    <li>Telur Bakar</li>
                    <li>Ayam Penyet</li>
                </ul>
                <button type="button" class="btn btn-light" onClick={this.ChangeMinum}>Gacha Minuman Gratis</button>
                <p>{this.state.Minum}</p>
            </div>
        );
    }
}
export default Minum;