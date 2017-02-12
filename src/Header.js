import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.hendleHeaderClicked = this.hendleHeaderClicked.bind(this)
    }

    hendleHeaderClicked(){
        alert(this.props.currentUser);
    }
    render(){
        let { currentUser , isLoggedIn} = this.props;
        currentUser = `Login By ${currentUser}`;

        return(
            <div onClick={this.hendleHeaderClicked}>Header Test {isLoggedIn && currentUser}</div>
        )
    }
}

export default Header;