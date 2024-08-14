import Icon from '@mdi/react';
import { mdiMapMarker, mdiPhone, mdiEmail } from '@mdi/js';

export default function PersonalInfoContainer(props) {
  return (
    <div className="infoCont">
      <div className="addressCont">
        <Icon path={mdiMapMarker} size={1} className="Icon" />
        <p>{props.address}</p>
      </div>
      <div className="phoneCont">
        <Icon path={mdiPhone} size={1} className="Icon" />
        <p>{props.phone}</p>
      </div>
      <div className="emailCont">
        <Icon path={mdiEmail} size={1} className="Icon" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
