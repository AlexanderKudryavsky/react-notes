import React from 'react';
import './IndexPage.scss';
import IndexPageSearch from "./IndexPageSearch/IndexPageSearch";
import IndexPageTasks from "./IndexPageTasks/IndexPageTasks";
import {
    addTagTitle,
    addTaskThunkCreator,
    deleteTaskThunkCreator,
    editTaskThunkCreator,
    getTaskThunkCreator
} from "./../../redux/todoReducer";
import {connect} from 'react-redux';

class IndexPage extends React.Component {

    componentDidMount() {
        this.props.getTaskThunkCreator();
    }

    onAddTask = (title, tags) => {
        this.props.addTaskThunkCreator(title, tags)
    };
    onDeleteTask = (taskId) => {
        this.props.deleteTaskThunkCreator(taskId, null)
    };
    onEditTask = (title, taskId) => {
        this.props.editTaskThunkCreator(title, taskId)
    };


    render = () => {
        return (
            <div className='todoList'>
                <IndexPageSearch addTask={this.onAddTask} addTags={this.onAddTags} tagTitle={this.props.tagTitle}/>
                <IndexPageTasks tasks={this.props.tasks}  onDeleteTask={this.onDeleteTask} onEditTask={this.onEditTask} tagTitle={this.props.tagTitle}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    tasks: state.todo.tasks,
    tags: state.todo.tags,
    tagTitle: state.todo.tagTitle,
});


export default connect(mapStateToProps, {
    addTagTitle, addTaskThunkCreator, getTaskThunkCreator,
    deleteTaskThunkCreator, editTaskThunkCreator})(IndexPage);
