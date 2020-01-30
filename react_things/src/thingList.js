import React from 'react';

export default class ThingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            thingList = [
                {name:'Something'}
            ]
        }
    }
}