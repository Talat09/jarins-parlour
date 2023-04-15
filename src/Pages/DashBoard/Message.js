import React, { useEffect, useState } from "react";

const Message = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("https://jarin-portals-server.vercel.app/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold ">Manage Message List</h1>
      <div className="overflow-x-auto mt-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-primary text-base">Name</th>
              <th className="text-primary text-base">Phone</th>
              <th className="text-primary text-base">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{message.name}</td>
                <td>{message.phone}</td>
                <td>{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Message;
