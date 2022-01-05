import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SertchPanel from "../searth-panel/sertch-panel";
import PostStatusFilter from "../post-status-files/post-ststus-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
             data: [
                {label: 'Going to learn React', important: true, id:"qw"},
                {label: 'That is so good', important: false, id:"as"},
                {label: 'I nedda breake...', important: false, id:"zx"}
            ]
        };
        this.statusIndex = 0;
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }
    onAddItem( e, body) {
        e.preventDefault();
        this.setState(({data})=>{
            const newItem = {
                label: body, important: false, id:`zx${this.statusIndex}`
            };
            const newArr = [...data, newItem];

            this.statusIndex++;
            return {
                data: newArr 
            };
        });
    }

    onDeleteItem(idItem) {
        this.setState(({data}) => {
            const chengeData = data.filter((item) => {
               const {id} = item;
               return id !== idItem;
            });
           
           return {
               data: chengeData
           };
        });
    }
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="searth-panel d-flex">
                    <SertchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete = {(id)=>{this.onDeleteItem(id)}}
                
                />
                <PostAddForm
                    onAdd = {this.onAddItem}
                />
    
            </div>
           
        )
    }
}
