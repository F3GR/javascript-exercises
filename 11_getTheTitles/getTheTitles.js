const getTheTitles = function(obj) {
    return obj.map(item => item.title);
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books));
console.log(books);

// Do not edit below this line
module.exports = getTheTitles;
