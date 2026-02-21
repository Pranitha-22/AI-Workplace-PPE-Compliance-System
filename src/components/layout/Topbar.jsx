import React, { useEffect, useState } from "react";

export default function Topbar() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="topbar">

      {/* LEFT */}
      <div className="topbar-left"></div>

      {/* CENTER */}
      <div className="topbar-center">
        <h2>SafetyEye Monitoring System</h2>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        Admin • {now.toLocaleTimeString()}
      </div>

    </header>
  );
}
