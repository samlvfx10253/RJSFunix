import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import StaffDetail from './StaffDetailComponent';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null
        }
    }
    onSelectedStaff(staff) {
        this.setState({ selectedStaff: staff })
    }
    render() {
        const listStaff = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className='col-12 col-md-5 col-xl-3 m-1'>
                    <Card className='card-container' key={staff.id}
                        style={{cursor: "pointer"}}
                        onClick={() => this.onSelectedStaff(staff)}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            )
        });
        return (
            <div className='container'>
                <h2>Danh sách nhân viên</h2>
                <div className='row'>
                    {listStaff}
                </div>
                <StaffDetail staff={this.state.selectedStaff} />
            </div>
        );
    }
}
export default Staff;