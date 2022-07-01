const React = require('react');

module.exports = function ScoreCard({ user }) {
  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.Games.length}</td>
      <td>{user.Games.reduce((total, game) => total + game.score, 0)}</td>
    </tr>
  );
};
