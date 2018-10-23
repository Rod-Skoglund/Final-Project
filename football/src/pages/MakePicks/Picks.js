import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Table, TdItem, ThItem, TdButton, TableHead, TableBody, SelectPoints } from "../../components/Table";
import PropTypes from "prop-types"

class Picks extends Component {
  static propTypes = {
    loginCheck: PropTypes.func
  }
  
  state = {
      // pick: {},
      games: [],
      week: ""
  };
    
  componentDidMount() {
    // this.loadPicks();
    // this.loadGames();
  }

  loadPicks = () => {
    API.getPicks(this.state.week)
      .then(res =>
        this.setState({ picks: res.data })
        // this.setState({ picks: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  loadGames = event => {
    event.preventDefault();
    // console.log(event.target);
    console.log("event.target.value: ", event.target.value);

    API.getGames(event.target.value)
    .then(res => {
      console.log("res.data: ", res.data)
      this.setState({ games: res.data });
      console.log(this.state.games)
        // console.log("games: ", games)
      })
    .catch(err => console.log(err));
  };

  getScores = query => {
    API.searchScores(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.games) {
      API.savePick({
        pick: this.state.pick
      })
        .then(res => this.loadPicks())
        .catch(err => console.log(err));
    }
    
    this.loadGames();

  };

  

  render() {

    const pickData = [
      { id: "1", homeTeam: "Chiefs", awayTeam: "New England", pick: "Chiefs" },
      { id: "2", homeTeam: "Chiefs", awayTeam: "Jaguars",   pick: "Chiefs" },
      { id: "3", homeTeam: "Chiefs", awayTeam: "Broncos",   pick: "Chiefs" },
      { id: "4", homeTeam: "Chiefs", awayTeam: "Chargers",  pick: "Chiefs" }
    ];  

    const tableHd = [
      "Game Week", 
      "Home Team", 
      "Away Team", 
      "Pick"
      // "Winner"
    ]

    const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    const gameNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];



    return (
      <Container fluid>
        <Row>
          <div className="col-3"></div>
          <Col size="md">
            <Jumbotron>
              <h1>Weekly Picks</h1>

              <h6>Welcome: ________</h6>
            </Jumbotron>

              {/*user welcome message  */}

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Game Week:</label>
              </div>
              <select value={this.state.week} className="my-select" id="inputGroupSelect01" onChange={this.loadGames}>
                <option selected>Choose...</option>
                {weeks.map(week => {
                  return(
                    <option value={week}>
                      {week}
                    </option>
                  )
                })}
              </select>
            </div>

            {this.state.games.length ? (
              <Table>
                <TableHead>
                  <tr>
                    {tableHd.map(tableHd => (
                      <ThItem key={tableHd} value={tableHd} />
                    ))}
                  </tr>
                </TableHead>
                <TableBody>
                  {this.state.games.map(week => (
                    <tr>
                      <ThItem key={week._id} value={week.week}>
                        {/* <SelectPoints key={week} onChange={this.handleInputChange}>
                          {week}
                        </SelectPoints> */}
                      </ThItem> 

                      {/* <TdItem 
                        key={pickData.id} 
                        value={pickData.homeTeam} 
                      />
                      <TdItem 
                        key={pickData.id} 
                        value={pickData.awayTeam} 
                      /> */}

                      <TdButton 
                        key={week._id} 
                        value={week.home} 
                        onClick={this.handleFormSubmit}
                      />
                      <TdButton 
                        key={week._id} 
                        value={week.away} 
                        onClick={this.handleFormSubmit}
                      />

                      {/* <TdItem 
                        key={pickData.id} 
                        value={pickData.pick} 
                      /> */}

                      <TdItem 
                        key={week._id} 
                        value={week.pick}
                      />

                      {/* <TdItem 
                        key={week._id} 
                        value={week._id.winner}
                      /> */}

                    </tr>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <h3>Select a Game Week Above</h3>
            )}
          </Col>
          <div className="col-3"></div>
        </Row>
      </Container>
    );
  }
}


// ----
// Old render code
// ----
// render() {

//   const pickData = [
//     { id: "1", homeTeam: "Chiefs", awayTeam: "New England", pick: "Chiefs" },
//     { id: "2", homeTeam: "Chiefs", awayTeam: "Jaguars",   pick: "Chiefs" },
//     { id: "3", homeTeam: "Chiefs", awayTeam: "Broncos",   pick: "Chiefs" },
//     { id: "4", homeTeam: "Chiefs", awayTeam: "Chargers",  pick: "Chiefs" }
//   ];  

//   const tableHd = [
//     "Game", 
//     "Home Team", 
//     "Away Team", 
//     "Pick",
//     "Winner"
//   ]

//   const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

//   // const games = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//   return (
//     <Container fluid>
//       <Row>
//         <div className="col-3"></div>
//         <Col size="md">
//           <Jumbotron>
//             <h1>Weekly Picks</h1>

//             <h6>Welcome: ________</h6>
//           </Jumbotron>

//             {/*user welcome message  */}

//           <div class="input-group mb-3">
//             <div class="input-group-prepend">
//               <label class="input-group-text" for="inputGroupSelect01">Game Week:</label>
//             </div>
//             <select class="custom-select" id="inputGroupSelect01">
//               <option selected>Choose...</option>
//               {weeks.map(weeks => (
//                 <option value={weeks} onChange={this.handleInputChange}>
//                   {weeks}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {pickData.length ? (
//             <Table>
//               <TableHead>
//                 <tr>
//                   {tableHd.map(tableHd => (
//                     <ThItem key={tableHd} value={tableHd} />
//                   ))}
//                 </tr>
//               </TableHead>
//               <TableBody>
//                 {pickData.map(pickData => (
//                   <tr>
//                     <ThItem key={pickData.id} value={pickData.id}>
//                       <SelectPoints key={pickData.id} onChange={this.handleInputChange}>
//                         {pickData.id}
//                       </SelectPoints>
//                     </ThItem> 

//                     {/* <TdItem 
//                       key={pickData.id} 
//                       value={pickData.homeTeam} 
//                     />
//                     <TdItem 
//                       key={pickData.id} 
//                       value={pickData.awayTeam} 
//                     /> */}

//                     <TdButton 
//                       key={pickData.id} 
//                       value={pickData.homeTeam} 
//                       onClick={this.handleFormSubmit}
//                     />
//                     <TdButton 
//                       key={pickData.id} 
//                       value={pickData.awayTeam} 
//                       onClick={this.handleFormSubmit}
//                     />

//                     {/* <TdItem 
//                       key={pickData.id} 
//                       value={pickData.pick} 
//                     /> */}

//                     <TdItem 
//                       key={pickData.id} 
//                       value={pickData.pick}
//                     />

//                   </tr>
//                 ))}
//               </TableBody>
//             </Table>
//           ) : (
//             <h3>No Users to Display</h3>
//           )}
//         </Col>
//         <div className="col-3"></div>
//       </Row>
//     </Container>
//   );
// }
// }



// -------------
// Older render code
// -------------
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
