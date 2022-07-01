const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');
const ScoreCard = require('./ScoreCard');

module.exports = function Score({ users }) {
  return (
    <Layout>
      <NavBar></NavBar>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Games</th>
            <th scope="col">Scores</th>
          </tr>
        </thead>
        <tbody>
         {users.map(user =><ScoreCard key={user.id} user={user}/> )}
        </tbody>
      </table>
    </Layout>
  );
};
