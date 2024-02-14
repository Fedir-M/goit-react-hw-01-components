import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const { name, isOnline, avatar } = friend;

  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width={48} />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};


export default FriendListItem;
