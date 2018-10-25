import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Table, TableItem, TdItem, ThItem, TableHead, TableBody } from "../../components/Table";

// const userData = [
//   { id: "1", firstName: "Rod",     lastName: "Skoglund", username: "Dilbert",   passwordHash: "Dilbert",   active: "false" },
//   { id: "2", firstName: "George",  lastName: "Carlin",   username: "Stuff",     passwordHash: "Stuff",     active: "false" },
//   { id: "3", firstName: "Charlie", lastName: "Brown",    username: "Blockhead", passwordHash: "Blockhead", active: "false" },
//   { id: "4", firstName: "Snoopy",  lastName: "Brown",    username: "Peanuts",   passwordHash: "Peanuts",   active: "false" }
// ];  


class Leaderboard extends Component {
    state = {
        user: {}
    };
    
  componentDidMount() {
    this.loadUsers();
  };

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data })
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
    if (this.state.user) {
      API.saveUser({
        user: this.state.user
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {

    const userData = [
      { id: "1", firstName: "Dilbert",     lastName: "Adams", username: "Dilbert",   passwordHash: "Dilbert",   score: "60" },
      { id: "2", firstName: "George",  lastName: "Carlin",   username: "Stuff",     passwordHash: "Stuff",     score: "50" },
      { id: "3", firstName: "Charlie", lastName: "Brown",    username: "Blockhead", passwordHash: "Blockhead", score: "40" },
      { id: "4", firstName: "Snoopy",  lastName: "Brown",    username: "Peanuts",   passwordHash: "Peanuts",   score: "40" }
    ];  

    const tableHd = [
      "User ID", 
      "Name", 
      "Score"
    ]

    return (
      <Container fluid>
        <Row>
          <div className="col-3"></div>
          <Col size="md">
            <Jumbotron>
              <h1>Leaderboard</h1>
            </Jumbotron>
            {userData.length ? (
              <Table>
                <TableHead>
                  <tr>
                    {tableHd.map(tableHd => (
                      <ThItem key={tableHd} value={tableHd} />
                    ))}
                  </tr>
                </TableHead>
                <TableBody>
                  {userData.map(userData => (
                    <tr>
                      <ThItem key={userData.id} value={userData.id} /> 
                      <TdItem key={userData.id} value={userData.firstName + " " + userData.lastName} />
                      <TdItem key={userData.id} value={userData.score} />
                    </tr>
                  ))}
                </TableBody>
              </Table>
             ) : (
              <h3>No Users to Display</h3>
            )}
          </Col>
          <div className="col-3"></div>
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
//               <h1>Leaderboard</h1>
//             </Jumbotron>
//             {this.state.user.length ? (
//               <Table>
//                 <TableHead />
//                 {this.state.users.map(user => (
//                   <TableItem key={user._id}>
//                     <Link to={"/users/" + user._id}>
//                       <strong>
//                         {user.firstname + " " + user.lastname} 
//                       </strong>
//                     </Link>
//                     {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
//                   </TableItem>
//                 ))}
//               </Table>
//             ) : (
//               <h3>No Users to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default Leaderboard;
