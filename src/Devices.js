import React from "react";
import { createSelector } from "reselect";
import { connect } from "react-redux";

let count = 0;

class Devices extends React.Component {
  render() {
    console.log(`Devices render ${++count}`);
    return (
      <div>
        <h3>Devices</h3>
        <ul>
          {this.props.devices.map((x) => (
            <li
              key={x.id}
            >{`${x.title} - ${x.user.first} ${x.user.last} - ${x.connectionState}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const getDeviceListing = createSelector(
  (state) => state.devicesById,
  (state) => state.usersById,
  (state) => state.deviceListing,
  (devices, users, listing) => {
    //console.log(devices);
    //console.log(listing);
    return listing.map((id) => {
      const device = devices[id];
      return { ...device, user: users[device.author] };
    });
  }
);

const mapState = (state) => {
  return { devices: getDeviceListing(state) };
};

export default connect(mapState)(Devices);
