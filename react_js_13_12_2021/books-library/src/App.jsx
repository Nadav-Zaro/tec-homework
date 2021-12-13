import React from 'react';
import './App.css';
import Home from './pages/Home';
import BooksDetails from './pages/BooksDetails';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import {BrowserRouter , Switch , Route , Link} from 'react-router-dom'


class App extends  React.Component{
  books = [
    {author:"nadav",book:"yesterday",pages:459,img:"https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg",summary:"top sale"},
    {author:"nadav",book:"react dom",pages:1232,img:"https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498__340.jpg",summary:"top sale"},
  ]
  bookDetails
  getDetails=(details)=>{
    this.bookDetails = details
    console.log(this.bookDetails);
  }
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/Books">Books</Link>
    </div>
    <Switch>
    <Route exact path="/" component={Home}/> 
    <Route exact path="/Books" render={()=><Books books={this.books} bookDetails={this.getDetails}/>}/> 
    <Route exact path="/AddBooks" render={()=><AddBooks books={this.books}/>}/> 
    <Route exact path="/BooksDetails" render={()=><BooksDetails details={this.bookDetails}/>}/> 
    </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;