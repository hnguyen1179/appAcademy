class View {
  constructor(game, $el) {
    this.game=game
    this.el=$el
  }

  bindEvents() {
    $('li').on('click', (e)=>{
      // this.game.playMove(e.target.attr('id'))
      // let move = Array.from($(e.target).attr('id'));
      let pos=([parseInt($(e.target).attr('id')[1]),parseInt($(e.target).attr('id')[3])]);
      this.game.playMove(pos);
      this.makeMove($(e.target));
    });
  }

  makeMove($square) {
    $square.removeClass('unclicked');
    $square.html(this.game.currentPlayer);
    $square.css('display', 'flex');
    $square.css('align-items', 'center');
    $square.css('justify-content', 'center');
    $square.css('font', 'italic small-caps bold 100px Georgia, sans-serif');

    if (this.game.isOver()) {
      console.log('hi');
      $('h2').html(this.game.currentPlayer + ' is the winner');
      $('li').css('background-color', 'green');


      $('li').each( (el) => {
        console.log('hi');
        console.log(el);
        // el.html('disabled', true);
        // if ($(el).val() === this.game.currentPlayer) {
        //   $(el).css('color', 'white');
        // }
      });
    }
  }

  setupBoard() {
    const fig = this.el.html('<ul></ul>');
    const ul = $('ul'); 

    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        $('ul').append(`<li id=[${i},${j}] class=unclicked></li>`);
      }
    }
    
    fig.css('display', 'flex');
    fig.css('justify-content', 'center');
    $('h1').css('text-align', 'center');
    $('h1').css('font', 'italic small-caps bold 50px Georgia, sans-serif');
    ul.css('display', 'flex');
    ul.css('flex-wrap','wrap');
    ul.css('width','450px');
    ul.css('border', '10px solid black');
    $('li').css('width','140px');
    $('li').css('height','150px');
    $('li').css('border','5px solid black');
    $('li').css('list-style','none');
  }
}

module.exports = View;
