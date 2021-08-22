const handOptions = {
  "rock": "images/icon-rock.svg",
  "paper": "images/icon-paper.svg",
  "scissors": "images/icon-scissors.svg"
}

let Score = 0;

const pickUserHand = (hand) => {
  console.log("User: ", hand);

  //1: hide to current page
  let hands = document.querySelector('.hands');
  hands.style.display = "none";
  //2: show the next page with the hand you picked
  const contest = document.querySelector('.contest');
  contest.style.display = "flex";

  //3: Set the user pick
  document.getElementById("userPickImage").src = handOptions[hand];

  let cpHand = pickComputerHand();
  referee(hand, cpHand);

}

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];
  document.getElementById("computerhand").src = handOptions[cpHand];
  return cpHand;
}

const referee = (userHand, cpHand) => {

  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSER");
  }
  else if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(Score + 1);
  }
  else if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  else if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(Score + 1);
  }
  else if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSER");
  }
  else if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  else if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  else if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSER");
  }
  else if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(Score + 1);
  }
}

const restartGame = () => {
  //1: hide to current page
  let hands = document.querySelector('.hands');
  hands.style.display = "flex";
  //2: show the next page with the hand you picked
  const contest = document.querySelector('.contest');
  contest.style.display = "none";
  // document.querySelector(".score h1").textContent = "0";
}

const setDecision = (decision) => {
  console.log("Decision: ", decision);
  document.querySelector(".decision h1").textContent = decision;
}

const setScore = (score) => {
  Score = score;
  console.log("Score: ", score);
  document.querySelector(".score h1").textContent = score;
}