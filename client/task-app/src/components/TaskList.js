import { gql, useQuery, useMutation  } from '@apollo/client';


export const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

export default function MessageList() {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading Messages...</p>;

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data.messages.map(({ _id, title, content, author }) => (
          <div key={_id} className="card m-2">
            <div className="card-body">
              <h4>{title}</h4>
              <p>{content}</p>
              <p>{author}</p>
              <button className="btn btn-danger" >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
