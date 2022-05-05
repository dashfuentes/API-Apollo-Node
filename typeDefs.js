const { gql } = require( "apollo-server-express" );

const typeDefs = gql`

type Query {
    hello: String,
    getAllTasks: [Task] 
  },

  type Task {
    id: String
    title: String ,
    description: String
  }
  
  input TaskInput{
    title: String ,
    description: String
  }

  type Mutation{
    createTask(task: TaskInput): Task
    updateTask(id: ID,task: TaskInput):Task
    deleteTask(id: ID): String
  }

`;

module.exports = {
    typeDefs
}