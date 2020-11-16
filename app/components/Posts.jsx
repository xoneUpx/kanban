import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action_index.js';

const mapStateToProps =(state) => { return { articles: state.remoteArticles.slice(0,10) }};
const mapDispatchToProps = (dispatch) => { return { getData2: (url) => dispatch(getData(url))}; };
const Post = (props) => { useEffect(() =>  { props.getData2("https://jsonplaceholder.typicode.com/posts")}); return (
  <ul>
        {props.articles.map(el => (
                  <li key={el.id}>{el.title}</li>
                ))}
      </ul>
    )};
export default connect(mapStateToProps, mapDispatchToProps)(Post); 
//export class Post extends React.Component {
//    constructor(props) {
//          super(props);
//        }
//
//    componentDidMount() {
//          this.props.getData();
//          alert('lol');
//        }
//
//    render() {
//          return (
//                  <ul>
//                    {this.props.articles.map(el => (
//                                <li key={el.id}>{el.title}</li>
//                              ))}
//                  </ul>
//                );
//        }
//}
//
//function mapStateToProps(state) {
//    return {
//          articles: state.remoteArticles.slice(0, 10)
//        };
//}
//
//export default connect(
//    mapStateToProps,
//    { getData }
//)(Post);
