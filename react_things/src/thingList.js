import React from 'react';

export default class ThingList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemToAdd : ''
        }
        this.lst = props.list;
        this.doneHandler = props.doneHandler
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendDoneHandler = this.sendDoneHandler.bind(this);

    }
    
    handleInputChange(event) {
        const value = event.target.value
        this.setState({
          itemToAdd: value
        });
    }

    sendDoneHandler(event){
        this.doneHandler(event);
        
        this.setState({
            itemToAdd: ''
        })
    }

    render(){
        return(
            <>
                <ul>
                    {this.lst.map(thing => <ListItem key={thing.id} thing={thing}/>)}
                </ul>
                <form onSubmit={this.sendDoneHandler}>
                    <label>
                        Add a thing:
                        <input
                        name="itemToAdd"
                        type="textfield"
                        value={this.state.itemToAdd}
                        onChange={this.handleInputChange}
                        />
                    </label>
                    <button>submit</button>
                </form>
            </>
        )
    }
}

function ListItem(props){
    return <li>{props.thing.name}</li>
  }