import React, { Component } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
            );
        }

        const DishWithId = () => {
            let match = useParams();
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.dishId, 10))} />
            )
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route exact path='/menu' element={<Menu dishes={this.props.dishes} />} />
                    <Route exact path='/contactus' element={<Contact />} />
                    <Route exact path='/aboutus' element={<About leaders={this.props.leaders} />} />
                    <Route exact path='/menu/:dishId' element={<DishWithId />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}
// withRouter in v6  is deprecated
const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();
        return (
            <Component
                history={history}
                {...props}
            />
        );
    };

    return Wrapper;
};
export default withRouter(connect(mapStateToProps)(Main));
