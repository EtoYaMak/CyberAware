import React from "react";
import { FaBug } from "react-icons/fa";
import { GiHook } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { Tb123 } from "react-icons/tb";
import { FaPersonShelter } from "react-icons/fa6";

const Protection: React.FC = () => {
  return (
    <div className="protection min-h-screen  bg-blue-600 flex justify-center items-center">
      <div className="text-white flex flex-col gap-10 justify-center items-center max-w-4xl px-4">
        <h1 className="text-white text-3xl sm:text-4xl font-Jost font-semibold tracking-widest w-full text-center">
          Prevention & Protection
        </h1>
        <span className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-Jost font-medium tracking-widest flex justify-between pt-2">
            Malware <FaBug />
          </h1>
          <h2 className="text-lg sm:text-xl font-Jost font-medium tracking-widest flex justify-between pb-2">
            Preventing malware attacks
          </h2>
          <p className="text-lg font-Jost">
            Preventing malware attacks requires good security infrastructure and
            Endpoint Security. Admins can easily manage device security health,
            keeping the devices and users secure from attacks. <br /> <br />
            Having good Web Security in place is important in preventing malware
            attacks via web applications. It prevents users from visiting
            malicious websites.
          </p>
        </span>
        <span className="max-w-3xl">
          <h1 className="text-3xl font-Jost font-medium tracking-widest flex justify-between pt-2">
            Phishing <GiHook />
          </h1>
          <h2 className="text-xl font-Jost font-medium tracking-widest flex justify-between pb-2">
            Preventing malware attacks
          </h2>
          <p className="text-lg font-Jost ">
            Phishing attacks are when an attacker pretends to be a trusted
            source or contact and encourages the user to open or click a
            malicious file or link. Resulting in the user giving them sensitive
            information, account credentials, etc.
          </p>
        </span>
        <span className="max-w-3xl">
          <h1 className="text-3xl font-Jost font-medium tracking-widest flex justify-between pt-2">
            Ransomware <GiPayMoney />
          </h1>
          <h2 className="text-xl font-Jost font-medium tracking-widest flex justify-between pb-2">
            Preventing malware attacks
          </h2>
          <p className="text-lg font-Jost ">
            Ransomware attacks leave the user data encrypted and inaccessible.
            To access the data attackers will request a ransom amount for the
            release of data commonly in form of cryptocurrency.
          </p>
        </span>
        <span className="max-w-3xl">
          <h1 className="text-3xl font-Jost font-medium tracking-widest flex justify-between pt-2">
            Weak Passwords <Tb123 />
          </h1>
          <h2 className="text-xl font-Jost font-medium tracking-widest flex justify-between pb-2">
            Preventing malware attacks
          </h2>
          <p className="text-lg font-Jost ">
            Users with multiple accounts tend to use repeating passwords. On top
            of repeating they tend to use weak passwords which are easily
            guessable by attackers as such resulting in unauthorized access and
            data theft.
          </p>
        </span>
        <span className="max-w-3xl">
          <h1 className="text-3xl font-Jost font-medium tracking-widest flex justify-between pt-2">
            Insider Threats <FaPersonShelter />
          </h1>
          <h2 className="text-xl font-Jost font-medium tracking-widest flex justify-between pb-2">
            Preventing malware attacks
          </h2>
          <p className="text-lg font-Jost ">
            An insider threat involves an employee, associates or former
            employee. Anyone with knowledge about the inner workings of the
            business. With such information an attacker is able to gain
            confidential data or leak it with malicious or carelessness.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Protection;
