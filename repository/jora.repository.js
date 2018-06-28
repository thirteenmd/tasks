module.exports = function joraRepository() {    
    var TaskModel = require('../jora');
    var objTaskModel = new TaskModel();

    return {
        createTask,
        list,
        remove,
    };
   
    async function createTask(newTask) {
        return  TaskModel.create(newTask);
    }
    
    async function list() {
        return  TaskModel.find();
    }

    async function remove(taskId) {
        return  TaskModel.remove({ _id: taskId});
    }
};

