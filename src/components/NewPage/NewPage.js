import React from 'react';
import './NewPage.scss'
import {addTaskThunkCreator} from "../../redux/todoReducer";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class NewPage extends React.Component {

    state = {
        title: '',
        text: ''
    };
    onTitleChange = (e) => {
        this.setState({title:e.currentTarget.value})
    };
    onTextChange = (e) => {
        this.setState({text:e.currentTarget.value})
    };
    onAddTask = () => {
        if(this.state.text.length && this.state.title.length !== 0) {
            let reg = this.state.text.match(/#[0-9A-Za-zА-Яа-яё]+/g);
            this.props.addTaskThunkCreator(this.state.title, this.state.text, reg, new Date().toLocaleString());
        }
    };

    render = () => {
        return(
            <div className="note-form">
            <h1>New Note</h1>
            <div className="note-form-field">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    required="required"
                    onChange={this.onTitleChange}
                />
            </div>
            <div className="note-form-field note-form-field-text">
                <label>Text</label>
                <textarea
                    name="text"
                    onChange={this.onTextChange}
                />
            </div>

            <div className="note-form-buttons">
                <Link to="/">
                <button onClick={this.onAddTask} className="btn">Save</button>
                <button className={'btn'}>Cancel</button></Link>
            </div>

        </div>

        )}
}

let mapStateToProps = (state) => ({
    tasks: state.todo.tasks
})

export default connect( mapStateToProps, {
    addTaskThunkCreator
})(NewPage)

