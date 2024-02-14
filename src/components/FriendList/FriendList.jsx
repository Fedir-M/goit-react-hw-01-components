import PropTypes from 'prop-types';
import s from '../FriendList/FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className="friendsWrapper">
      <ul className={s.friendList}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      friend: PropTypes.object.isRequired,
    })
  ),
};
