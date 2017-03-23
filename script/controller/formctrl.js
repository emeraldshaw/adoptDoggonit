var app = angular.module("badaBingBadaBoom");

app.controller("formCtrl", ["$scope", "adoptFactory", "$location", function($scope, adoptFactory, $location){

  var questans0={ //what kind of housing does the user have?
  	question:"Which best describes where you live?",
  	answer1:"An affordable studio apartment in the city",
  	answer2:"A bungalow in the 'burbs",
  	answer3:"A fancy-schmancy mansion with a butler and all",
  	answer4:"A farm",
  	image:"",
  	imageattribution:"",
  };
  var questans1={ //what is the user's work schedule?
  	question:"Which of these best decribes your after-work routine?",
  	answer1:"I'm my own boss! I don't need no routines!",
  	answer2:"Cooking dinner and then watching some TV",
  	answer3:"Happy hour!!!!!!!!!!!!!!!!!!!",
  	answer4:"Hopping in the bed immediately! I'm beat!",
  	image:"",
  	imageattribution:"",
  };
  var questans2={ //how willing is the user to train?
  	question:"How thin is your patience?",
  	answer1:"Too thin for this quiz!",
  	answer2:"Eh, I'm kind of impatient",
  	answer3:"I'm fairly patient",
  	answer4:"I'm actually a really patient person!",
  	image:"",
  	imageattribution:"",
  };
  var questans3={ //how often would the user walk their dog?
  	question:"What kind of shoes do you own?",
  	answer1:"Nothing but heels, sis!",
  	answer2:"Loafers and like one pair of sneakers",
  	answer3:"Just picked up a pair of Nike Flynits! Dope!",
  	answer4:"I have like 5 pairs of hiking boots",
  	image:"",
  	imageattribution:"",
  };
  var questans4={ //how much yard space does the user have?
  	question:"How fond of cutting grass are you?",
  	answer1:"What grass?",
  	answer2:"Not my favorite but I get it done",
  	answer3:"Psh, I pay a lawncare service",
  	answer4:"Ride-on mowers for life!",
  	image:"",
  	imageattribution:"",
  };
  var questans5={ //how often does the user travel?
  	question:"Choose a vacay:",
  	answer1:"Flying out to some trendy island",
  	answer2:"Honestly, I'm cool staying home with snacks and Hulu",
  	answer3:"I go to my family reunion every year. Does that count?",
  	answer4:"Camping!",
  	image:"",
  	imageattribution:"",
  };
  var questans6={ //is the user disabled?
  	question:"What are your thoughts on ableism?",
  	answer1:"As a person with a disablity, I'm complete anti-ableism!",
  	answer2:"Yea, ableism ain't cool",
  	answer3:"I use Tumblr, so I've heard it's bad",
  	answer4:"What's ableism? (you're probably an ableist, bruh)",
  	image:"",
  	imageattribution:"",
  };
  var questans7={ //how active is the user?
  	question:"You setting off the lunk alarm, or nah?",
  	answer1:"The what???",
  	answer2:"Huh?",
  	answer3:"No, but I've seen some jerks do it",
  	answer4:"Bro, do you even lift!?",
  	image:"",
  	imageattribution:"",
  };
  var questans8={ //is the user an extrovert or an introvert?
  	question:"Which Beyoncé are you?",
  	answer1:"Beyoncé as Lily in Fighting Temptations",
  	answer2:"Beyoncé as Carmen in Carmen: A Hip-Hopera",
  	answer3:"Beyoncé as Deena Jones in Dreamgirls",
  	answer4:"Beyoncé as her real life self",
  	image:"",
  	imageattribution:"",
  };
  var questans9={ //does the user have a pet gender preference?
  	question:"Pick a color:",
  	answer1:"Pink",
  	answer2:"Navy blue",
  	answer3:"Green",
  	answer4:"Purple",
  	image:"",
  	imageattribution:"",
  };

  var allquestans=new Array();
  allquestans[0]=questans0;
  allquestans[1]=questans1;
  allquestans[2]=questans2;
  allquestans[3]=questans3;
  allquestans[4]=questans4;
  allquestans[5]=questans5;
  allquestans[6]=questans6;
  allquestans[7]=questans7;
  allquestans[8]=questans8;
  allquestans[9]=questans9;

  function nextquestion(variable) {
  	document.getElementById("question").innerHTML=variable.question;
  	document.getElementById("choice1").innerHTML=variable.answer1;
  	document.getElementById("choice2").innerHTML=variable.answer2;
  	document.getElementById("choice3").innerHTML=variable.answer3;
  	document.getElementById("choice4").innerHTML=variable.answer4;
  }

}]);
