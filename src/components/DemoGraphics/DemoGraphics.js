import React from 'react';
import ImageDetectForm from '../ImageDetectForm/ImageDetectForm.js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '6b17ac395a4a482f87c614a73c04971c'
});

class DemoGraphics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({imageUrl: event.target.value})
    app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.imageUrl)
    .then((res) => {
      console.log(this.state)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="row justify-content-center" style={{'height': '100%'}} >
        <div className="card col-10 text-center" style={{ 'margin-top': '15px', 'overflow-y': 'auto' }} >
          <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <ImageDetectForm onInputChange={this.onInputChange}></ImageDetectForm>
                </div>
                  <div className="col-md-7" style={{'padding-top': '41px'}}>
                      <div className="view overlay">
                        <img width='100%' height="auto" src={this.state.imageUrl} alt=""/>
                          <a>
                              <div className="mask rgba-white-slight">
                              </div>
                          </a>
                      </div>
                  </div>
                  <div className="col-md-5 text-left">
                    <h3 className="text">Result</h3>
                    <div className="row">
                      <ul class="list-group col-md-12">
                        <li class="font-weight-bold text-capitalize list-group-item d-flex justify-content-between align-items-center">
                            Gender Appearence
                            <span class="font-weight-bold text-capitalize">Probability</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            feminine
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            masculine
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="font-weight-bold text-capitalize list-group-item d-flex justify-content-between align-items-center">
                            Age Appearence
                            <span class="font-weight-bold text-capitalize">Probability</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            23
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="font-weight-bold text-capitalize list-group-item d-flex justify-content-between align-items-center">
                            Multicultural Appearence
                            <span class="font-weight-bold text-capitalize">Probability</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            black or african american
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            asian
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            hispanic, latino, or spanish origin
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            white
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            american indian or alaska native
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            native hawaiian or pacific islander
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            middle eastern or north african
                            <span class="badge badge-primary badge-pill">0.5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoGraphics;
