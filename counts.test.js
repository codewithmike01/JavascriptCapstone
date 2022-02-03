/**
 * @jest-environment jsdom
 */

import commentCount from './src/module/commentCount.js';
document.body.innerHTML = `<header>
<nav class="navigation-bar">
  <h2>KanBan Board</h2>
  <ul>
    <li><a class="active" href="#">Spaceships</a></li>
    <li><a href="#">Planets</a></li>
    <li><a href="#">Races</a></li>
  </ul>
</nav>
</header>
<main>
<div class="grid-container" id="list-items"></div>
</main>
<!-- PopUp to be rendered Dynamically -->
<section class="pop-ups hide"></section>
<hr />
<footer><h4>Copyright© 2022</h4></footer>`;

describe('Test comment Count', () => {
  test('count comment', () => {
    const test = ['li', 'li', 'li'];

    const testLength = test.length;
    const response = commentCount(test);

    expect(response).toBe(testLength);
  });
});
