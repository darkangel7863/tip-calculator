import { useState } from 'react';
export default function App() {
  const [bill, setBill] = useState(0);
  const [yourService, setYourService] = useState(0);
  const [yourFriService, setYourFriService] = useState(0);
  function resetValues() {
    setBill(0);
    setYourService(0);
    setYourFriService(0);
  }
  return (
    <div>
      <Bill OnChangeBill={setBill} bill={bill} />
      <YourService onChangeService={setYourService} yourService={yourService} />
      <YourFriendService
        onChangeFriService={setYourFriService}
        yourFriService={yourFriService}
      />
      {bill > 0 && (
        <>
          <Message
            bill={bill}
            yourService={yourService}
            yourFriService={yourFriService}
          />
          <Reset reset={resetValues} />
        </>
      )}
    </div>
  );
}
function Bill({ bill, OnChangeBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        onChange={e => OnChangeBill(e.target.value)}
        value={bill}
      />
    </div>
  );
}
function YourService({ onChangeService, yourService }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select
        onChange={e => onChangeService(e.target.value)}
        value={yourService}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was Okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}
function YourFriendService({ yourFriService, onChangeFriService }) {
  return (
    <div>
      <span>How did your friend like the service?</span>
      <select
        onChange={e => onChangeFriService(e.target.value)}
        value={yourFriService}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was Okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Message({ bill, yourService, yourFriService }) {
  let tip = (((Number(yourService) + Number(yourFriService)) / 2) * bill) / 100;
  let total = Number(bill) + Number(tip);
  return (
    <div>
      <p className="message">
        You pay ${total} (${bill} + ${tip})
      </p>
    </div>
  );
}
function Reset({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
