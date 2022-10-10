import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const green = css.isOnline;
  const red = css.ofline;
  const status = isOnline ? green : red;

  return (
    <li className={css.item}>
      <span className={status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.proTotype = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};

export default FriendListItem;
