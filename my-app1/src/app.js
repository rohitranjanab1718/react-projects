import React,{Component} from 'react';
import Form from './form';
import Activeitems from './activeitems';
import Completeditems from './completeditems';
class App extends Component{
    state={
        Tasks:[]
    }
    handleChecks(id){
        let allTasks=this.state.Tasks;
        let itemIndex;
        allTasks.forEach(function(eachTask,index){
            if(eachTask.id===id){
                itemIndex=index;
            }
        }
        )
        console.log(itemIndex);
        allTasks[itemIndex].status=1; 
        this.setState({Tasks:allTasks});
       // console.log(this.state.Tasks); 
    }
    handleSubmit(e){
        let title=document.querySelector("#task").value;
        let allTasks=this.state.Tasks;
        allTasks.push({id:Date.now(),title:title,status:0});
        this.setState({Tasks:allTasks});
        console.log(this.state.Tasks);
        e.preventDefault();
    }
    render(){
        return(
        <div>
            <nav className="navbar bg-primary">
            <h4 className="navbar-brand text-white">todo app</h4>
            </nav>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <Form handleSubmit={this.handleSubmit.bind(this)}/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <h3>Active tasks</h3>
                        <Activeitems items={this.state.Tasks} handleChecks={this.handleChecks.bind(this)}/>
                    </div>
                    <div className="col-6">
                        <h3>completed tasks</h3>
                        <Completeditems items={this.state.Tasks}/>
                    </div>
                </div>
            </div>
        </div>
        );      
    }
}
export default App;