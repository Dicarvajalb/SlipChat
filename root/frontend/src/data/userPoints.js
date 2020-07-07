class userPoints{
  constructor(user, score){
    this.user = user
    this.score = score
  }

  compareTo(rival){
    if(this.score < rival.score) return -1; 
    if(this.score > rival.score) return 1;
    return 0
  }
}

module.exports = userPoints;