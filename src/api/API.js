import * as axios from "axios";

export const API = {
    getTasks() {
        return axios.get('http://localhost:3000/posts')
    },
    addTask(title, text, tags, date) {
        return axios.post('http://localhost:3000/posts',
            {
                id: Math.floor(Math.random() * 10000),
                title,
                text,
                tags,
                date
            }
        )
    },
    deleteTask(taskId){
        return axios.delete('http://localhost:3000/posts/' + taskId)
    },
    editTask(title, text, taskId, tags, date){
        return axios.put('http://localhost:3000/posts/' + taskId,
            {
                id: taskId,
                title,
                text,
                tags,
                date
            }
        )
    },
    setEditTasks(taskId) {
        return axios.get('http://localhost:3000/posts/' + taskId)
    },

};