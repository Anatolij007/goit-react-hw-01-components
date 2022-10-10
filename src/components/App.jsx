import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Statistics title="Upload stats" stats={data} />
          <FriendList friends={friends} />
        </div>
      </div>
      <TransactionHistory items={transactions} />
    </div>
  );
};
