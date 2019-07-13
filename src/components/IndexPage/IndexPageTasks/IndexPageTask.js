import React from 'react';
import {Link} from 'react-router-dom'
import './IndexPageTasks.scss';

class IndexPageTask extends React.Component {
    state = {
        title: this.props.title,
        text: this.props.text,
        tags: this.props.tags
    };


    componentDidUpdate(nextProps) {
        if(nextProps !==this.props){this.setState({title: this.props.title,
            text: this.props.text,
            tags: this.props.tags})}
    }

    onDeleteTask = () => {
        let tag = this.state.title.match(/#[0-9A-Za-zА-Яа-яё]+/g);
        this.props.deleteTask(this.props.id, tag)
    };

    render = () => {
        return (
            <div className='todoTask'>
                <div className="note-list">
                    <div className="note-list-block">
                        <div className="note-list-descr">
                            <h2>{this.state.title}</h2>
                            <p>{this.props.date}</p>
                        </div>
                        <div className="note-list-content">
                            <div dangerouslySetInnerHTML={{__html: this.state.text}}/>
                            <p className="note-list-tags">{this.state.tags}</p>
                        </div>
                    </div>
                    <div className="note-list-btn">
                        <Link to={`/edit/${this.props.id}`}>
                            <button className="btn btn-edit">Edit</button>
                        </Link>
                        <button onClick={this.onDeleteTask} className="btn btn-delete">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default IndexPageTask;