import React, { Component } from 'react';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { adminAction, userAction } from '../_action';
import { dateFormatter } from '../_helper';



class UserTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdminFetching: false,
            isUserFetching: false,
            isAdminSuccess: false,
            isUserSuccess: false,
            isUserTableUpdated: false,
            updateCellList: []
        };
    }

    componentDidMount() {
        this.props.dispatch(userAction.getAllUser());
    }

    componentWillReceiveProps(nextProps) {
        // someValue - value which we passed from redux in container
        const { updateCellList } = nextProps;
        console.log(nextProps);
        if (typeof updateCellList !== 'undefined') {
            this.state.updateCellList = updateCellList;
        }
    }

    updateCell = (oldValue, newValue, row, cell) => {
        if (oldValue !== newValue) {
            if (typeof this.state.updateCellList !== 'undefined') {
                var isExist = false;
                for (var updateCell of this.state.updateCellList) {
                    if (updateCell.id === row.id) {
                        isExist = true;
                    }
                }
                if (!isExist) {
                    this.props.dispatch(adminAction.updateUserList(this.state.updateCellList, row));
                }
            }
        }

    };

    save = () => {
        // this.props.dispatch(adminAction.save({ id: 1, name: 'jojo' }));
        this.props.dispatch(adminAction.saveUser(this.state));
    };

    render() {
        const columns = [{
            dataField: 'id',
            text: 'User ID',
            editable: false
        }, {
            dataField: 'name',
            text: 'User Name'
        }, {
            dataField: 'password',
            text: 'User Price',
            editable: false
        }, {
            dataField: 'create_date',
            text: 'Created Date',
            formatter: dateFormatter
        }, {
            dataField: 'modified_date',
            text: 'Updated Date',
            formatter: dateFormatter
        }];
        const { isFetching, isAdminSuccess, isUserSuccess, userList, isUserTableUpdated } = this.props;

        return (
            <>
                <div className='row'>
                    <div className='col-9'>
                        {isAdminSuccess ? 'adminSuccess' : 'adminFailed'}
                        {isUserSuccess ? 'userSuccess' : 'userFailed'}
                    </div>
                    <div className='col-3'>
                        {isUserTableUpdated && <button type="button" className="btn btn-primary" onClick={this.save}>Save</button>}
                        {isFetching &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {userList &&
                            <BootstrapTable keyField='id'
                                data={userList}
                                columns={columns}
                                cellEdit={cellEditFactory({ mode: 'click', afterSaveCell: this.updateCell })}
                            />
                        }
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { isAdminFetching, isAdminSuccess, message, isUserTableUpdated, updateCellList } = state.adminReducer;
    const { isUserFetching, isUserSuccess, userList } = state.userReducer;
    const isFetching = isUserFetching || isAdminFetching;
    return { isFetching, isAdminSuccess, isUserSuccess, userList, isUserTableUpdated, updateCellList };
}

const connectedUserTable = connect(mapStateToProps)(UserTable);
export { connectedUserTable as UserTable };

