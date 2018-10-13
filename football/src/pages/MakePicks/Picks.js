import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Table, TableItem, TdItem, ThItem, TableHead, TableBody } from "../../components/Table";

class Picks extends Component {
    state = {
        pick: {}
    };
    


  componentDidMount() {
    this.loadPicks();
  }

  loadPicks = () => {
    API.getPicks()
      .then(res =>
        this.setState({ picks: res.data })
        // this.setState({ picks: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // deletePick = id => {
  //   API.deletePick(id)
  //     .then(res => this.loadPicks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.pick) {
      API.savePick({
        pick: this.state.pick
      })
        .then(res => this.loadPicks())
        .catch(err => console.log(err));
    }
  };

  render() {

    const pickData = [
      { id: "1", homeTeam: "Chiefs", awayTeam: "New England", pick: "Chiefs" },
      { id: "2", homeTeam: "Chiefs", awayTeam: "Jaguars",   pick: "Chiefs" },
      { id: "3", homeTeam: "Chiefs", awayTeam: "Broncos",   pick: "Chiefs" },
      { id: "4", homeTeam: "Chiefs", awayTeam: "Chargers",  pick: "Chiefs" }
    ];  

    const tableHd = [
      "Game", 
      "Home Team", 
      "Away Team", 
      "Pick"
    ]

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Weekly Picks</h1>
            </Jumbotron>
            {pickData.length ? (
              <Table>
                <TableHead>
                  <tr className="table table-striped">
                    {tableHd.map(tableHd => (
                      <ThItem key={tableHd} value={tableHd} />
                    ))}
                  </tr>
                </TableHead>
                <TableBody>
                  {pickData.map(pickData => (
                    <tr className="table table-striped">
                      <ThItem key={pickData.id} value={pickData.id} /> 
                      <TdItem key={pickData.id} value={pickData.homeTeam} />
                      <TdItem key={pickData.id} value={pickData.awayTeam} />
                      <TdItem key={pickData.id} value={pickData.pick} />
                    </tr>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <h3>No Users to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>My Picks</h1>
//             </Jumbotron>
//             {this.state.pick.length ? (
//               <Table>
//                 <TableHead />
//                 {this.state.picks.map(pick => (
//                   <TableItem key={pick._id}>
//                     <Link to={"/picks/" + pick._id}>
//                       <strong>
//                         {pick.name}
//                       </strong>
//                     </Link>
//                     {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
//                   </TableItem>
//                 ))}
//               </Table>
//             ) : (
//               <h3>No Picks to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default Picks;
