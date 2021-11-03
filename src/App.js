import Profile from './components/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics';
import statisticsData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

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
      <Statistics stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
