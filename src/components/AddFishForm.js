import React from 'react';

export default class AddFishForm extends React.Component {
    constructor() {
        super();
        this.createFish = this.createFish.bind(this);
    }
    createFish(event) {
        event.preventDefault();
        console.log("Lets make some fish");

        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
        }
        this.props.addFish(fish);
        this.fishForm.reset();
    }
    render() {
        return(
            <form ref={input => this.fishForm = input} className = "fish-edit" onSubmit={this.createFish}>
                <input ref={(input => this.name = input)} type="text" placeholder="name"/>
                <input ref={(input => this.price = input)} type="text" placeholder="price"/>
                <select ref={input => this.status = input}>
                    <option value="available">Fresh!</option>
                    <option value="soldout">Sold Out!</option>
                </select>
                <textarea ref={input => this.desc = input} placeholder="Item description"/>
                <input ref={input => this.image = input} type="text" placeholder="image"/>
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}