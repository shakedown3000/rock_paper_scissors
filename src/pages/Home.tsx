import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const rockpaperscissorsArray: string[] = ["Rock", "Paper", "Scissors"];
  const [yourResult, setYourResult] = useState<string>();
  const [cpuResult, setCpuResult] = useState<string>();
  const [roundsWinner, setRoundsWinner] = useState<string>();
  const [yourScore, setYourScore] = useState<number>(0);
  const [cpuScore, setCpuScore] = useState<number>(0);
  const [numberOfRounds, setNumberOfRounds] = useState<number>(0);
  const [allRoundsWinner, setAllRoundsWinner] = useState<string>("");

  useEffect(() => {
    if (cpuScore === 3 || yourScore === 3) {
      checkWinner();
    }
  }, [cpuScore, yourScore]);

  function cpuPlays(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function checkWinner() {
    console.log("Check Winner Function activated");
    if (yourScore > cpuScore) {
      setAllRoundsWinner("You! Next round?");
    } else if (yourScore < cpuScore) {
      setAllRoundsWinner("The computer! Next round?");
    } else {
      setAllRoundsWinner("It is a tie! Next round?");
    }
  }

  function restartGame() {
    setCpuResult("");
    setCpuScore(0);
    setYourResult("");
    setYourScore(0);
    setNumberOfRounds(0);
    setRoundsWinner("");
    setAllRoundsWinner("");
  }

  const playGame = (yourChoice: string) => {
    if (cpuScore === 3 || yourScore === 3) {
      alert("We have a winner");
      return;
    }
    console.log(`You chose: ${yourChoice}`);
    const computersChoice: string = cpuPlays(rockpaperscissorsArray);
    setYourResult(yourChoice);
    setCpuResult(computersChoice);
    console.log(`The computer chose: ${computersChoice}`);
    const combinedChoices = `${yourChoice}-${computersChoice}`;
    // Auswerten, wer gewonnen hat:
    switch (combinedChoices) {
      // I win (first value wins)
      case "Rock-Scissors":
      case "Scissors-Paper":
      case "Paper-Rock":
        console.log("You won.");
        setRoundsWinner(" You won this round! 🥳");
        setYourScore(yourScore + 1);
        break;
      // CPU wins (last Value wins)
      case "Scissors-Rock":
      case "Paper-Scissors":
      case "Rock-Paper":
        console.log("CPU won");
        setRoundsWinner(" The computer won this round! 💻");
        setCpuScore(cpuScore + 1);
        break;
      default:
        console.log("It's a tie!");
        setRoundsWinner(" It's a tie! 😮");
    }

    setNumberOfRounds(numberOfRounds + 1);
  };

  return (
    <>
      <section className="game">
        <h1>Rock, Paper, Scissors</h1>
        <h2>Whoever gets 3 points first wins. Choose your weapon:</h2>
        <p id="you_chose" className="answer">
          You chose: <span> {yourResult}</span>
        </p>
        <p id="cpu_chose" className="answer">
          The Computer chose: <span> {cpuResult}</span>
          <br></br>
          <br></br>
        </p>
        <p id="result" className="answer">
          Result:
          <span> {roundsWinner}</span>
        </p>
        <div className="rockpaperscissors">
          <div onClick={() => playGame("Rock")} className="rock push">
            Rock
          </div>
          <div onClick={() => playGame("Paper")} className="paper push">
            Paper
          </div>
          <div onClick={() => playGame("Scissors")} className="scissors push">
            Scissors
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Your Score</th>
                <th>CPU Score</th>
                <th>Number of Rounds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{yourScore}</td>
                <td>{cpuScore}</td>
                <td>{numberOfRounds}</td>
              </tr>
            </tbody>
          </table>
          <p>
            The overall winner is: <span>{allRoundsWinner}</span>
          </p>
        </div>
        <div className="restart" onClick={restartGame}>
          Restart Game
        </div>
      </section>
    </>
  );
};

export default Home;
