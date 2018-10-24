import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Table, TdItem, ThItem, TdButton, TableHead, TableBody } from "../../components/Table";
import PropTypes from "prop-types"

class Picks extends Component {
  static propTypes = {
    loginCheck: PropTypes.func
  }
  
  state = {
      pick: [],
      games: [],
      users: [],
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

    this.setState({ games: [] });

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

  makePick = value => {
    // event.preventDefault();
    console.log("value: ", value);
    // alert("I was clicked");

    API.savePick({
      confidence: 1,
      userID: this.state.users._ID,
      gamesID: this.state.games._ID,
      pick: value
    })
      .then(res => this.loadPicks())
      .catch(err => console.log(err));
    
    // this.loadGames();

  };


  render() {

    // const pickData = [
    //   { id: "1", homeTeam: "Chiefs", awayTeam: "New England", pick: "Chiefs" },
    //   { id: "2", homeTeam: "Chiefs", awayTeam: "Jaguars",   pick: "Chiefs" },
    //   { id: "3", homeTeam: "Chiefs", awayTeam: "Broncos",   pick: "Chiefs" },
    //   { id: "4", homeTeam: "Chiefs", awayTeam: "Chargers",  pick: "Chiefs" }
    // ];  

    const tableHd = [
      "Game Week", 
      "Home Team", 
      "Away Team", 
      "Pick"
    ]

    const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    // const gameNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];



    return (
      <Container fluid>
        <Row>
          <div className="col-3"></div>
          <Col size="md">
            <Jumbotron>
              <h1>Weekly Picks</h1>

              <h6>Welcome: ________</h6>
            </Jumbotron>

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
                      <ThItem key={week.week} value={week.week}>
                      </ThItem> 

                      <TdButton 
                        key={week.home} 
                        id={week.home}
                        value={week.home} 
                        // onChange={this.makePick}
                        clickHandler={this.makePick}
                        // onClick={(home) => this.makePick(home)}
                        // onClick={this.makePick.bind(this, week._id)}
                      />
                      <TdButton 
                        key={week.away} 
                        value={week.away} 
                        // onChange={this.makePick}
                        clickHandler={this.makePick}
                        // onClick={(home) => this.makePick(home)}
                        // onClick={this.makePick.bind(this, week._id)}
                      />

                      <TdItem 
                        key={week.pick} 
                        value={week.pick}
                      />

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


export default Picks;
