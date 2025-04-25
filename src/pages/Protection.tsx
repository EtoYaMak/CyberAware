import { FaBug } from "react-icons/fa";
import { GiHook } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { TbNumber123 } from "react-icons/tb";
import { FaPersonShelter } from "react-icons/fa6";
import "./pages.css";

const Protection: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="section-title">
          Prevention & Protection
        </h1>

        <div className="info-section">
          <h2>
            Malware <FaBug />
          </h2>
          <h3>
            Preventing malware attacks
          </h3>
          <p>
            Preventing malware attacks requires good security infrastructure and
            Endpoint Security. Admins can easily manage device security health,
            keeping the devices and users secure from attacks. <br /> <br />
            Having good Web Security in place is important in preventing malware
            attacks via web applications. It prevents users from visiting
            malicious websites.
          </p>
        </div>

        <div className="info-section">
          <h2>
            Phishing <GiHook />
          </h2>
          <h3>
            Preventing phishing attacks
          </h3>
          <p>
            Phishing attacks are when an attacker pretends to be a trusted
            source or contact and encourages the user to open or click a
            malicious file or link. Resulting in the user giving them sensitive
            information, account credentials, etc.
          </p>
        </div>

        <div className="info-section">
          <h2>
            Ransomware <GiPayMoney />
          </h2>
          <h3>
            Preventing ransomware attacks
          </h3>
          <p>
            Ransomware attacks leave the user data encrypted and inaccessible.
            To access the data attackers will request a ransom amount for the
            release of data commonly in form of cryptocurrency.
          </p>
        </div>

        <div className="info-section">
          <h2>
            Password Security <TbNumber123 />
          </h2>
          <h3>
            Strengthening password security
          </h3>
          <p>
            Users with multiple accounts tend to use repeating passwords. On top
            of repeating they tend to use weak passwords which are easily
            guessable by attackers as such resulting in unauthorized access and
            data theft.
          </p>
        </div>

        <div className="info-section">
          <h2>
            Insider Threats <FaPersonShelter />
          </h2>
          <h3>
            Preventing insider threats
          </h3>
          <p>
            An insider threat involves an employee, associates or former
            employee. Anyone with knowledge about the inner workings of the
            business. With such information an attacker is able to gain
            confidential data or leak it with malicious or carelessness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Protection;
