var tracker = {
  allGems: [],
  randomGem: function() {
    var x = Math.floor(Math.random() * this.allGems.length);
    return this.allGems[x];
  },
  displayImages: function() {
    do {
      var random1 = tracker.randomGem();
      var random2 = tracker.randomGem();
    } while (random1 === random2);

    header1.innerHTML = random1.name;
    photo1.setAttribute('src', random1.photo);

    header2.innerHTML = random2.name;
    photo2.setAttribute('src', random2.photo);
  },
  voteFor: function(name) {
    for (var i in this.allGems) {
      if (this.allGems[i].name === name) {
        chartData.datasets[0].data[i] = this.allGems[i].votes;
      }
    }
  }
};

function Gem(name, photo) {
  this.name = name;
  this.photo = photo;
  chartData.labels.push(name);
  chartData.datasets[0].data.push(0);
  tracker.allGems.push(this);
}

var chartData = {
  labels: [],
  datasets: [
    {
      label: 'Gem Popularity',
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: []
    }
  ]
};

new Gem('Steven', 'img/steven.png');
new Gem('Rose Quartz', 'img/rosequartz.png');
new Gem('Garnet', 'img/garnet.png');
new Gem('Amethyst', 'img/amethyst.png');
new Gem('Peridot', 'img/peridot.png');
new Gem('Lapis Lazuli', 'img/lapislazuli.png');
new Gem('Stevonnie', 'img/stevonnie.png');
new Gem('Pearl', 'img/pearl.png');
new Gem('Ruby', 'img/ruby.png');
new Gem('Sapphire', 'img/sapphire.png');

var gem1 = document.getElementById('gem1');
var gem2 = document.getElementById('gem2');

var header1 = document.getElementById('gem1header');
var header2 = document.getElementById('gem2header');

var photo1 = document.getElementById('gem1photo');
var photo2 = document.getElementById('gem2photo');

gem1.addEventListener('click', function() {
  tracker.voteFor(header1.innerHTML);
  new Chart(ctx).Bar(chartData);
  tracker.displayImages();
});
gem2.addEventListener('click', function() {
  tracker.voteFor(header2.innerHTML);
  new Chart(ctx).Bar(chartData);
  tracker.displayImages();
});

var ctx = document.getElementById('results').getContext('2d');

tracker.displayImages();
