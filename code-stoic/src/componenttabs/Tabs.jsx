export default function Tabs() {
  return <>
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>Hello Demo</li>
        <li>Hello Props Destructure Array</li>
        <li>Hello Object</li>
        <li>Fruits Array</li>
        <li>Fruits Object</li>
        <li>Use State Count</li>
        <li>Use State Object</li>
        <li>Use State Array</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  </>;
}
