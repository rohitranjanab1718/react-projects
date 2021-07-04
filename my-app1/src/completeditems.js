import React, { Component } from 'react';
class Completeditems extends Component{
    state={};
    render(){
        let tasks=this.props.items;
        return(
            tasks.map((item,index)=>{
                if(item.status===1){
                    return <div key={index} className="mt-3">    
                        <div className="card">
                            <div className="card-body">
                                <h5>{item.title}</h5>
                            </div>
                        </div> 
                </div>}
                }
            )
        )
    }
}
export default Completeditems;