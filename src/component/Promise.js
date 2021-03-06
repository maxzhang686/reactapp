import React from "react";
import axios from "axios";

class Promise extends React.Component {
  // constructor(){
  //   super();
  //   this.state ={ weather:{}};
  // }
  state = {
    //isLoading: false
    // current: {},
    // location: {}
  };

  async componentDidMount() {
    // await axios
    //   .get(
    //     "https://api.apixu.com/v1/current.json?key=a3b32e153da34193a69111804192707&q=Paris"
    //   )
    //   .then(response => console.log(response))
    //   ;

    // this.setState({ isLoading: true });

    //1.use async/await
    // try {
    //   const response = await axios.get(
    //     "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c3ed55bedc8f402d7fcfd7078fb8f5a4/-33.8688,151.2093?units=si"
    //   );
    //   //use destructring to put all data's property-value pairs into state
    //   this.setState({ ...response.data, isLoading: false });
    //   console.log(response.data);
    // } catch (err) {
    //   console.log(err);
    //   this.setState({ isLoading: false });
    // }

    //2.use promise
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c3ed55bedc8f402d7fcfd7078fb8f5a4/-33.8688,151.2093?units=si"
      )
      .then(response => {
        //use destructring to put all data's property-value pairs into state
        this.setState(response.data);
        console.log(response.data);
      })
      .catch(err => console.loge(err));
  }

  render() {
    //if server hasn't reponded - show message
    // if (this.state.isLoading) return "please wait...";
    const data = this.state;
    //Show responded data
    return (
      <div>
        <div>
          {data && data.currently && (
            <p>
              {this.state.timezone} is {data.currently.temperature} degrees.
            </p>
          )}
        </div>
        {/* <p>{JSON.stringify(data)}</p> */}
      </div>
    );
  }
}
export default Promise;
