currentFlashCard = 0;
const flashcardsList = [];

const [flashcardContainer] = document.getElementsByClassName('flashcard');
const [answerForm] = document.getElementsByClassName('flashcard');

// answerForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   currentFlashCard += 1;
//   flashcardContainer.innerHTML = form(flashcardsList[currentFlashCard].question);
// });

function form(question = '') {
  return `<form>
  <div class="form-group">
    <label for="question">${question}</label>
    <input type="text" class="form-control" id="question" placeholder="Введите ответ">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
}

const [divContainer] = document.getElementsByClassName('topic');
divContainer.addEventListener('click',
  async (event) => {
    // event.preventDefault();
    let topic_id = Number(event.target.dataset.topic_id);
    if (!isNaN(topic_id) && topic_id > 0) {
      const response = await fetch(`/topic/${topic_id}`, { method: 'GET' });
      if (response.status === 200) {
        const { data:flashcards } = await response.json();
        if (flashcards.length > 0) {
          // flashcardsList = await flashcards;
          flashcardContainer.innerHTML = form(flashcards[currentFlashCard].question);
        }
      }
    }
  }
);
