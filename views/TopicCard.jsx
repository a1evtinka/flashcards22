
const React = require('react');

module.exports = function TopicCard({ topic }) {
  return (
    <button data-topic_id={topic.id} type="button" className="btn btn-primary">{topic.title}</button>
  );
};
