const Task = require("./models/Task")
const resolvers = {
    Query: {
        hello: () => 'Hello World',
        getAllTasks: async() => {
            const tasks = await Task.find();
            return tasks
        }
    },
    Mutation: {
        async createTask(parent, { task }, context, info) {
            const { title, description } = task;
            const newTask = new Task({ title, description });
            await newTask.save();
            return newTask;
        },
       async updateTask( _, {id,task } ) {
            const { title, description } = task;
            const newTask = await Task.findByIdAndUpdate( id,
                {
                    $set: {
                        title,
                        description,
                    },
                },
                {
                    new: true
                }
            );
            return newTask;
        },
       
        async deleteTask( _, { id } ) {
            await Task.findByIdAndDelete( id );
            return "task deleted"
       }
    },
};

module.exports = {
    resolvers
}