var taunts = {
  tauntsList : 
   ["Is that all you got ?",
		"THIS is your best move ??",
		"Thank God you are bald.",
		"A monkey can do better than that. bah.",
    "I am begining to dislike you. :-|",
		"Does you mother know this ?",
		"I refuse to be part of this !",
    "You flatter yourself :-/",
		"Are you this dumb, or are you trying ?",
		"Go play with kindergarten kids !",
		"You go to jail, bad boy !!"],
  totalTaunts : 0,
  init : function () {
     this.totalTaunts = this.tauntsList.length;
  },
  getOne : function () {
      return this.tauntsList[Math.floor(Math.random() * this.totalTaunts)];
	}
};
