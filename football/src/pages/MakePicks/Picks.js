import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Table, TableItem, TableHead } from "../../components/Table";

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
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col> */}
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Picks</h1>
            </Jumbotron>
            {this.state.picks.length ? (
              <Table>
                <TableHead />
                {this.state.picks.map(pick => (
                  <TableItem key={pick._id}>
                    <Link to={"/picks/" + pick._id}>
                      <strong>
                        {pick.name}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </TableItem>
                ))}
              </Table>
            ) : (
              <h3>No Picks to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Picks;
