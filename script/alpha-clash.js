// function play(){
//      // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//      //     homeSection.classList.add('hidden');
//      //     // console.log(homeSection.classList)
     
//      const homeSection = document.getElementById('home-screen');
//      //  console.log(homeSection.classList);
//      homeSection.classList.add('hidden');

//      // show the playground
//      const playgroundSection = document.getElementById('play-ground');
//     //  console.log('playground section');
//     // console.log(playgroundSection.classList);
//     playgroundSection.classList.remove('hidden');
//     }

function ContinueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log( 'Your random Alphabet is : ', alphabet);

}


    function play() {
        hideElementById('home-screen');
        showElementById('play-ground');
        ContinueGame ()
    }