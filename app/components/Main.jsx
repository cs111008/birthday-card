import React from 'react';

class Main extends React.Component {
  componentDidMount () {
          (function() {
        function $(id) {
          return document.getElementById(id);
        }

        var card = $('card'),
            openB = $('open'),
            closeB = $('close'),
            timer = null;
        console.log('wat', card);
        openB.addEventListener('click', function () {
          card.setAttribute('class', 'open-half');
          if (timer) clearTimeout(timer);
          timer = setTimeout(function () {
            card.setAttribute('class', 'open-fully');
            timer = null;
          }, 1000);
        });

        closeB.addEventListener('click', function () {
          card.setAttribute('class', 'close-half');
          if (timer) clearTimerout(timer);
          timer = setTimeout(function () {
            card.setAttribute('class', '');
            timer = null;
          }, 1000);
        });

      }());

  }
  render () {
    return (
       <div id="card">
            <div id="card-inside">
            <div className="wrap">
                <p>Hey Jeevan,</p>
                <p>Many Many Happy Returns of the day....<br /> <code>&nbsp;&nbsp; Happy Birth Day To You..</code> </p>
                
                
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p className="signed">- Aman Soni</p>
                
            </div>
            </div>

            <div id="card-front">
            <div className="wrap">
                <h1>Happy Birthday!</h1>
                <img src={require("./../images/m3.png")}/>
            </div>
            <button id="open">&gt;</button>
            <button id="close">&lt;</button>
            </div>
        </div>
        
    )
  }
};

module.exports = Main;
