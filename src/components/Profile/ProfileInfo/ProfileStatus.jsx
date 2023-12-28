import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deActiveEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

  render() {
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activeEditMode }>{this.state.status || '----------'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deActiveEditMode} value={this.state.status} />
                </div>
            }
        </div>
    )
  };
}

export default ProfileStatus;