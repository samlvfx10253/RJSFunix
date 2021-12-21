import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardHeader, CardImg } from 'reactstrap';

class StaffDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.staff != null) {
            return (
                <div className="container">
                    <Card>
                        <CardHeader tag='h2'>Thông tin chi tiết</CardHeader>
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <CardImg top src={this.props.staff.image} alt={this.props.staff.name} />
                            </div>
                            <div className="col-12 col-md-9">
                                <CardBody>
                                    <CardTitle tag='h4'>{this.props.staff.name}</CardTitle>
                                    <ul className="list-unstyled">
                                        <li><p>Phòng ban: {this.props.staff.department.name}</p></li>
                                        <li><p>Chức vụ: {this.props.staff.role}</p></li>
                                        <li><p>Ngày sinh: {new Intl.DateTimeFormat('en-GB')
                                            .format(new Date(this.props.staff.doB))}
                                        </p></li>
                                        <li><p>Ngày vào công ty: {new Intl.DateTimeFormat('en-GB')
                                            .format(new Date(this.props.staff.startDate))}</p></li>
                                        <li><p>Số ngày nghỉ còn lại: {this.props.staff.annualLeave}</p></li>
                                        <li><p>Số ngày đã làm thêm: {this.props.staff.overTime}</p></li>
                                    </ul>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
            )
        }
        else {
            return (<></>)
        }
    }
}
export default StaffDetail;