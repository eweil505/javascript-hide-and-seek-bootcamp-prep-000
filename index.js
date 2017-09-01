// - Define a function `getFirstSelector(selector)`, which accepts a selector
// and returns the first element that matches.
// - Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
// (`#` is used for IDs in selectors)
// - Define a function `increaseRankBy(n)` that increases the ranks in all of
// the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`])
// - Define a function `deepestChild()` that pulls out the most deeply nested child
// from `div#grand-node`. (Remember, you can iterate over elements and call
// `querySelector()` and `querySelectorAll()` on them. This is challenging to
// implement correctly, but not beyond your ability!)

function getFirstSelector(selector) {
  const first = document.querySelector(`${selector}`);
  return first;
}

function nestedTarget() {
  const target = document.querySelector('#nested div.target');
  return target;
}

function increaseRankBy(n) {
  const rankedLis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedLis.length; i++) {
    var innerEl = rankedLis[i].innerHTML;
    innerEl = (parseInt(innerEl) + n).toString();
    rankedLis[i].innerHTML = innerEl;
  }
}

function deepestChild() {
  let current = document.querySelectorAll('div#grand-node')
  let next = current.children[0];
  debugger;
  while (next) {
      current = next;
      next = next.children[0];
    }

  return current;

}
