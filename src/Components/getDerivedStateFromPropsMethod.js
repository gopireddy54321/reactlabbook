import React from 'react'

export class ChildComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          name: 'Constructor Method'
        }
      }

    static getDerivedStateFromProps(props, state) {
        return {name: props.nameFromParent} 
      }
    render() {
        return (
            <div>
                This is a {this.state.name}
            </div>
        )
    }
}


export default class getDerivedStateFromPropsMethod extends React.Component {
   
    render() {
        return (
            <div>
                <ChildComponent nameFromParent="getDerivedStateFromProps Method"/>
            </div>
        )
    }
}