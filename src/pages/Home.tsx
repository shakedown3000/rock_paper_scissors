import "./Home.css";
import { useState } from "react";

const Home = () => {
  const rockpaperscissorsArray: string[] = ["Rock", "Paper", "Scissors"];
  const [myResult, setMyResult] = useState<string>();
  const [cpuResult, setCpuResult] = useState<string>();
  const [roundsWinner, setRoundsWinner] = useState<string>();

  function cpuPlays(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const playGame = (yourChoice: string) => {
    console.log(`You chose: ${yourChoice}`);
    const computersChoice: string = cpuPlays(rockpaperscissorsArray);
    setMyResult(yourChoice);
    setCpuResult(computersChoice);
    console.log(`The computer chose: ${computersChoice}`);
    const combinedChoices = `${yourChoice}-${computersChoice}`;
    switch (combinedChoices) {
      // I win (first value wins)
      case "Rock-Scissors":
      case "Scissors-Paper":
      case "Paper-Rock":
        console.log("You won.");
        setRoundsWinner(" You won this round! 🥳");
        break;
      // CPU wins (last Value wins)
      case "Scissors-Rock":
      case "Paper-Scissors":
      case "Rock-Paper":
        console.log("CPU won");
        setRoundsWinner(" The computer won this round! 💻");
        break;
      default:
        console.log("It's a tie!");
        setRoundsWinner(" It's a tie! 😮");
    }
  };

  return (
    <>
      <section className="game">
        <h1>Rock, Paper, Scissors</h1>
        <h2>Choose your weapon:</h2>
        <p id="you_chose" className="answer">
          You chose: <span> {myResult}</span>
        </p>
        <p id="cpu_chose" className="answer">
          The CPU chose: <span> {cpuResult}</span>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="restart">Restart Game</div>
      </section>
    </>
  );
};

export default Home;
