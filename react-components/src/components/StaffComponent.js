import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffSelected: null
        }
    }
    render() {
        const listStaff = this.props.staffs.map((staff) => {
            return (
                <div className='col-12 col-md-5 col-xl-3 m-1'>
                    <Card key={staff.id}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            )
        });
        return (
            <div className='container'>
                <div className='row'>
                    {listStaff}
                </div>
            </div>
        );
    }
}
export default Staff;