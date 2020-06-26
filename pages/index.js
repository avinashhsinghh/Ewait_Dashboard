import React, { Component } from "react";
import Main from "../component/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: [],
      isPageLoading: false,
      language: "eng",
    };
  }
  async componentDidMount() {
    this.setState({ isPageLoading: true });
    setInterval(async()=>{
      try {
        const response = await fetch(
          "https://v12qe1f1jf.execute-api.us-east-1.amazonaws.com/Dev/get-all-data",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseJson = await response.json();
        console.log(responseJson);
        const newData = [];
        responseJson.responseData?.forEach((element) => {
          newData.push({
            name: element?.name,
            arrived: element?.arrived,
            PhoneNo: element?.PhoneNo,
            dateTime: element?.dateTime
          });
          
        });
        this.setState({ row: newData }, () => {
          console.log("Row", this.state.row);
        });
      } catch (error) {
        console.log(error);
      }
    },1000)
    this.setState({ isPageLoading: false });
  }
  
   async callPatient(number, name) {
     console.log(number);
     console.log(name);
     await fetch("https://q1fjzbeq8l.execute-api.us-east-1.amazonaws.com/non-prod/make-outbound-call", {
        method: "POST",
        body: JSON.stringify({
            "callbackNumber": number.toString(),
            "name": name
        }),
        headers: { 'Access-Control-Allow-Headers': 'Content-Type/JSON',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            "X-API-Key": "4ej79ShQA8JeqVFOKV366OnjC4ZMUKk9kUWnOat2",
            "Content-Type": "application/json"
        }
    })
}

async changeStatus(value,number) {
  
  await fetch("https://v12qe1f1jf.execute-api.us-east-1.amazonaws.com/Dev/get-patient-data/"+number+"/put-patient-data", {
        method: "PUT",
        body: JSON.stringify({
            "arrived": value
        }),
        headers: { 
          "Content-Type": "application/json"
      }
    })
  
}


render() {
    return (
      <Main isLoading={this.state.isPageLoading}>
        <div className="w-full md:w-3/4 mx-auto">
          <div className="bg-blue-900 w-full p-4 ">
            <label className="font-semibold font-montserrat text-xl text-white ">
              Patient Arrival Dashboard
            </label>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2 border text-center py-4">
              <label className="font-montserrat md:text-lg font-semibold">
                Patient
              </label>
            </div>
            <div className="col-span-2 border text-center py-4">
              <label className="font-montserrat text-lg font-semibold">
                Appointment Time
              </label>
            </div>
            <div className="col-span-4 border text-center py-1">
              <label className="font-montserrat text-lg font-semibold">
                Status
              </label>
              <div className="grid grid-cols-4 border-t">
                <div className="col-span-1 border-r font-montserrat font-semibold pt-3">
                  Arrived (Y/N)
                </div>
                <div className="col-span-1 border-r font-montserrat font-semibold pt-3">
                  Signed In (Y/N)
                </div>
                <div className="col-span-1 border-r font-montserrat font-semibold ">
                  Checking In (Waiting/IN)
                </div>
                <div className="col-span-1 font-montserrat font-semibold my-auto">
                  In With DOC/HYG
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.state.row.map((item, index) => {
              return (
                <div className="grid grid-cols-8" key={index}>
                  <div
                    className={
                      "col-span-2 border text-center pt-2" +
                      (item.arrived === "Yes" && " bg-green-500 ")+
                      (item.arrived === "With Doctor" && " bg-gray-500 ")

                    }
                  >
                    <label className="font-semibold font-montserrat">
                      {item.name}
                    </label>
                  </div>
                  <div
                    className={
                      "col-span-2 border text-center pt-2" +
                      (item.arrived === "Yes" && " bg-green-500 ")+
                      (item.arrived === "With Doctor" && " bg-gray-500 ")
                    }
                  >
                    <label>{item.dateTime}</label>
                  </div>

                  <div
                    className={
                      "col-span-1 border text-center pt-2" +
                      (item.arrived === "Yes" && " bg-green-500 ")+
                      (item.arrived === "With Doctor" && " bg-gray-500 ")
                    }
                  ><select value={item.arrived} onChange={(event)=>{
                    this.changeStatus(event.target.value,item.PhoneNo)
                    const newrow=[...this.state.row]
                    newrow[index].arrived=event.target.value
                    this.setState({
                      row:newrow
                    })
                  }}> 
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    <option value="With Doctor">With Doctor</option>
                  </select>
                  </div>

                  <div
                    className={
                      "col-span-1 border text-center pt-2" +
                      (item.arrived === "Yes" && " bg-green-500 ")+
                      (item.arrived === "With Doctor" && " bg-gray-500 ")                    }
                  >
                    Yes
                  </div>
                  <div
                    className={
                      "col-span-1 border text-center pt-2" +
                      (item.arrived === "Yes" && " bg-green-500 ")+
                      (item.arrived === "With Doctor" && " bg-gray-500 ")
                    }
                  >
                    Waiting to be called
                    <a onClick={() => {
                      this.callPatient(item.PhoneNo, item.name)}}>
                      <FontAwesomeIcon
                        icon={faPhoneSquare}
                        size="2x"
                        className="cursor-pointer mr-6"
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                  <div className={"col-span-1 border text-center pt-2"+
                (item.arrived === "Yes" && " bg-green-500 ")+
                (item.arrived === "With Doctor" && " bg-gray-500 ")}>
                    With Hygienist (casey)
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
          {/* {this.state.language === "eng" && (
            <div className="">
              <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
              <df-messenger
                intent="WELCOME"
                chat-title="DentalBot"
                agent-id="fc6efb50-7c8a-4c34-a756-dcd49395a458"
                language-code="en"
              ></df-messenger>
            </div>
          )} */}
          {/* {this.state.language === "spain" && (
            <div className="">
              <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
              <df-messenger
                intent="WELCOME"
                chat-title="DentalBot"
                agent-id="fc6efb50-7c8a-4c34-a756-dcd49395a458"
                language-code="es"
              ></df-messenger>
            </div>
          )} */}
          {/* <div className="w-56 pt-8 float-right">
            <Select
              name="Language"
              onNewValue={(res) =>
                this.setState({
                  language: res.value,
                })
              }
              onError={(error) =>
                this.setState({
                  errorlanguage: error,
                })
              }
              defaultValue={this.state.language}
              options={[
                {
                  value: "spain",
                  label: "Spainish",
                },
                {
                  value: "eng",
                  label: "English",
                },
              ]}
            />
          </div> */}
        </div>
      </Main>
    );
  }
}
