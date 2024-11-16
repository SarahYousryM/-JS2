
var Name=["― Oscar Wilde","― Marilyn Monroe","― Frank Zappa","― Albert Einstein","― Mahatma Gandhi"]
var Text=[
    '“Be yourself; everyone else is already taken.”',
    '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”',
    '“So many books, so little time.”',
    '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
    '“Be the change that you wish to see in the world.”'
]


function randomText(){

    var num = Math.floor(Math.random()*Name.length);

    // console.log(Name[num]);
    // console.log(Text[num]);
    
    document.getElementById("QuoteName").innerHTML = Name[num];
    document.getElementById("NewQuote").innerHTML = Text[num];
}

randomText();



