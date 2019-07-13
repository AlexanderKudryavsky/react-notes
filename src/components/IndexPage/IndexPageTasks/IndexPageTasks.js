import React from 'react';
import IndexPageTask from "./IndexPageTask";
const IndexPageTasks = (props) => {

    let {tasks, onDeleteTask, onEditTask, addTagTitle, tagTitle} = props;
    let taskElements = tasks.map(t => {
        if(t.text.indexOf(tagTitle) === -1) {
        return null
    }
    else {
        return <IndexPageTask key={t.id} date={t.date} deleteTask={onDeleteTask} text={t.text} tags={t.tags} title={t.title} id={t.id} editTask={onEditTask} addTagTitle={addTagTitle}/>
    }});
    return(
        <div>
            {taskElements}
        </div>
    )
};

export default IndexPageTasks;