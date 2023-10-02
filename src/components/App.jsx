import { FriendList } from './FriendList/FriendList';
import { GlobalStyle } from './GlobalStyles.js';
import { Information } from './Information/Information';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from './data.json';
import friends from './friends';
import transactions from './transactions';
import user from './user.json';

export const App = () => {
  return (
    <div>
      <div>
        <GlobalStyle />
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
      </div>
      <div>
        <Information stats={user.stats} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
