import { profile } from "console";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

let profilePic = require('../../public/profile-pic.png')

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayBuddy</title>
        <meta name="description" content="A PayPal Redesign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary text-primary-content">
        <div className="navbar bg-">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Pay Buddy</a>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={profilePic} alt="profilePic"></Image>
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>Settings</a></li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="card w-96 bg-primary text-primary-content flex-initial">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
