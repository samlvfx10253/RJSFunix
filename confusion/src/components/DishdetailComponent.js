import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDetail(props) {
    return (
        <Card>
            <CardImg top src={props.dish.image}
                alt={props.dish.name} />
            <CardBody>
                <CardTitle tag='h6'>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
            </CardBody>
        </Card>
    )
}
function RenderComment(props) {
    if (props != null) {
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {props.comments.map((comment) => {
                        return (
                            <div key={comment.id}>
                                <li>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                                        { year: 'numeric', month: 'short', day: '2-digit' })
                                        .format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else {
        return (<></>)
    }
}
const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDetail dish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderComment comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<></>)
    }
}
export default DishDetail;