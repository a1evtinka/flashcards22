const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');
const TopicCard = require('./TopicCard');

module.exports = function Main({ topics }) {
  return (
    <Layout>
      <NavBar></NavBar>
      <div className='container topic'>
        {topics.map(topic =><TopicCard key={topic.id} topic={topic} /> )}
      </div>
      <div className='container flashcard'></div>
    </Layout>
  );
};
