import { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state={pick:false,color:"white"};
    }    
    setColor=(index)=>{
        this.setState({
            color:this.props.arr[index],
            pick:false
        })
    }
    getColors=()=>{
        return this.props.arr.map((color,index)=>{
            return <button class="m-2" style={{backgroundColor:this.props.arr[index],width:40,height:40}} onClick={()=>this.setColor(index)} key={index}></button>
        })
    }
    render(){
        return(
            <div className="p-5" >
                <h2>Color Picker</h2>
                <div className="shadow rounded-4 container col-8" style={{height:600,backgroundColor:this.state.color}}>
                    <div class='m-auto'>
                        {(this.state.pick)?this.getColors():null}
                    </div>
                    <button class="text-light" style={{backgroundColor:"#4caf50",width:'150px',height:'36px',fontSize:'18px'}} onClick={()=>this.setState({pick:true})}>Pick Color</button>
                </div>
            </div>
        )
    }
}

{/* className="d-flex justify-content-center align-items-center vh-100" */}