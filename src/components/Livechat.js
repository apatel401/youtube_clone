/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../utils/chatSlice";
import Chatmsg from "./Chatmsg";

const Livechat = () => {
  const [liveMsg, setLiveMsg] = useState("")
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  //!API Polling
  useEffect(() => {
    const apiPolling = setInterval(() => {
      // console.log("api polling");
      dispatch(
        addMsg({
          name: generateRandomName() + " " + generateRandomName(),
          message: Math.random().toString(36).slice(2, 10),
          id: Math.floor(Math.random() * 90000) + 10000,
        })
      );
    }, 5000);

    return () => {
      clearInterval(apiPolling);
    };
  }, []);

  const generateRandomName = () => {
    const nameList = [
      "Time",
      "Past",
      "Future",
      "Dev",
      "Fly",
      "Flying",
      "Soar",
      "Soaring",
      "Power",
      "Falling",
      "Fall",
      "Jump",
      "Cliff",
      "Mountain",
      "Rend",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Gold",
      "Demon",
      "Demonic",
      "Panda",
      "Cat",
      "Kitty",
      "Kitten",
      "Zero",
      "Memory",
      "Trooper",
      "XX",
      "Bandit",
      "Fear",
      "Light",
      "Glow",
      "Tread",
      "Deep",
      "Deeper",
      "Deepest",
      "Mine",
      "Your",
      "Worst",
      "Enemy",
      "Hostile",
      "Force",
      "Video",
      "Game",
      "Donkey",
      "Mule",
      "Colt",
      "Cult",
      "Cultist",
      "Magnum",
      "Gun",
      "Assault",
      "Recon",
      "Trap",
      "Trapper",
      "Redeem",
      "Code",
      "Script",
      "Writer",
      "Near",
      "Close",
      "Open",
      "Cube",
      "Circle",
      "Geo",
      "Genome",
      "Germ",
      "Spaz",
      "Shot",
      "Echo",
      "Beta",
      "Alpha",
      "Gamma",
      "Omega",
      "Seal",
      "Squid",
      "Money",
      "Cash",
      "Lord",
      "King",
      "Duke",
      "Rest",
      "Fire",
      "Flame",
      "Morrow",
      "Break",
      "Breaker",
      "Numb",
      "Ice",
      "Cold",
      "Rotten",
      "Sick",
      "Sickly",
      "Janitor",
      "Camel",
      "Rooster",
      "Sand",
      "Desert",
      "Dessert",
      "Hurdle",
      "Racer",
      "Eraser",
      "Erase",
      "Big",
      "Small",
      "Short",
      "Tall",
      "Sith",
      "Bounty",
      "Hunter",
      "Cracked",
      "Broken",
      "Sad",
      "Happy",
      "Joy",
      "Joyful",
      "Crimson",
      "Destiny",
      "Deceit",
      "Lies",
      "Lie",
      "Honest",
      "Destined",
      "Bloxxer",
      "Hawk",
      "Eagle",
      "Hawker",
      "Walker",
      "Zombie",
      "Sarge",
      "Capt",
      "Captain",
      "Punch",
      "One",
      "Two",
      "Uno",
      "Slice",
      "Slash",
      "Melt",
      "Melted",
      "Melting",
      "Fell",
      "Wolf",
      "Hound",
      "Legacy",
      "Sharp",
      "Dead",
      "Mew",
      "Chuckle",
      "Bubba",
      "Bubble",
      "Sandwich",
      "Smasher",
      "Extreme",
      "Multi",
      "Universe",
      "Ultimate",
      "Death",
      "Ready",
      "Monkey",
      "Elevator",
      "Wrench",
      "Grease",
      "Head",
      "Theme",
      "Grand",
      "Cool",
      "Kid",
      "Boy",
      "Girl",
      "Vortex",
      "Paradox",
    ];
    return nameList[Math.floor(Math.random() * nameList.length)];
  };
  return (
    <>
    <div className="flex flex-col-reverse ml-2 p-2 border h-[500px] w-full rounded-lg bg-slate-100 overflow-y-scroll">
      {chatMessages &&
        chatMessages.map((c, index) => {
          return <Chatmsg key={c.id} name={c.name} message={c.message} />;
        })}
    </div>
    <form 
    className="ml-2 p-2 w-full" 
    onSubmit={
      e => {e.preventDefault();
      dispatch(
        addMsg({
          name: "Akash Patel",
          message: liveMsg,
          id: Math.floor(Math.random() * 90000) + 10000,
        })
      );
      setLiveMsg("")
      }
      }>
      <input className="border w-3/4 p-1" value={liveMsg} type='text' onChange={(e) => setLiveMsg(e.target.value)} />
      <button className="ml-2 p-1 bg-gray-100" type="submit">Send</button>
    </form>
    </>
  );
};

export default Livechat;
