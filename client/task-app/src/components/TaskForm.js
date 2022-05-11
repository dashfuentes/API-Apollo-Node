import {useState} from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Navigate, useNavigate } from "react-router-dom";
import {GET_MESSAGES} from './TaskList'
//rafc


//mutation prototype
const CREATE_MESSAGE = gql`
	mutation NewMessage($title: String!, $content: String!, $author: String!){
		createMessage(title: $title, content: $content, author: $author){
			author
		}
	}

	`;


export default function TaskForm() {
	const [content, setContent] = useState( "" );
	const [title, setTitle] = useState( "" );
	const [author, setAuthor] = useState( "" );

	//create mutation
	const [createMessage] = useMutation( CREATE_MESSAGE, {
		//fetch the list of messages for update
		//....[array]
		refetchQueries: [{query: GET_MESSAGES}]
	})

	//redirect
	const navigate = useNavigate()



	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card">
					<div className="card-body">
						<form
							onSubmit=
							{
								async ( e ) => {
									e.preventDefault();
									await createMessage( { variables: { title, author, content } } );
									navigate("/")
								}
								
							}
						>
							<div className="my-2">
								<input
									type="text"
									placeholder="title"
									value={title}
									onChange = {(e) => setTitle(e.target.value)}
									className="form-control"
								/>
							</div>
							<div className="my-2">
								<input
									type="text"
									placeholder="content"
									value={content}
									onChange = {(e) => setContent(e.target.value)}
									className="form-control"
								/>
							</div>
							<div className="my-2">
								<input
									type="text"
									placeholder="author"
									value={author}
									onChange = {(e) => setAuthor(e.target.value)}
									className="form-control"
								/>
							</div>
							<button className="btn btn-success btn-block">Save</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
