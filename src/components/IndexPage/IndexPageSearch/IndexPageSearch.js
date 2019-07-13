import React from 'react';
import {addTagTitle} from "../../../redux/todoReducer";
import {connect} from 'react-redux';

class IndexPageSearch extends React.Component {
    state = {
        searchText: ''
    };

    onChangeSearchText = (e) => {
        this.setState({searchText: e.currentTarget.value}, () => {
            this.props.addTagTitle(this.state.searchText)
        })
    };

    render = () => {
    return(
        <div className='todoHeader'>
            <input  type='text' placeholder="Search note by #tag" onChange={this.onChangeSearchText} value={this.state.searchText}/>
        </div>
    )}
}

let mapStateToProps = (state) => ({
    tagTitle: state.todo.tagTitle
});

export default connect(mapStateToProps, {addTagTitle})(IndexPageSearch)

