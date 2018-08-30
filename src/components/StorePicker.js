import React from 'react';
import { getFunName } from '../helpers';
import { PropTypes } from 'prop-types';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    goToStore(event) {
        event.preventDefault();
        console.log("Going to store");
        const storeID = this.storeInput.value;
        console.log({storeID});
        this.props.history.push(`/store/${storeID}`);
    }
    
    render() {
        return(
            <form className = "store-selector" onSubmit = {this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit store -></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: PropTypes.object
}
export default StorePicker;