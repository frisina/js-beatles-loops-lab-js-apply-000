// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++)
  {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var emptyArray = []
  var i = 0;
  while (i < facts.length) {
    emptyArray.push(facts[i] + "!!!");
    i++;
  }
  return emptyArray;
}

function iLoveTheBeatles(number) {
  var i = 0;
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    i++;
  }
  while (i < 15);
  return emptyArray;
}
