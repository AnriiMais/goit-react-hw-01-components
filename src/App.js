import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics';
import statisticsData from './Statistics/statistical-data.json';
import FriendList from './FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

import './App.css';
function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
