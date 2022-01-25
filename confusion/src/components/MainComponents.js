import React, { Component } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }
    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
            );
        }

        const DishWithId = () => {
            let match = useParams();
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.dishId, 10))} />
            )
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                    <Route exact path='/contactus' element={<Contact />} />
                    <Route exact path='/aboutus' element={<About leaders={this.state.leaders} />} />
                    <Route exact path='/menu/:dishId' element={<DishWithId />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}
export default Main;