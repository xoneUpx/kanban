import React , { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action_index.js';
import axioss from '../axios/test.js';

const mapStateToProps =(state) => { return { articles: state.notes.remoteArticles.slice(0,10) }};
const mapDispatchToProps = (dispatch) => { return { getData2: (url) => dispatch(getData(url))}; };
const Post = (props) => { 
  {/* useEffect(() =>  { props.getData2("https://jsonplaceholder.typicode.com/posts")}); */}
  const [axi, setAxi] = useState([]); 
   useEffect(() =>  { props.getData2("https://jsonplaceholder.typicode.com/posts");  const axx = async () => { try { const ax = await axioss.get('/'); console.log(ax.data.results);  setAxi(axi.concat(ax.data.results));} catch(e) { console.log(e)}}; axx()}, []);
  return [(<ul>
        {props.articles.map(el => (
                  <li key={el.id}>{el.title}</li>
                ))}
      </ul>),
    (<ul>
      { axi.map((i, index)=> <li key={index}>{i.id}</li>)}
    </ul>
    )]};
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
