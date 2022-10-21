import react,{component} from "react";
import Task from "../../frontend/src/component/task";
class users extends component{
    constructor(props){
        super(props)
        this.state={
            usersCollection:[]
        };
    }
    componentDidMount(){
        axios
        .get("http://localhost:8080/users")
        .then((res) =>{
            this.setState({usersCollection: res.data});
        })
        .catch((error) =>{
            console.log(error);
        });
    }
    render(){
        return(
            <div>
                <h1>Users</h1>
            </div>
        );
    }
}
export default Task;