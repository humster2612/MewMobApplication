import React from 'react';
import s from './PageContent.module.css';
import BannerContent from './BannerContent/BannerContent';
import InfoBanner from './BannerContent/InfoBanner/InfoBanner';
import Infometa from './BannerContent/Infometa/Infometa';
import Preloader from '../Coomon/Preloader/Preloader';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title:'Yo'
    };

    activateEditMode = () => {
        this.setState({ 
          editMode: true })
    };
    

    deactivateEditMode = () => {
      this.setState({ 
        editMode: false })
  };
  

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
